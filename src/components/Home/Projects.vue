<template>
  <q-card>
    <q-card-section>
      <div class="text-h4">Mes Projets</div>
    </q-card-section>
    <q-carousel v-model="slide" animated infinite>
      <q-carousel-slide
        v-for="(projet, index) in projets"
        :key="index"
        :name="index"
        :img-src="projet.image"
      >
        <div class="absolute-bottom text-center q-px-md q-pb-lg">
          <div class="text-h6">{{ projet.title }}</div>
          <q-btn
            flat
            color="white"
            :label="projet.linkLabel"
            :href="projet.link"
            target="_blank"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-card>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "ProjectsComponent",
});

const slide = ref(0);
const projets = [
  {
    title: "Projet 1",
    image: "path/to/projet1.jpg",
    link: "https://github.com/ThibaultG94/projet1",
    linkLabel: "Voir sur GitHub",
  },
  {
    title: "Projet 2",
    image: "path/to/projet2.jpg",
    link: "https://github.com/ThibaultG94/projet2",
    linkLabel: "Voir sur GitHub",
  },
  // Ajoute d'autres projets ici
];
</script>

<style scoped>
/* Ajoute ton style ici */
</style>
