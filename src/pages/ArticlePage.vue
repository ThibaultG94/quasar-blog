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
        <h1 class="text-size-h3 text-weight-bold q-pb-xl border-line">
          {{ article.title }}
        </h1>
      </div>
      <div class="col q-mt-xl">
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

    <!-- Section des commentaires -->
    <div v-if="article" class="q-mt-xl">
      <h2 class="text-h4 q-mb-md">Commentaires</h2>

      <!-- Formulaire d'ajout de commentaire -->
      <q-card class="q-mb-md">
        <q-card-section>
          <form @submit.prevent="submitComment" class="q-gutter-md">
            <q-input
              v-model="newComment.author"
              label="Nom"
              :rules="[(val) => !!val || 'Le nom est requis']"
              filled
            />
            <q-input
              v-model="newComment.email"
              label="Email"
              type="email"
              :rules="[
                (val) => !!val || 'L\'email est requis',
                (val) =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Email invalide',
              ]"
            />
            <q-input
              v-model="newComment.content"
              label="Commentaire"
              type="textarea"
              :rules="[(val) => !!val || 'Le commentaire est requis']"
            />
            <q-btn
              type="submit"
              color="primary"
              label="Ajouter un commentaire"
            />
          </form>
        </q-card-section>
      </q-card>

      <!-- Liste des commentaires -->
      <div v-if="article.comments && article.comments.length" class="q-mt-lg">
        <div
          v-for="comment in article.comments"
          :key="comment.id"
          class="q-mb-md"
        >
          <strong>{{ comment.author }}</strong>
          <p>{{ comment.content }}</p>
          <small>{{ new Date(comment.createdAt).toLocaleString() }}</small>
        </div>
      </div>
      <p v-else>Aucun commentaire pour le moment.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePostStore } from "src/stores/postStore";
import { useQuasar } from "quasar";

const props = defineProps({
  darkMode: Boolean,
});

const route = useRoute();
const postStore = usePostStore();
const $q = useQuasar();

const article = ref(null);
const formattedDate = ref("");
const newComment = ref({
  author: "",
  email: "",
  content: "",
});

onMounted(async () => {
  await loadArticleAndComments();
});

async function loadArticleAndComments() {
  const post = await postStore.getPostBySlug(route.params.articleSlug);

  if (post) {
    article.value = post;
    formattedDate.value = new Date(post.createdAt).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    await postStore.fetchComments(post.id);
    article.value = {
      ...article.value,
      comments: postStore.getPostById(post.id).comments,
    };
  }
}

async function submitComment() {
  try {
    if (!article.value || !article.value.id) {
      throw new Error("Article non trouvé ou ID manquant");
    }
    console.log(
      "Tentative d'ajout de commentaire pour l'article:",
      article.value.id
    );
    console.log("Données du commentaire:", {
      postId: article.value.id,
      author: newComment.value.author,
      email: newComment.value.email,
      content: newComment.value.content,
    });
    const result = await postStore.addComment(
      article.value.id,
      newComment.value.author,
      newComment.value.email,
      newComment.value.content
    );
    console.log("Résultat de l'ajout du commentaire:", result);
    newComment.value = { author: "", email: "", content: "" };
    $q.notify({
      color: "positive",
      message: "Commentaire ajouté avec succès!",
      icon: "check",
    });
  } catch (error) {
    console.error("Erreur détaillée lors de l'ajout du commentaire:", error);
    if (error.graphQLErrors) {
      console.error("GraphQL errors:", error.graphQLErrors);
    }
    if (error.networkError) {
      console.error("Network error:", error.networkError);
    }
    $q.notify({
      color: "negative",
      message: "Erreur lors de l'ajout du commentaire.",
      icon: "report_problem",
    });
  }
}

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
