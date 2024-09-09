// src/stores/postStore.js
import { defineStore } from "pinia";
import gql from "graphql-tag";
import apolloClient from "src/apollo-client";

export const usePostStore = defineStore("postStore", {
  state: () => ({
    posts: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchPosts(orderBy = { createdAt: "desc" }) {
      this.loading = true;
      this.error = null;

      const GET_POSTS = gql`
        query Posts($orderBy: [PostOrderByInput!]!) {
          posts(orderBy: $orderBy) {
            id
            slug
            title
            description
            author {
              name
            }
            content {
              document
            }
            createdAt
            tags {
              id
              name
            }
          }
        }
      `;

      try {
        if (this.posts.length) {
          return;
        }
        const { data } = await apolloClient.query({
          query: GET_POSTS,
          variables: { orderBy },
        });
        this.posts = data.posts.map((post) => ({ ...post, comments: [] }));
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    async addComment(postId, author, email, content) {
      const ADD_COMMENT = gql`
        mutation AddComment(
          $postId: ID!
          $author: String!
          $email: String!
          $content: String!
        ) {
          createComment(
            data: {
              author: $author
              email: $email
              content: $content
              post: { connect: { id: $postId } }
            }
          ) {
            id
            author
            email
            content
            createdAt
          }
        }
      `;

      try {
        const { data } = await apolloClient.mutate({
          mutation: ADD_COMMENT,
          variables: { postId, author, email, content },
        });

        // Mise à jour du state local
        const postIndex = this.posts.findIndex((post) => post.id === postId);
        if (postIndex !== -1) {
          if (!this.posts[postIndex].comments) {
            this.posts[postIndex].comments = [];
          }
          this.posts[postIndex].comments.push(data.createComment);
        }

        return data.createComment;
      } catch (err) {
        console.error("Error adding comment", err);
        throw err;
      }
    },

    async fetchComments(postId) {
      const GET_COMMENTS = gql`
        query Comments($postId: ID!) {
          comments(
            where: { post: { id: { equals: $postId } } }
            orderBy: { createdAt: desc }
          ) {
            id
            author
            content
            createdAt
          }
        }
      `;

      try {
        const { data } = await apolloClient.query({
          query: GET_COMMENTS,
          variables: { postId },
        });

        // Mise à jour du state local
        const postIndex = this.posts.findIndex((post) => post.id === postId);
        if (postIndex !== -1) {
          this.posts[postIndex] = {
            ...this.posts[postIndex],
            comments: data.comments,
          };
        }

        return data.comments;
      } catch (err) {
        console.error("Error fetching comments", err);
        throw err;
      }
    },

    getPostById(id) {
      return this.posts.find((post) => post.id === id);
    },

    async getPostBySlug(slug) {
      let post = this.posts.find((post) => post.slug === slug);
      if (!post) {
        await this.fetchPosts();
        post = this.posts.find((post) => post.slug === slug);
      }
      if (post && !post.comments) {
        post = { ...post, comments: [] };
      }
      return post;
    },
  },
});
