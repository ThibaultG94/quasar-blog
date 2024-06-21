<template>
  <q-page class="q-pa-md about-page">
    <div class="container">
      <h1 class="title">About</h1>
      <div class="about-content">
        <div class="profile">
          <img
            src="path/to/profile-picture.jpg"
            alt="Profile Picture"
            class="profile-picture"
          />
          <h2>Thibault Guilhem</h2>
          <p>Développeur Web</p>
          <div class="social-links">
            <q-btn
              flat
              round
              icon="mail"
              aria-label="Email"
              href="mailto:email@example.com"
            />
            <q-btn
              flat
              round
              icon="fab fa-github"
              aria-label="GitHub"
              href="https://github.com/ThibaultG94"
              target="_blank"
            />
            <q-btn
              flat
              round
              icon="fab fa-linkedin"
              aria-label="LinkedIn"
              href="https://linkedin.com/in/thibaultG94"
              target="_blank"
            />
            <q-btn
              flat
              round
              icon="fab fa-xing"
              aria-label="Xing"
              href="https://www.xing.com/profile/Thibault_Guilhem"
              target="_blank"
            />
          </div>
        </div>
        <div class="biography">
          <p>
            Je m'appelle Thibault Guilhem, développeur web autodidacte passionné
            par les technologies modernes du web. Après avoir exploré divers
            domaines professionnels, notamment en tant que géomètre topographe,
            jardinier paysagiste et monteur, j’ai trouvé ma véritable vocation
            dans le développement web.
          </p>
          <p>
            Depuis bientôt deux ans, je me forme intensivement en autodidacte et
            ai acquis des compétences solides en Next.js, React, Node.js,
            TypeScript, Tailwind CSS, et MongoDB. Mon projet principal est le
            développement de mon application "Task Manager", qui utilise ces
            technologies pour offrir une gestion de tâches performante et
            sécurisée. Cette application permet d’organiser des tâches
            individuelles ou en groupe au sein de différents espaces de travail.
          </p>
          <p>
            En dehors du code, je suis un grand amateur de cinéma et de musique.
            J’aime aussi suivre de près les avancées dans le domaine de
            l’intelligence artificielle, notamment avec des outils comme ChatGPT
            et Copilot.
          </p>
          <p>
            Mon objectif est de continuer à apprendre et à évoluer en tant que
            développeur, en créant des applications innovantes et en contribuant
            à des projets stimulants.
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "AboutPage",
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.about-content {
  display: flex;
  gap: 2rem;
}

.profile {
  text-align: center;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.profile h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.profile p {
  font-size: 1rem;
  color: #777;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.biography {
  flex-grow: 1;
  font-size: 1rem;
  color: #ccc;
}
</style>
