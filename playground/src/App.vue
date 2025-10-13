<template>
  <div class="playground">
    <h1>Ultimate Core UI — Playground</h1>
    <section>
      <h2>UButton</h2>
      <UButton @click="count++">Clicked {{ count }} times</UButton>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { UButton } from '@ultimate/core-ui';
  import { ref } from 'vue';

  const count = ref(0);
</script>

<style scoped>
  .playground {
    padding: 2rem;
    font-family:
      Inter,
      system-ui,
      -apple-system,
      Roboto,
      'Helvetica Neue',
      Arial;
  }
  section {
    margin-top: 1rem;
  }
</style>
