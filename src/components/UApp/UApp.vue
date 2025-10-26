<script setup lang="ts">
  /**
   * Extended UApp component built on Vuetify's VApp.
   * Inherits all VApp props, slots, and emits.
   *
   * @component
   * @extends VApp
   */
  // Import Vuetify's VApp component (Base component)
  import { VApp } from 'vuetify/components';
  import './UApp.scss';

  // Component options
  defineOptions({ name: 'UApp', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-app v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-app>
</template>

<style scoped lang="scss"></style>
