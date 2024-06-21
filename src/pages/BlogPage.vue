<template>
  <div class="q-pt-lg q-pb-xl">
    <div class="row q-gutter-x-md q-px-md">
      <div class="col-auto">
        <q-card>
          <div class="whity">
            <q-card-section>
              <div class="text-h6 text-weight-bold text-uppercase">
                Tous les Articles
              </div>
            </q-card-section>
            <q-list dense>
              <q-item
                v-for="category in categories"
                :key="category.name"
                clickable
              >
                <q-item-section>
                  <q-item-label>
                    {{ category.name }} <span>({{ category.count }})</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-card>
      </div>
      <div class="col">
        <div class="q-pa-md q-mb-none q-border-b column q-gutter-md">
          <div v-for="news in paginatedNews" :key="news.date" class="q-mb-lg">
            <div class="text-subtitle1 text-grey-7">
              {{ news.date }}
            </div>
            <div>
              <h2 class="q-mb-sm q-mt-none text-h5 text-weight-bold">
                {{ news.title }}
              </h2>
              <div class="row items-start q-gutter-xs q-mb-sm">
                <span
                  class="text-body1 text-accent text-uppercase"
                  v-for="tag in news.tags"
                  :key="tag"
                  >{{ tag }}</span
                >
              </div>
              <p class="q-mb-sm text-subtitle1 darky">{{ news.description }}</p>
              <q-btn
                flat
                label="En savoir plus"
                class="q-px-none text-accent text-weight-bold"
              />
            </div>
          </div>
        </div>
        <div
          class="row justify-between items-center q-mt-lg"
          v-if="totalPages > 1"
        >
          <q-btn
            flat
            label="Précédent"
            @click="prevPage"
            :disabled="currentPage === 1"
          />
          <span>{{ currentPage }} de {{ totalPages }}</span>
          <q-btn
            flat
            label="Suivant"
            @click="nextPage"
            :disabled="currentPage === totalPages"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

defineOptions({
  name: "BlogPage",
});

const categories = [
  { name: "NEXT-JS", count: 6 },
  { name: "GUIDE", count: 5 },
  { name: "TAILWIND", count: 3 },
  { name: "FEATURE", count: 2 },
  { name: "MATH", count: 1 },
  { name: "OLS", count: 1 },
  { name: "GITHUB", count: 1 },
  { name: "HELLO", count: 1 },
  { name: "INTRODUCTION", count: 1 },
  { name: "WEB-DEVELOPMENT", count: 1 },
  { name: "PORTFOLIO", count: 1 },
  { name: "HOLIDAY", count: 1 },
  { name: "CANADA", count: 1 },
  { name: "IMAGES", count: 1 },
  { name: "WRITINGS", count: 1 },
  { name: "BOOK", count: 1 },
  { name: "REFLECTION", count: 1 },
  { name: "MULTI-AUTHOR", count: 1 },
];

const newsItems = [
  {
    date: "15 mai 2024",
    title: "Bienvenue sur mon Blog - Découvrez mon Parcours et mes Projets",
    tags: ["INTRODUCTION", "WEB-DEVELOPMENT", "PORTFOLIO"],
    description:
      "Dans cet article, je vous présente mon parcours, mes compétences, et les projets sur lesquels je travaille, notamment mon application 'Task Manager'.",
  },
  {
    date: "5 août 2023",
    title: "Lancement de Tailwind Nextjs Starter Blog v2.0",
    tags: ["NEXT-JS", "TAILWIND", "GUIDE", "FEATURE"],
    description:
      "Sortie du template Tailwind Nextjs Starter Blog v2.0, refactorisé avec le répertoire Nextjs App et l'installation des composants React Server. Découvrez les nouvelles fonctionnalités et comment migrer depuis la V1.",
  },
  {
    date: "7 août 2021",
    title: "Nouvelles fonctionnalités dans la v1",
    tags: ["NEXT-JS", "TAILWIND", "GUIDE"],
    description:
      "Un aperçu des nouvelles fonctionnalités de la v1 - copie de blocs de code, auteurs multiples, mise en page du frontmatter, etc.",
  },
  {
    date: "2 mai 2021",
    title:
      "Introduction de messages en plusieurs parties avec le routage imbriqué",
    tags: ["MULTI-AUTHOR", "NEXT-JS", "FEATURE"],
    description:
      "Le modèle de blog prend en charge les articles dans des sous-dossiers imbriqués. Cela peut être utilisé pour regrouper les articles au contenu similaire, par exemple un cours en plusieurs parties. Cet article est lui-même un exemple de parcours imbriqué !",
  },
  {
    date: "31 janvier 2021",
    title: "Mon titre fantaisiste",
    tags: ["HELLO"],
    description: "projet de poste",
  },
  // Ajoute plus d'articles ici pour tester la pagination
  {
    date: "15 janvier 2021",
    title: "Un autre titre",
    tags: ["WEB-DEVELOPMENT"],
    description: "Description d'un autre article.",
  },
  {
    date: "10 janvier 2021",
    title: "Encore un titre",
    tags: ["NEXT-JS", "GUIDE"],
    description: "Description d'un autre article encore.",
  },
];

const currentPage = ref(1);
const itemsPerPage = 5;

const totalPages = computed(() => {
  return Math.ceil(newsItems.length / itemsPerPage);
});

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return newsItems.slice(start, end);
});

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}
</script>

<style scoped></style>
