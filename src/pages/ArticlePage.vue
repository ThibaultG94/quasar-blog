<template>
  <div class="q-px-xs-md q-px-sm-lg q-pt-xl">
    <div v-if="article">
      <div class="text-center q-pt-md q-mb-lg">
        <p
          class="text-subtitle1 q-mt-none text-weight-medium"
          :class="getTextColorClass('text-grey-8')"
        >
          {{ formattedDate }}
        </p>
        <h1 class="text-size-h3 text-weight-bold q-pb-md border-line">
          {{ article.title }}
        </h1>
      </div>
      <div class="col-to-row">
        <div class="q-mr-xl">
          <div class="row items-center q-pt-lg q-pb-xl border-line">
            <img
              src="/img/avatar.png"
              alt="Profile Picture"
              class="w-40 h-40 rounded q-mr-sm"
            />
            <div class="text-body2 text-weight-medium">
              {{ article.author?.name }}
            </div>
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
                :key="tag.name"
              >
                {{ tag.name }}
              </span>
            </div>
          </div>
          <q-btn flat to="/blog" class="text-accent q-px-none q-mb-md" no-caps>
            <q-icon name="arrow_back" class="q-mr-sm" />
            <span class="text-subtitle1">Retour au blog</span>
          </q-btn>
        </div>
        <div class="q-mb-lg">
          <div
            v-for="(child, index) in article.content.document[0].children"
            :key="index"
          >
            <p v-if="child.text" v-html="child.text"></p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Article non trouvé.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePostStore } from "src/stores/postStore";

const props = defineProps({
  darkMode: Boolean,
});

const route = useRoute();
const postStore = usePostStore();

const article = ref(null);
const formattedDate = ref("");

onMounted(() => {
  // On récupère l'article en fonction du slug
  const post = postStore.getPostBySlug(route.params.articleSlug);

  if (post) {
    // Si on trouve un post, on le met dans 'article'
    article.value = post;
    formattedDate.value = new Date(post.createdAt).toLocaleDateString("fr-FR");
  } else {
    // Ici, si nécessaire, tu peux déclencher une nouvelle requête pour récupérer l'article via son ID
    // Mais généralement, l'article devrait être déjà chargé dans ton store
  }
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
