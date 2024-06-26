<template>
  <q-layout view="lhr lpr lfr" :class="{ 'dark-mode': darkMode }">
    <div class="max-w">
      <div class="q-pt-lg">
        <q-toolbar>
          <q-toolbar-title>
            <q-btn
              flat
              label="ThiBlog"
              icon="laptop"
              to="/home"
              class="text-size-h5 text-weight-bold"
              no-caps
            />
          </q-toolbar-title>
          <q-btn
            v-if="!isMobile"
            flat
            label="Blog"
            to="/blog"
            no-caps
            class="text-size-subtitle1 text-weight-medium"
            :class="getTextColorClass('text-dark')"
          />
          <q-btn
            v-if="!isMobile"
            flat
            label="Projets"
            to="/projects"
            no-caps
            class="text-size-subtitle1 text-weight-medium"
            :class="getTextColorClass('text-dark')"
          />
          <q-btn
            v-if="!isMobile"
            flat
            label="À propos"
            to="/about"
            no-caps
            class="text-size-subtitle1 text-weight-medium"
            :class="getTextColorClass('text-dark')"
          />
          <q-btn
            flat
            round
            icon="search"
            aria-label="Search"
            no-caps
            class="text-size-subtitle1"
            :class="getTextColorClass('text-dark')"
          />
          <q-btn
            flat
            round
            icon="brightness_6"
            @click="toggleDarkMode"
            aria-label="Dark Mode"
            class="text-size-subtitle1"
            :class="getTextColorClass('text-dark')"
          />
          <q-btn
            flat
            dense
            icon="menu"
            class="text-size-subtitle1"
            v-if="isMobile"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
        </q-toolbar>
      </div>
    </div>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      side="right"
      behavior="mobile"
      :width="450"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          icon="close"
          @click="leftDrawerOpen = false"
          aria-label="Close Drawer"
          class="close-btn"
        />
      </q-toolbar>
      <q-list>
        <div class="w-150">
          <q-item clickable v-ripple to="/home">
            <q-item-section>Accueil</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/blog">
            <q-item-section>Blog</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/projects">
            <q-item-section>Projets</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/about">
            <q-item-section>À propos</q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container class="max-w">
      <router-view :dark-mode="darkMode" />
    </q-page-container>

    <footer
      class="q-mt-lg q-pb-sm text-center"
      :class="getTextColorClass('text-grey-9')"
    >
      <div class="row justify-center q-gutter-xs q-mb-sm">
        <q-btn
          flat
          round
          icon="fa fa-envelope"
          href="https://twitter.com/ThibaultG94"
          target="_blank"
          aria-label="Twitter"
          :class="getTextColorClass('text-grey-9')"
        />
        <q-btn
          flat
          round
          icon="fab fa-github"
          href="https://github.com/ThibaultG94"
          target="_blank"
          aria-label="GitHub"
          :class="getTextColorClass('text-grey-9')"
        />
        <q-btn
          flat
          round
          icon="fab fa-linkedin"
          href="https://linkedin.com/in/thibaultG94"
          target="_blank"
          aria-label="LinkedIn"
          :class="getTextColorClass('text-grey-9')"
        />
      </div>
      <p class="text-body2" :class="getTextColorClass('text-grey-8')">
        Thiblog • © 2024 • Chroniques d'un dev
      </p>
      <q-btn
        flat
        label="CGU"
        to="/cgu"
        class="q-pa-none"
        :class="getTextColorClass('text-grey-7')"
      />
    </footer>

    <q-resize-observer @resize="onResize" />
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

defineOptions({
  name: "MainLayout",
});

const $q = useQuasar();
const darkMode = ref($q.dark.isActive);
const leftDrawerOpen = ref(false);
const isMobile = ref(window.innerWidth <= 600);

function toggleDarkMode() {
  $q.dark.toggle();
  darkMode.value = $q.dark.isActive;
}

function getTextColorClass(lightClass) {
  const darkModeMapping = {
    "text-grey-7": "text-grey-6",
    "text-grey-8": "text-grey-5",
    "text-grey-9": "text-grey-4",
    "text-dark": "text-light",
  };
  return darkMode.value ? darkModeMapping[lightClass] : lightClass;
}

function onResize({ width }) {
  isMobile.value = width <= 600;
}
</script>

<style scoped lang="scss">
.dark-mode {
  background-color: var(--dark-background);
  color: var(--dark-text);
}

.q-btn {
  @media (max-width: 400px) {
    padding: 4px 8px;
  }
}

.fit {
  min-width: 100vw;
}

.close-btn {
  position: absolute;
  right: 16px;
  top: 16px;
  font-size: 1.3rem;
}

.q-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding-top: 32px;
  font-weight: 600;
  text-align: left;
}
</style>
