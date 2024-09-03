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
        this.posts = data.posts;
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
    getPostById(id) {
      return this.posts.find((post) => post.id === id);
    },
    async getPostBySlug(slug) {
      const post = this.posts.find((post) => post.slug === slug);
      if (!post) {
        await this.fetchPosts();
      }
      const newPost = this.posts.find((post) => post.slug === slug);
      return newPost;
    },
  },
});
