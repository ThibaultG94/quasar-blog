<template>
  <q-layout view="hHh Lpr fff" :class="{ 'dark-mode': darkMode }">
    <div class="max-w">
      <div class="q-pt-lg">
        <q-toolbar>
          <q-toolbar-title>
            <q-btn
              flat
              label="ThiBlog"
              icon="laptop"
              to="/"
              class="text-h5 text-weight-bold"
              no-caps
            />
          </q-toolbar-title>
          <q-btn
            flat
            label="Blog"
            to="/blog"
            no-caps
            class="text-subtitle1 text-weight-medium"
            :class="getTextColorClass('text-grey-7')"
          />
          <q-btn
            flat
            label="Projets"
            to="/projects"
            no-caps
            class="text-subtitle1 text-weight-medium"
            :class="getTextColorClass('text-grey-7')"
          />
          <q-btn
            flat
            label="À propos"
            to="/about"
            no-caps
            class="text-subtitle1 text-weight-medium"
            :class="getTextColorClass('text-grey-7')"
          />
          <q-btn
            flat
            round
            icon="search"
            aria-label="Search"
            no-caps
            class="text-subtitle1"
            :class="getTextColorClass('text-grey-7')"
          />
          <q-btn
            flat
            round
            icon="brightness_6"
            @click="toggleDarkMode"
            aria-label="Dark Mode"
            :class="getTextColorClass('text-grey-7')"
          />
        </q-toolbar>
      </div>
    </div>

    <q-page-container class="max-w">
      <router-view :dark-mode="darkMode" />
    </q-page-container>

    <footer
      class="q-mt-lg q-mb-sm text-center"
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

function getTextColorClass(lightClass) {
  const darkModeMapping = {
    "text-grey-7": "text-grey-6",
    "text-grey-8": "text-grey-5",
    "text-grey-9": "text-grey-4",
  };
  return darkMode.value ? darkModeMapping[lightClass] : lightClass;
}
</script>

<style scoped lang="scss">
.dark-mode {
  background-color: var(--dark-background);
  color: var(--dark-text);
}
</style>
