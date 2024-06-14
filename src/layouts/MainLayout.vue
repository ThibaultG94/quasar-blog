<template>
  <q-layout view="hHh Lpr fff" :class="{ 'dark-mode': darkMode }">
    <q-header class="max-w">
      <div>
        <q-toolbar>
          <q-toolbar-title>
            <q-btn
              flat
              label="ThiDev"
              to="/"
              class="text-h6 text-weight bold text-uppercase"
            />
          </q-toolbar-title>
          <q-btn flat label="Blog" to="/blog" />
          <q-btn flat label="Projets" to="/projects" />
          <q-btn flat label="À propos" to="/about" />
          <q-btn flat round icon="search" aria-label="Search" />
          <q-btn
            flat
            round
            icon="brightness_6"
            @click="toggleDarkMode"
            aria-label="Dark Mode"
          />
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container class="max-w">
      <router-view />
    </q-page-container>

    <div class="max-w">
      <q-toolbar class="justify-between">
        <q-toolbar-title class="text-caption">© 2024 ThiDev</q-toolbar-title>
        <q-btn flat label="CGU" to="/cgu" />
        <q-btn
          flat
          round
          icon="fab fa-linkedin"
          href="https://linkedin.com/in/thibaultG94"
          target="_blank"
          aria-label="LinkedIn"
        />
        <q-btn
          flat
          round
          icon="fab fa-github"
          href="https://github.com/ThibaultG94"
          target="_blank"
          aria-label="GitHub"
        />
        <q-btn
          flat
          round
          icon="fab fa-twitter"
          href="https://twitter.com/ThibaultG94"
          target="_blank"
          aria-label="Twitter"
        />
      </q-toolbar>
    </div>
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

function toggleDarkMode() {
  $q.dark.toggle();
  darkMode.value = $q.dark.isActive;
}
</script>

<style scoped lang="scss">
.dark-mode {
  background-color: var(--dark-background);
  color: var(--dark-text);
}

.dark-header {
  background-color: var(--dark-primary);
}

.dark-footer {
  background-color: var(--dark-surface);
}
</style>
