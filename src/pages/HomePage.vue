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
          v-for="news in posts"
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
              :to="`/blog/${news.slug}`"
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
import { ref, watchEffect, onMounted } from "vue";
import { usePostStore } from "src/stores/postStore";

// Déclaration des propriétés
const props = defineProps({
  darkMode: Boolean,
});

// Accès au store
const postStore = usePostStore();

// Variables réactives pour les posts, loading et error
const posts = ref([]);
const loading = ref(false);
const error = ref(null);

// Récupération des articles via le store lors du montage du composant
onMounted(async () => {
  await postStore.fetchPosts();
  posts.value = postStore.posts;
  loading.value = postStore.loading;
  error.value = postStore.error;
});

// Surveiller les changements dans le store pour mettre à jour les variables locales
watchEffect(() => {
  posts.value = postStore.posts;
  loading.value = postStore.loading;
  error.value = postStore.error;
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
