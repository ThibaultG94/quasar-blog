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

    <!-- Section des articles -->
    <div class="column q-gutter-lg q-pt-lg">
      <div
        class="col-to-row no-wrap q-gutter-sm q-pb-md border-line"
        v-for="news in newsItems"
        :key="news.date"
      >
        <div
          class="w-150 text-subtitle1 text-weight-medium shrink-0"
          :class="getTextColorClass('text-grey-7')"
        >
          {{ news.date }}
        </div>
        <div>
          <h2 class="text-h5 text-weight-bold q-mb-xs">
            {{ news.title }}
          </h2>
          <div class="row wrap q-gutter-sm q-mb-sm">
            <span
              class="text-body2 text-accent text-weight-bold"
              v-for="tag in news.tags"
              :key="tag"
              >{{ tag }}</span
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
            :to="`/blog/${news.slug}`"
            label="En savoir plus"
            class="text-accent text-subtitle1 q-px-none text-weight-bold"
            no-caps
            icon-right="arrow_forward"
          />
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

  <!-- Section des informations utilisateur -->
  <div>
    <div v-if="loading">Chargement...</div>
    <div v-else-if="error">Erreur: {{ error.message }}</div>
    <div v-else-if="user">
      <h2 class="text-h5 text-weight-bold q-mb-xs">
        Informations de l'utilisateur :
      </h2>
      <p class="text-body1 q-mt-lg q-mb-md">Nom : {{ user.name }}</p>
      <p class="text-body1 q-mt-lg q-mb-md">Email : {{ user.email }}</p>
    </div>
    <div v-else>Aucune donnée utilisateur disponible.</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

// Déclaration des propriétés
const props = defineProps({
  darkMode: Boolean,
});

// Configuration de la requête GraphQL pour récupérer les informations utilisateur
const GET_USER = gql`
  query GetUser($email: String!) {
    user(where: { email: $email }) {
      id
      name
      email
    }
  }
`;

// L'email à rechercher (fixé ici pour l'exemple)
const userEmail = "thibault.guilhem@gmail.com";

// Récupération des données utilisateur via Apollo
const {
  result: userData,
  loading,
  error,
} = useQuery(GET_USER, { email: userEmail });

// Variable réactive pour stocker l'utilisateur
const user = ref(null);

// Surveiller les changements dans userData et mettre à jour l'utilisateur
watchEffect(() => {
  if (userData.value && userData.value.user) {
    user.value = userData.value.user;
  }
});

// Chargement des articles (existant)
const newsItems = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("/data/articles.json");
    newsItems.value = await response.json();
  } catch (error) {
    console.error("Error loading articles:", error);
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
