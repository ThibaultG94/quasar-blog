<template>
  <div class="q-px-lg">
    <h1 class="text-h3 text-weight-bold q-mb-md">Actu</h1>
    <p class="q-mb-lg text-body1 text-weight-regular text-grey-8">
      Découvrez toutes les actus web et tech, les dernières tendances, les
      astuces et les conseils pour les développeurs web et mobiles.
    </p>
    <div class="column q-gutter-lg">
      <div
        class="row no-wrap q-gutter-sm q-pb-md border-news"
        v-for="news in newsItems"
        :key="news.date"
      >
        <div class="w-150 text-subtitle1 text-grey-7 shrink-0">
          {{ news.date }}
        </div>
        <div>
          <h2 class="text-h5 text-weight-bold q-mb-xs">
            {{ news.title }}
          </h2>
          <div class="row wrap q-gutter-sm q-mb-sm">
            <span
              class="text-caption text-accent text-weight-medium"
              v-for="tag in news.tags"
              :key="tag"
              >{{ tag }}</span
            >
          </div>
          <p class="text-body1 q-mt-lg q-mb-md text-grey-7">
            {{ news.description }}
          </p>
          <q-btn
            flat
            label="En savoir plus"
            class="text-accent text-subtitle2 q-px-none text-weight-medium"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "HomePage",
});

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
];
</script>

<style scoped>
.border-news {
  border-bottom: 1px solid #d8d8d8;
}
</style>
