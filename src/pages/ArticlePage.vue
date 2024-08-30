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

        <!-- Affichage du contenu de l'article -->
        <div class="q-mb-lg">
          <div v-for="(child, index) in article.content.document" :key="index">
            <template v-if="child.type === 'heading'">
              <h3>{{ child.children[0].text }}</h3>
            </template>
            <template v-else-if="child.type === 'paragraph'">
              <p>{{ child.children[0].text }}</p>
            </template>
            <template v-else-if="child.type === 'unordered-list'">
              <ul>
                <li v-for="(item, i) in child.children" :key="i">
                  {{ item.children[0].text }}
                </li>
              </ul>
            </template>
            <template v-else>
              <!-- Pour tout autre type non géré -->
              <pre>{{ child[0].text }}</pre>
            </template>
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
  const post = postStore.getPostBySlug(route.params.articleSlug);

  if (post) {
    article.value = post;
    formattedDate.value = new Date(post.createdAt).toLocaleDateString("fr-FR");
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
