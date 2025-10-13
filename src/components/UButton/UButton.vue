<template>
  <v-btn :color="color" :variant="variant" class="a-button" v-bind="$attrs">
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
  import { VBtn } from 'vuetify/components';

  defineProps<{
    color?: string;
    variant?: 'flat' | 'outlined' | 'text';
  }>();
</script>

<style scoped lang="scss">
  .a-button {
    font-weight: 600;
    text-transform: none;
  }
</style>
