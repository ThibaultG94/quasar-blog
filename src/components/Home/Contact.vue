<template>
  <q-card>
    <q-card-section>
      <div class="text-h4">Contact</div>
    </q-card-section>
    <q-card-section>
      <p>Retrouvez-moi sur mes réseaux sociaux ou envoyez-moi un message.</p>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn
        flat
        label="LinkedIn"
        href="https://linkedin.com/in/thibaultG94"
        target="_blank"
      />
      <q-btn
        flat
        label="GitHub"
        href="https://github.com/ThibaultG94"
        target="_blank"
      />
      <q-btn
        flat
        label="Twitter"
        href="https://twitter.com/ThibaultG94"
        target="_blank"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineOptions({
  name: "ContactComponent",
});
</script>

<style scoped>
/* Ajoute ton style ici */
</style>
