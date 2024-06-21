<template>
  <q-page>
    <h1 class="text-h3 text-weight-bold q-mb-xl">Projets</h1>
    <div class="row no-wrap q-gutter-lg justify-center">
      <q-card class="w-500" v-for="project in projects" :key="project.title">
        <q-card-section>
          <img :src="project.image" :alt="project.title" />
        </q-card-section>
        <q-card-section class="q-pa-lg">
          <h2 class="text-h5 text-weight-bold">{{ project.title }}</h2>
          <p class="text-subtitle1">{{ project.description }}</p>
          <q-btn
            flat
            label="En savoir plus"
            :href="project.link"
            class="text-accent text-weight-bold"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "ProjectsPage",
});

const projects = [
  {
    title: "Site Portfolio",
    description:
      "Bienvenue sur mon site portfolio ! Ici, vous pouvez découvrir mes projets, consulter mon CV, et entrer en contact avec moi. Explorez les technologies que j'utilise, les applications que j'ai développées, et apprenez-en plus sur mon parcours professionnel et mes compétences en développement web.",
    image: "path/to/portfolio-image.jpg",
    link: "#",
  },
  {
    title: "Vitrine Helium",
    description:
      "Bienvenue sur le site vitrine Helium, un exemple élégant et moderne de mes compétences en développement web. Ce projet met en avant un design épuré et responsive, ainsi qu'une présentation visuelle soignée pour offrir une expérience utilisateur agréable.",
    image: "path/to/helium-image.jpg",
    link: "#",
  },
];
</script>

<style scoped></style>
