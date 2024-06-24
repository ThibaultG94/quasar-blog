<template>
  <div class="q-px-lg q-pt-xl q-pb-lg">
    <q-page>
      <h1 class="text-h2 text-weight-bold q-pb-xl border-line">About</h1>
      <div class="row no-wrap q-gutter-lg q-mt-sm">
        <div class="text-center col-3">
          <div class="w-200 h-200 q-mx-auto q-mb-sm">
            <img
              src="/public/img/avatar.png"
              alt="Profile Picture"
              class="w-200 h-200 rounded"
            />
          </div>
          <h2 class="text-h5 text-weight-bold q-mt-md q-mb-xs">
            Thibault Guilhem
          </h2>
          <p class="text-subtitle1 text-grey-7 q-mb-sm">Développeur Web</p>
          <div class="row no-wrap justify-center q-gutter-xs">
            <q-btn
              flat
              round
              icon="fa fa-envelope"
              aria-label="Email"
              href="mailto:thibault.guilhem@gmail.com"
              class="text-body1"
            />
            <q-btn
              flat
              round
              icon="fab fa-github"
              aria-label="GitHub"
              href="https://github.com/ThibaultG94"
              target="_blank"
              class="text-body1"
            />
            <q-btn
              flat
              round
              icon="fab fa-linkedin"
              aria-label="LinkedIn"
              href="https://linkedin.com/in/thibaultG94"
              target="_blank"
              class="text-body1"
            />
          </div>
        </div>
        <div class="text-subtitle1 text-grey-9 col">
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
    </q-page>
  </div>
</template>

<script setup>
defineOptions({
  name: "AboutPage",
});
</script>

<style scoped></style>
