<template>
  <q-card>
    <q-card-section>
      <div class="text-h4">Salut, je suis Thibault</div>
      <div class="text-subtitle1">Développeur Web Fullstack</div>
    </q-card-section>
    <q-card-section>
      <p>
        Passionné par le développement web, je crée des applications
        performantes et sécurisées en utilisant les dernières technologies.
      </p>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Voir mon CV" href="/cv.pdf" target="_blank" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineOptions({
  name: "PresentationComponent",
});
</script>

<style scoped>
/* Ajoute ton style ici */
</style>
