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
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "HomePage",
});

const props = defineProps({
  darkMode: Boolean,
});

const newsItems = [
  {
    date: "15 mai 2024",
    title: "Bienvenue sur mon Blog - Découvrez mon Parcours et mes Projets",
    tags: ["INTRODUCTION", "WEB-DEVELOPMENT", "PORTFOLIO"],
    description:
      "Dans cet article, je vous présente mon parcours, mes compétences, et les projets sur lesquels je travaille, notamment mon application 'Task Manager'.",
    slug: "bienvenue-sur-mon-blog",
  },
  {
    date: "5 août 2023",
    title: "Lancement de Tailwind Nextjs Starter Blog v2.0",
    tags: ["NEXT-JS", "TAILWIND", "GUIDE", "FEATURE"],
    description:
      "Sortie du template Tailwind Nextjs Starter Blog v2.0, refactorisé avec le répertoire Nextjs App et l'installation des composants React Server. Découvrez les nouvelles fonctionnalités et comment migrer depuis la V1.",
    slug: "lancement-tailwind-nextjs-v2",
  },
  {
    date: "7 août 2021",
    title: "Nouvelles fonctionnalités dans la v1",
    tags: ["NEXT-JS", "TAILWIND", "GUIDE"],
    description:
      "Un aperçu des nouvelles fonctionnalités de la v1 - copie de blocs de code, auteurs multiples, mise en page du frontmatter, etc.",
    slug: "nouvelles-fonctionnalites-v1",
  },
];

function getTextColorClass(lightClass) {
  const darkModeMapping = {
    "text-grey-7": "text-grey-6",
    "text-grey-8": "text-grey-5",
    "text-grey-9": "text-grey-4",
  };
  return props.darkMode ? darkModeMapping[lightClass] : lightClass;
}
</script>

<style scoped></style>
