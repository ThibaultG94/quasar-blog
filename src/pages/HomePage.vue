<template>
  <div class="q-px-xs-md q-px-sm-lg q-pt-xl">
    <h1 class="text-size-h2 text-weight-bold q-mb-xs-xs q-mb-sm-sm q-mb-md-md">
      Actu
    </h1>
    <p
      class="q-pb-lg text-size-h6 text-weight-regular border-line"
      :class="getTextColorClass('text-grey-8')"
    >
      Découvrez toutes les actus web et tech, les dernières tendances, les
      astuces et les conseils pour les développeurs web et mobiles.
    </p>

    <div v-if="loading">Chargement des articles...</div>
    <div v-else-if="error">Erreur : {{ error.message }}</div>
    <div v-else>
      <!-- Section des articles -->
      <div class="column q-gutter-lg q-pt-lg">
        <div
          class="col-to-row no-wrap q-gutter-sm q-pb-md border-line"
          v-for="news in newsItems"
          :key="news.id"
        >
          <div
            class="w-150 text-subtitle1 text-weight-medium shrink-0"
            :class="getTextColorClass('text-grey-7')"
          >
            {{ new Date(news.createdAt).toLocaleDateString("fr-FR") }}
          </div>
          <div>
            <h2 class="text-h5 text-weight-bold q-mb-xs">
              {{ news.title }}
            </h2>
            <div class="row wrap q-gutter-sm q-mb-sm">
              <span
                class="text-body2 text-accent text-weight-bold"
                v-for="tag in news.tags"
                :key="tag.id"
                >{{ tag.name }}</span
              >
            </div>
            <p
              class="text-body1 q-mt-lg q-mb-md"
              :class="getTextColorClass('text-grey-7')"
            >
              {{ news.description }}
            </p>
            <q-btn
              flat
              :to="`/blog/${news.id}`"
              label="En savoir plus"
              class="text-accent text-subtitle1 q-px-none text-weight-bold"
              no-caps
              icon-right="arrow_forward"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="w-full text-right q-pt-sm">
      <q-btn
        flat
        to="/blog"
        label="Tous les articles"
        class="text-accent text-subtitle1 q-px-none text-weight-bold text-right"
        no-caps
        icon-right="arrow_forward"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

// Déclaration des propriétés
const props = defineProps({
  darkMode: Boolean,
});

// Configuration de la requête GraphQL pour récupérer les articles
const GET_POSTS = gql`
  query Posts {
    posts {
      id
      createdAt
      description
      title
      tags {
        id
        name
      }
    }
  }
`;

// Récupération des articles via Apollo
const { result: postsData, loading, error } = useQuery(GET_POSTS);

// Variable réactive pour stocker les articles
const newsItems = ref([]);

// Surveiller les changements dans postsData et mettre à jour les articles
watchEffect(() => {
  if (postsData.value && postsData.value.posts) {
    newsItems.value = postsData.value.posts;
  }
});

// Fonction pour déterminer la classe CSS des couleurs de texte en fonction du mode sombre
function getTextColorClass(lightClass) {
  const darkModeMapping = {
    "text-grey-7": "text-grey-6",
    "text-grey-8": "text-grey-5",
    "text-grey-9": "text-grey-4",
  };
  return props.darkMode ? darkModeMapping[lightClass] : lightClass;
}
</script>
