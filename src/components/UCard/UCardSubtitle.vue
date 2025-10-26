<script setup lang="ts">
  /**
   * Extended UCardSubtitle component built on Vuetify's VCardSubtitle.
   * Inherits all VCardSubtitle props, slots, and emits.
   *
   * @component
   * @extends VCardSubtitle
   */
  import { VCardSubtitle } from 'vuetify/components';
  // Import local styles
  import './UCard.scss';

  defineOptions({ name: 'UCardSubtitle', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-card-subtitle v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-card-subtitle>
</template>

<style scoped lang="scss"></style>
