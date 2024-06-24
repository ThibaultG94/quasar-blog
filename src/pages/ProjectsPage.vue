<template>
  <div class="q-px-lg q-py-xl">
    <q-page>
      <h1 class="text-h2 text-weight-bold q-pb-lg border-line">Projets</h1>
      <div class="row no-wrap q-gutter-lg q-pt-xl justify-center">
        <div
          class="w-500 shadow-1"
          v-for="project in projects"
          :key="project.title"
        >
          <div class="q-mb-md">
            <q-img
              position="center"
              :src="project.image"
              :alt="project.title"
            />
          </div>
          <q-card-section class="q-px-lg q-pt-xs q-pb-xl">
            <h2 class="text-h5 text-weight-bold q-mb-md">
              {{ project.title }}
            </h2>
            <p :class="getTextColorClass('text-grey-7')" class="text-subtitle1">
              {{ project.description }}
            </p>
            <q-btn
              flat
              label="En savoir plus"
              :href="project.link"
              class="text-body1 text-accent text-weight-medium q-pl-none q-pt-md"
              no-caps
              icon-right="arrow_forward"
            />
          </q-card-section>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "ProjectsPage",
});

const props = defineProps({
  darkMode: Boolean,
});

const projects = [
  {
    title: "Site Portfolio",
    description:
      "Bienvenue sur mon site portfolio ! Ici, vous pouvez découvrir mes projets, consulter mon CV, et entrer en contact avec moi. Explorez les technologies que j'utilise, les applications que j'ai développées, et apprenez-en plus sur mon parcours professionnel et mes compétences en développement web.",
    image: "../../public/img/projet-portfolio.jpg",
    link: "#",
  },
  {
    title: "Vitrine Helium",
    description:
      "Bienvenue sur le site vitrine Helium, un exemple élégant et moderne de mes compétences en développement web. Ce projet met en avant un design épuré et responsive, ainsi qu'une présentation visuelle soignée pour offrir une expérience utilisateur agréable.",
    image: "../../public/img/helium.jpg",
    link: "#",
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
