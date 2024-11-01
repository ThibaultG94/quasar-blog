<template>
  <div class="q-px-xs-md q-px-sm-lg q-pt-xl q-pb-lg">
    <q-page>
      <h1 class="text-size-h2 text-weight-bold q-pb-lg border-line">About</h1>
      <div class="col-to-row no-wrap q-gutter-lg q-mt-sm">
        <aside class="text-center col-3">
          <div class="w-200 h-200 q-mx-auto q-mb-sm">
            <div class="rounded w-200 h-200 overflow-hidden">
              <img
                src="/img/avatar.webp"
                alt="Profile Picture"
                width="245"
                height="245"
                style="transform: translateX(-15px) translateY(-10px)"
              />
            </div>
          </div>
          <h2 class="text-h5 text-weight-bold q-mt-md q-mb-xs">
            Thibault Guilhem
          </h2>
          <p
            :class="getTextColorClass('text-grey-7')"
            class="text-subtitle1 q-mb-sm"
          >
            Développeur Web
          </p>
          <address class="row no-wrap justify-center q-gutter-xs">
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
              href="https://www.linkedin.com/in/thibault-g-10b37a271/"
              target="_blank"
              class="text-body1"
            />
          </address>
        </aside>
        <article
          :class="getTextColorClass('text-grey-9')"
          class="text-subtitle1 col"
        >
          <p class="q-mb-lg">
            Le parcours qui mène au développement web est rarement linéaire.
            Après plusieurs détours professionnels, c'est dans ce domaine que
            j'ai trouvé un terrain d'expression à la hauteur de ma curiosité. Ce
            blog est le journal de bord d'un apprentissage autodidacte, où
            chaque projet représente une nouvelle découverte, chaque défi une
            occasion de progresser. Ici, pas de CV formaté, mais plutôt le
            témoignage d'une exploration continue, le reflet d'idées qui ne
            cessent d'évoluer.
          </p>
          <p class="q-mb-lg">
            Les projets présentés ici sont le fruit d'un apprentissage continu.
            React et Node.js constituent les piliers techniques de ce travail,
            mais ils ne sont que des outils au service d'une approche plus
            globale.
          </p>
          <p class="q-mb-lg">
            L'intelligence artificielle et l'automatisation dessinent les
            contours d'un avenir aussi fascinant qu'incertain. Observer ces
            mutations technologiques, c'est tenter de décrypter les rouages
            d'une société en pleine métamorphose.
          </p>
          <p>
            Le code n'est pas qu'une série d'instructions ; c'est un prisme à
            travers lequel on peut appréhender le monde, tout en gardant un
            regard lucide sur ses implications. Dans cet univers binaire, la
            pensée, elle, reste résolument analogique.
          </p>
        </article>
      </div>
    </q-page>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "AboutPage",
});

const props = defineProps({
  darkMode: Boolean,
});

function getTextColorClass(lightClass) {
  const darkModeMapping = {
    "text-grey-7": "text-grey-6",
    "text-grey-8": "text-grey-5",
    "text-grey-9": "text-grey-4",
  };
  return props.darkMode ? darkModeMapping[lightClass] : lightClass;
}
</script>

<style scoped>
p {
  line-height: 1.7rem;
}
</style>
