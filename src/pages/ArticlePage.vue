<template>
  <div class="q-px-xs-md q-px-sm-lg q-pt-xl">
    <div v-if="article">
      <div class="text-center q-pt-md q-mb-lg">
        <p
          class="text-subtitle1 q-mt-none text-weight-medium"
          :class="getTextColorClass('text-grey-8')"
        >
          {{ article.day }} {{ article.date }}
        </p>
        <h1 class="text-size-h3 text-weight-bold q-pb-md border-line">
          {{ article.title }}
        </h1>
      </div>
      <div class="col-to-row">
        <div class="q-mr-xl">
          <div class="row items-center q-pt-lg q-pb-xl border-line">
            <img
              src="/public/img/avatar.png"
              alt="Profile Picture"
              class="w-40 h-40 rounded q-mr-sm"
            />
            <div class="text-body2 text-weight-medium">Thibault Guilhem</div>
          </div>
          <div class="q-py-xl border-line">
            <p
              class="text-uppercase text-caption text-weight-medium"
              :class="getTextColorClass('text-grey-7')"
            >
              Tags
            </p>
            <div class="row w-250">
              <span
                class="q-pr-md text-body2 text-accent text-weight-medium"
                v-for="tag in article.tags"
                :key="tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <div class="q-py-xl">
            <div v-if="previousArticle">
              <p
                class="text-uppercase text-caption text-weight-medium"
                :class="getTextColorClass('text-grey-7')"
              >
                Article précédent
              </p>
              <div class="row w-250">
                <router-link
                  :to="`/blog/${previousArticle.slug}`"
                  class="text-body2 text-accent text-weight-medium"
                >
                  {{ previousArticle.title }}
                </router-link>
              </div>
            </div>
            <div v-if="nextArticle" class="q-py-lg">
              <p
                class="text-uppercase text-caption text-weight-medium"
                :class="getTextColorClass('text-grey-7')"
              >
                Article suivant
              </p>
              <div class="row w-250">
                <router-link
                  :to="`/blog/${nextArticle.slug}`"
                  class="text-body2 text-accent text-weight-medium"
                >
                  {{ nextArticle.title }}
                </router-link>
              </div>
            </div>
          </div>
          <q-btn
            flat
            to="/blog"
            label="Retour au blog"
            class="text-accent q-px-none q-mb-md"
            no-caps
            icon-left="arrow_back"
          />
        </div>
        <div class="article-content q-mb-lg">
          <div v-html="article.content"></div>
        </div>
      </div>
      <div class="author-bio q-mt-lg">
        <img
          src="/path/to/author.jpg"
          alt="Thibault Guilhem"
          class="author-img-large"
        />
        <div class="text-body1 text-weight-bold q-mt-md">Thibault Guilhem</div>
      </div>
    </div>
    <div v-else>
      <p>Article non trouvé.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
  darkMode: Boolean,
});

const articles = ref([
  {
    date: "15 mai 2024",
    day: "mercredi",
    title: "Bienvenue sur mon Blog - Découvrez mon Parcours et mes Projets",
    tags: ["INTRODUCTION", "WEB-DEVELOPMENT", "PORTFOLIO"],
    description:
      "Dans cet article, je vous présente mon parcours, mes compétences, et les projets sur lesquels je travaille, notamment mon application 'Task Manager'.",
    slug: "bienvenue-sur-mon-blog",
    content: `
        <h2>Bienvenue sur mon Blog - Le Début d’une Nouvelle Aventure</h2>
        <p>Salut à tous et bienvenue sur mon blog ! Je m’appelle Thibault Guilhem, et je suis un développeur web autodidacte passionné par les technologies modernes du web. Ce blog est l’aboutissement de plusieurs années de travail acharné et de passion pour le développement web.</p>
        <h3>Pourquoi ce blog ?</h3>
        <p>L’idée de créer ce blog m’est venue après avoir passé des heures à lire et à apprendre des blogs de développeurs, à regarder des tutoriels et à expérimenter avec divers projets. J’ai réalisé que partager mes connaissances, mes découvertes et mes expériences pourrait non seulement aider d’autres développeurs en herbe, mais aussi me permettre de continuer à apprendre et à grandir dans ce domaine.</p>
        <h3>Les Sujets Abordés</h3>
        <h4>Développement Web</h4>
        <p>Vous trouverez ici des articles détaillés sur le développement web, couvrant des technologies comme Next.js, React, Node.js, TypeScript, Tailwind CSS, et MongoDB. Que vous soyez débutant ou développeur expérimenté, j’espère que vous trouverez des informations utiles et inspirantes.</p>
        <h4>Projets Personnels</h4>
        <p>Je partagerai également des mises à jour régulières sur mes projets personnels, notamment Task Manager. Vous pourrez suivre l’évolution de ce projet, découvrir les défis que je rencontre et les solutions que je mets en place. J’entrerai dans les détails techniques pour vous montrer comment j’utilise ces technologies pour créer des applications performantes et sécurisées.</p>
        <h4>Astuces et Bonnes Pratiques</h4>
        <p>En plus des projets et des tutoriels, je partagerai des astuces et des bonnes pratiques que j’ai découvertes au fil de mes expériences. Que ce soit des conseils pour optimiser votre code, améliorer la sécurité de vos applications ou simplement des raccourcis pour être plus efficace, il y aura toujours quelque chose de nouveau à apprendre.</p>
        <h4>Intelligence Artificielle et Outils Modernes</h4>
        <p>Étant un grand amateur des avancées technologiques, j’écrirai également sur des sujets comme l’intelligence artificielle et des outils modernes tels que ChatGPT et Copilot. Ces outils m’ont aidé à améliorer ma productivité et à explorer de nouvelles possibilités dans le développement web.</p>
        <h4>Cinéma et Musique</h4>
        <p>Enfin, parce qu’un développeur a aussi besoin de se détendre, je partagerai mes coups de cœur cinéma et musique. C’est toujours intéressant de découvrir de nouvelles perspectives et de s’inspirer de différents domaines artistiques.</p>
        <h3>Mon Premier Grand Projet : Task Manager</h3>
        <p>Je suis particulièrement fier de mon projet Task Manager, une application de gestion de tâches conçue pour être performante et sécurisée. Voici quelques-unes des fonctionnalités clés que vous pouvez attendre :</p>
        <ul>
          <li>Gestion des tâches : Créez, modifiez et supprimez des tâches facilement.</li>
          <li>Workspaces : Travaillez en équipe en créant des espaces de travail dédiés.</li>
          <li>Sécurité : Utilisation de pratiques de sécurité modernes pour protéger les données des utilisateurs.</li>
        </ul>
        <p>Je documenterai tout le processus de développement de Task Manager sur ce blog, de la conception initiale aux défis techniques rencontrés, en passant par les succès obtenus.</p>
        <h3>Conclusion</h3>
        <p>Merci d’avoir pris le temps de lire cet article d’introduction. J’espère que vous trouverez ce blog utile et inspirant. N’hésitez pas à me contacter si vous avez des questions, des suggestions ou si vous souhaitez collaborer sur un projet.</p>
        <p>Restez à l’écoute pour les prochains articles et n’oubliez pas de vous abonner pour ne rien manquer !</p>
        <p>À bientôt !</p>
      `,
  },
  {
    date: "5 août 2023",
    day: "samedi",
    title: "Lancement de Tailwind Nextjs Starter Blog v2.0",
    tags: ["NEXT-JS", "TAILWIND", "GUIDE", "FEATURE"],
    description:
      "Sortie du template Tailwind Nextjs Starter Blog v2.0, refactorisé avec le répertoire Nextjs App et l'installation des composants React Server. Découvrez les nouvelles fonctionnalités et comment migrer depuis la V1.",
    slug: "lancement-tailwind-nextjs-v2",
    content: `
        <h2>Introduction à Tailwind Nextjs Starter Blog v2.0</h2>
        <p>La nouvelle version de Tailwind Nextjs Starter Blog est enfin là ! Dans cet article, je vais vous présenter les nouveautés et les améliorations de cette version.</p>
        <h3>Nouvelles Fonctionnalités</h3>
        <ul>
          <li>Migration vers le répertoire Nextjs App.</li>
          <li>Installation des composants React Server.</li>
          <li>Refactorisation complète du code pour une meilleure performance.</li>
        </ul>
        <p>Ces améliorations vous permettront de créer des blogs plus rapidement et plus efficacement. Suivez le guide pour migrer depuis la version précédente.</p>
      `,
  },
  {
    date: "7 août 2021",
    day: "samedi",
    title: "Nouvelles fonctionnalités dans la v1",
    tags: ["NEXT-JS", "TAILWIND", "GUIDE"],
    description:
      "Un aperçu des nouvelles fonctionnalités de la v1 - copie de blocs de code, auteurs multiples, mise en page du frontmatter, etc.",
    slug: "nouvelles-fonctionnalites-v1",
    content: `
        <h2>Fonctionnalités de la v1</h2>
        <p>La première version de notre projet apporte plusieurs fonctionnalités intéressantes :</p>
        <ul>
          <li>Copie de blocs de code.</li>
          <li>Auteurs multiples.</li>
          <li>Mise en page du frontmatter.</li>
        </ul>
        <p>Ces fonctionnalités ont été conçues pour améliorer votre expérience de développement et rendre votre workflow plus efficace.</p>
      `,
  },
]);

const article = computed(() => {
  return articles.value.find((a) => a.slug === route.params.articleSlug);
});

const previousArticle = computed(() => {
  const currentIndex = articles.value.findIndex(
    (a) => a.slug === route.params.articleSlug
  );
  return currentIndex < articles.value.length - 1
    ? articles.value[currentIndex + 1]
    : null;
});

const nextArticle = computed(() => {
  const currentIndex = articles.value.findIndex(
    (a) => a.slug === route.params.articleSlug
  );
  return currentIndex > 0 ? articles.value[currentIndex - 1] : null;
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
.author-img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.author-img-large {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.article-content ul {
  list-style-type: disc;
  margin-left: 20px;
}

.article-content li {
  margin-bottom: 10px;
}

.author-bio {
  text-align: center;
}

a {
  text-decoration: none;
}
</style>
