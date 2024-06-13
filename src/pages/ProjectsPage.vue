<template>
  <q-page class="q-py-md projects-page">
    <div class="container">
      <h1 class="title">Projets</h1>
      <div class="projects-container">
        <q-card
          class="project-card"
          v-for="project in projects"
          :key="project.title"
        >
          <q-card-section class="project-image">
            <img :src="project.image" :alt="project.title" />
          </q-card-section>
          <q-card-section>
            <h2 class="project-title">{{ project.title }}</h2>
            <p class="project-description">{{ project.description }}</p>
            <q-btn
              flat
              label="En savoir plus"
              :href="project.link"
              class="project-link"
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
  // Ajoute plus de projets ici si nécessaire
];
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.project-card {
  width: 100%;
  max-width: 500px;
}

.project-image img {
  width: 100%;
  height: auto;
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
}

.project-description {
  font-size: 1rem;
  color: #333;
  margin: 1rem 0;
}

.project-link {
  color: #f50057;
  font-weight: bold;
  padding-left: 0;
  padding-right: 0;
}

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
