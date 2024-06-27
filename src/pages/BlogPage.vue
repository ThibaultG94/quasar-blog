<template>
  <div class="q-px-xs-none q-px-sm-lg q-pt-xl">
    <div class="row q-gutter-x-md">
      <div class="col-auto gt-xs">
        <div
          :class="[
            'whity',
            'w-250',
            'q-pt-md',
            'q-pl-sm',
            'rounded-borders',
            'max-h',
            darkMode ? 'whity--dark' : 'whity--light',
          ]"
        >
          <q-card-section class="q-py-md">
            <div
              class="text-body1 text-weight-bolder text-uppercase text-accent"
            >
              Tous les Articles
            </div>
          </q-card-section>
          <q-list dense class="q-pl-lg-md">
            <q-item
              v-for="category in categories"
              :key="category.name"
              clickable
            >
              <q-item-section>
                <q-item-label
                  :class="getTextColorClass('text-grey-7')"
                  class="q-pb-md"
                >
                  {{ category.name }} <span>({{ category.count }})</span>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col">
        <div
          class="q-py-md q-pl-xs-lg q-pl-lg-xl q-mb-none q-border-b column q-gutter-md"
        >
          <div v-for="news in paginatedNews" :key="news.date" class="q-mb-lg">
            <div
              :class="getTextColorClass('text-grey-7')"
              class="text-subtitle1 text-weight-medium"
            >
              {{ news.date }}
            </div>
            <div>
              <router-link
                style="text-decoration: none; color: inherit"
                :to="`/blog/${news.slug}`"
                v-slot="{ navigate }"
              >
                <div @click="navigate" :class="getTextColorClass('text-dark')">
                  <h2
                    :class="getTextColorClass('text-dark')"
                    class="text-h5 text-weight-bold q-mb-xs q-mt-none"
                  >
                    {{ news.title }}
                  </h2>
                  <div class="row items-start q-gutter-xs q-mb-md">
                    <span
                      class="text-body2 text-accent text-weight-bold text-uppercase"
                      v-for="tag in news.tags"
                      :key="tag"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </router-link>
              <p
                :class="getTextColorClass('text-grey-7')"
                class="q-mb-sm text-subtitle1 darky"
              >
                {{ news.description }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="row justify-between items-center q-mt-lg q-px-md-lg q-px-lg-xl"
          v-if="totalPages > 1"
        >
          <q-btn
            flat
            label="Précédent"
            @click="prevPage"
            :disabled="currentPage === 1"
            no-caps
          />
          <span>{{ currentPage }} de {{ totalPages }}</span>
          <q-btn
            flat
            label="Suivant"
            @click="nextPage"
            :disabled="currentPage === totalPages"
            no-caps
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

defineOptions({
  name: "BlogPage",
});

const props = defineProps({
  darkMode: Boolean,
});

const newsItems = ref([]);
const categories = ref([]);
const currentPage = ref(1);
const itemsPerPage = 5;

const totalPages = computed(() => {
  return Math.ceil(newsItems.value.length / itemsPerPage);
});

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return newsItems.value.slice(start, end);
});

onMounted(async () => {
  try {
    const response = await fetch("/src/data/articles.json");
    newsItems.value = await response.json();
    updateCategories();
  } catch (error) {
    console.error("Error loading articles:", error);
  }
});

function updateCategories() {
  const tagCounts = newsItems.value.reduce((acc, article) => {
    article.tags.forEach((tag) => {
      if (acc[tag]) {
        acc[tag]++;
      } else {
        acc[tag] = 1;
      }
    });
    return acc;
  }, {});

  categories.value = Object.keys(tagCounts).map((tag) => ({
    name: tag,
    count: tagCounts[tag],
  }));
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function getTextColorClass(lightClass) {
  const darkModeMapping = {
    "text-grey-7": "text-grey-6",
    "text-grey-8": "text-grey-5",
    "text-grey-9": "text-grey-4",
    "text-dark": "text-light",
  };
  return props.darkMode ? darkModeMapping[lightClass] : lightClass;
}
</script>

<style scoped></style>
