<template>
  <q-page>
    <div class="q-px-lg">
      <h1 class="text-h4 text-weight-bold q-mb-sm">Actu</h1>
      <p class="q-mb-lg text-h6 text-weight-regular text-grey-8">
        Découvrez toutes les actus web et tech, les dernières tendances, les
        astuces et les conseils pour les développeurs web et mobiles.
      </p>
      <div class="news-container">
        <div class="news-item" v-for="news in newsItems" :key="news.date">
          <div class="news-date">{{ news.date }}</div>
          <div class="news-content">
            <h2 class="news-title">{{ news.title }}</h2>
            <div class="news-tags">
              <span class="news-tag" v-for="tag in news.tags" :key="tag">{{
                tag
              }}</span>
            </div>
            <p class="news-description">{{ news.description }}</p>
            <q-btn flat label="En savoir plus" class="news-link" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
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
.news-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.news-item {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1.5rem;
}

.news-date {
  font-size: 1rem;
  color: #999;
  flex-shrink: 0;
  width: 100px;
}

.news-content {
  flex-grow: 1;
}

.news-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.news-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.news-tag {
  font-size: 0.875rem;
  color: #f50057;
}

.news-description {
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.news-link {
  color: #f50057;
  padding-left: 0;
  padding-right: 0;
  font-weight: bold;
}
</style>
