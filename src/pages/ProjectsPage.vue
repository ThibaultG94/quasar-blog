<template>
  <div class="q-px-xs-md q-px-sm-lg q-py-xl">
    <h1 class="text-size-h2 text-weight-bold q-pb-lg border-line">Projets</h1>
    <div
      class="col-to-row no-wrap q-gutter-lg q-mx-xs-auto q-mx-sm-none q-pt-xl justify-center"
    >
      <div
        class="w-500 shadow-1"
        v-for="project in projects"
        :key="project.title"
      >
        <a
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: none; color: inherit"
        >
          <q-img position="center" :src="project.image" :alt="project.title" />
        </a>
        <q-card-section class="q-px-lg q-pt-lg q-pb-xl">
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            style="text-decoration: none; color: inherit"
          >
            <div class="q-mb-md">
              <h2 class="text-h5 text-weight-bold q-mb-md">
                {{ project.title }}
              </h2>
            </div>
          </a>
          <p :class="getTextColorClass('text-grey-7')" class="text-subtitle1">
            {{ project.description }}
          </p>
          <q-btn
            flat
            label="En savoir plus"
            target="_blank"
            :href="project.link"
            class="text-body1 text-accent text-weight-medium q-pl-none q-pt-md"
            no-caps
            icon-right="arrow_forward"
          />
        </q-card-section>
      </div>
    </div>
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
    title: "Task Manager",
    description:
      "Bienvenue sur l'application Task Manager, une application de gestion de tâches conçue pour être performante et sécurisée. Ce projet permet de s'organiser seul ou en équipe en créant des espaces de travail dédié. Avec un design épuré et responsive, ainsi qu'une présentation visuelle soignée pour offrir une expérience utilisateur agréable.",
    image: "/img/task-manager.webp",
    link: "https://task-manager-front.admin.serv.thiserv.com/",
  },
  {
    title: "Site Portfolio",
    description:
      "Bienvenue sur mon site portfolio ! Ici, vous pouvez découvrir mes projets, consulter mon CV, et entrer en contact avec moi. Explorez les technologies que j'utilise, les applications que j'ai développées, et apprenez-en plus sur mon parcours professionnel et mes compétences en développement web.",
    image: "img/projet-portfolio.webp",
    link: "https://next-portfolio.admin.serv.thiserv.com/",
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
