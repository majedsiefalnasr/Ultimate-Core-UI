<!-- snippet:UCard -->
<!-- <UCard text="Card content" /> -->

<script setup lang="ts">
  /**
   * Extended UCard component built on Vuetify's VCard.
   * Inherits all VCard props, slots, and emits.
   *
   * @component
   * @extends VCard
   * @example
   * <UCard
   *  title="Card Title"
   *  subtitle="Card Subtitle"
   *  text="This is some card content."
   * />
   */
  import { VCard } from 'vuetify/components';
  // Import local styles
  import './UCard.scss';

  defineOptions({
    name: 'UCard',
    inheritAttrs: false,
  });

  // Define slots with proper typing
  defineSlots<{
    [key: string]: (props: Record<string, unknown>) => unknown;
  }>();
</script>

<template>
  <v-card v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-card>
</template>

<style scoped lang="scss"></style>
