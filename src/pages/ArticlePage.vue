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
          <div class="q-py-lg border-line">
            <p
              class="text-uppercase text-caption text-weight-medium q-mb-md"
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
          <q-btn flat to="/blog" class="text-accent q-px-none q-my-md" no-caps>
            <q-icon name="arrow_back" class="q-mr-sm" />
            <span class="text-subtitle1">Retour au blog</span>
          </q-btn>
        </div>

        <!-- Affichage du contenu de l'article -->
        <div class="q-mb-lg">
          <div
            v-for="(child, index) in article.content.document"
            :key="index"
            :class="getMarginClasses(child)"
          >
            <!-- Gestion des titres -->
            <template v-if="child.type === 'heading'">
              <component :is="'h' + child.level">
                <span v-for="(part, idx) in child.children" :key="idx">
                  <strong v-if="part.bold">{{ part.text }}</strong>
                  <span v-else>{{ part.text }}</span>
                </span>
              </component>
            </template>

            <!-- Gestion des paragraphes -->
            <template v-else-if="child.type === 'paragraph'">
              <p>
                <span v-for="(part, idx) in child.children" :key="idx">
                  <strong v-if="part.bold">{{ part.text }}</strong>
                  <span v-else>{{ part.text }}</span>
                </span>
              </p>
            </template>

            <!-- Gestion des listes non ordonnées -->
            <template v-else-if="child.type === 'unordered-list'">
              <ul>
                <li v-for="(item, i) in child.children" :key="i">
                  <span v-for="(part, j) in item.children" :key="j">
                    <span v-if="part.type === 'list-item-content'">
                      <span v-for="(subPart, k) in part.children" :key="k">
                        <strong v-if="subPart.bold">{{ subPart.text }}</strong>
                        <span v-else>{{ subPart.text }}</span>
                      </span>
                    </span>
                  </span>
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

onMounted(async () => {
  const post = await postStore.getPostBySlug(route.params.articleSlug);

  if (post) {
    article.value = post;
    formattedDate.value = new Date(post.createdAt).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
});

// Fonction pour appliquer les marges selon le type de contenu
function getMarginClasses(child) {
  if (child.type === "heading") {
    return "q-mt-lg q-mb-md";
  } else if (child.type === "paragraph") {
    return "q-mb-md";
  } else if (child.type === "unordered-list") {
    return "q-mt-md q-mb-md";
  } else {
    return "q-mb-md";
  }
}

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
p,
li {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}
</style>
