<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="custom-header">
      <div class="container">
        <q-toolbar>
          <q-toolbar-title>
            <q-btn flat label="ThiDev" to="/" class="title-link" />
          </q-toolbar-title>
          <q-space />
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

    <q-page-container class="container">
      <router-view />
    </q-page-container>

    <div class="custom-footer">
      <div class="container footer-container">
        <q-toolbar class="footer-toolbar">
          <q-toolbar-title class="footer-title">© 2024 ThiDev</q-toolbar-title>
          <q-space />
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
const leftDrawerOpen = ref(false);

function toggleDarkMode() {
  $q.dark.toggle();
}
</script>

<style scoped>
.custom-header {
  max-width: 1200px;
  margin: 0 auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.title-link {
  font-size: 1.5rem;
  font-weight: bold;
}

.footer-toolbar {
  justify-content: space-between;
}

.footer-title {
  font-size: 0.875rem;
}

.custom-footer {
  padding: 5px 20px;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>
