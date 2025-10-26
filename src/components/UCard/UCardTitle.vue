<script setup lang="ts">
  /**
   * Extended UCardTitle component built on Vuetify's VCardTitle.
   * Inherits all VCardTitle props, slots, and emits.
   *
   * @component
   * @extends VCardTitle
   */
  import { VCardTitle } from 'vuetify/components';
  // Import local styles
  import './UCard.scss';

  defineOptions({ name: 'UCardTitle', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-card-title v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-card-title>
</template>

<style scoped lang="scss"></style>
