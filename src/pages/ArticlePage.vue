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
          <q-btn flat to="/blog" class="text-accent q-px-none q-mb-md" no-caps>
            <q-icon name="arrow_back" class="q-mr-sm" />
            <span class="text-subtitle1">Retour au blog</span>
          </q-btn>
        </div>
        <div class="q-mb-lg">
          <div v-html="article.content"></div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Article non trouvé.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
  darkMode: Boolean,
});

const articles = ref([]);
const article = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("/src/data/articles.json");
    articles.value = await response.json();
    article.value = articles.value.find(
      (a) => a.slug === route.params.articleSlug
    );
  } catch (error) {
    console.error("Error loading articles:", error);
  }
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
a {
  text-decoration: none;
}
</style>
