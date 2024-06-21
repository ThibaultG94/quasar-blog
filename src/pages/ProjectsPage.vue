<template>
  <q-page class="q-py-md projects-page">
    <div>
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
      <footer class="footer">
        <p>Thibault Guilhem • © 2024 • Chroniques d'un dev</p>
        <div class="social-links">
          <q-btn
            flat
            round
            icon="fab fa-twitter"
            href="https://twitter.com/ThibaultG94"
            target="_blank"
            aria-label="Twitter"
          />
          <q-btn
            flat
            round
            icon="fab fa-github"
            href="https://github.com/ThibaultG94"
            target="_blank"
            aria-label="GitHub"
          />
          <q-btn
            flat
            round
            icon="fab fa-linkedin"
            href="https://linkedin.com/in/thibaultG94"
            target="_blank"
            aria-label="LinkedIn"
          />
        </div>
      </footer>
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

<style scoped>
.footer {
  margin-top: 3rem;
  text-align: center;
  color: #666;
}

.footer p {
  margin-bottom: 0.5rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
