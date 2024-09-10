<template>
  <div class="q-px-xs-md q-px-sm-lg q-pt-xl">
    <div v-if="article" class="article">
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
          <p class="text-caption q-mb-sm">
            Votre adresse e-mail ne sera pas publiée.
          </p>
          <form @submit.prevent="submitComment" class="q-gutter-md">
            <q-input
              v-model="newComment.author"
              label="Nom"
              :rules="[(val) => !isSubmitted || !!val || 'Le nom est requis']"
              filled
              :error="showErrors"
            />
            <q-input
              v-model="newComment.email"
              label="Email"
              type="email"
              :rules="[
                (val) => !isSubmitted || !!val || 'L\'email est requis',
                (val) =>
                  !isSubmitted ||
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ||
                  'Email invalide',
              ]"
              filled
              :error="showErrors"
            />
            <q-input
              v-model="newComment.content"
              label="Commentaire"
              type="textarea"
              :rules="[
                (val) => !isSubmitted || !!val || 'Le commentaire est requis',
              ]"
              filled
              :error="showErrors"
            />
            <div class="row justify-between">
              <q-checkbox
                v-model="saveInfo"
                label="Sauvegarder mon nom et email pour la prochaine fois"
              />
              <q-btn
                type="submit"
                color="secondary"
                label="Ajouter un commentaire"
              />
            </div>
          </form>
        </q-card-section>
      </q-card>

      <!-- Liste des commentaires -->
      <div v-if="article.comments && article.comments.length" class="q-mt-lg">
        <q-list bordered separator>
          <q-item
            v-for="comment in article.comments"
            :key="comment.id"
            class="q-py-md"
          >
            <q-item-section avatar>
              <q-avatar color="secondary" text-color="white">
                {{ comment.author.charAt(0).toUpperCase() }}
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-bold">{{
                comment.author
              }}</q-item-label>
              <q-item-label caption>{{
                new Date(comment.createdAt).toLocaleString()
              }}</q-item-label>
              <q-item-label class="q-mt-sm">{{ comment.content }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <q-card v-else class="q-pa-md text-center">
        <q-card-section>
          <p class="text-subtitle1">Aucun commentaire pour le moment.</p>
        </q-card-section>
      </q-card>
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

const saveInfo = ref(false);
const showErrors = ref(false);
const isSubmitted = ref(false);

onMounted(async () => {
  await loadArticleAndComments();
  await loadInfo();
});

async function loadInfo() {
  const savedAuthor = localStorage.getItem("commentAuthor");
  const savedEmail = localStorage.getItem("commentEmail");
  if (savedAuthor) newComment.value.author = savedAuthor;
  if (savedEmail) newComment.value.email = savedEmail;
  saveInfo.value = !!savedAuthor || !!savedEmail;
}

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
  showErrors.value = false;
  isSubmitted.value = true;
  try {
    if (!article.value || !article.value.id) {
      throw new Error("Article non trouvé ou ID manquant");
    }
    await postStore.addComment(
      article.value.id,
      newComment.value.author,
      newComment.value.email,
      newComment.value.content
    );
    if (saveInfo.value) {
      localStorage.setItem("commentAuthor", newComment.value.author);
      localStorage.setItem("commentEmail", newComment.value.email);
    } else {
      localStorage.removeItem("commentAuthor");
      localStorage.removeItem("commentEmail");
    }
    newComment.value = { author: "", email: "", content: "" };
    isSubmitted.value = false;
    showErrors.value = false;
    $q.notify({
      color: "positive",
      message: "Commentaire ajouté avec succès!",
      icon: "check",
    });
    await loadArticleAndComments();
    if (saveInfo.value) {
      await loadInfo();
    }
  } catch (error) {
    console.error("Erreur détaillée lors de l'ajout du commentaire:", error);
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
.article p,
li {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.75;
  margin-bottom: 1.5rem;
}
</style>
