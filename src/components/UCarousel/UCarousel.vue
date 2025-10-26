<script setup lang="ts">
  /**
   * Extended UCarousel component built on Vuetify's VCarousel.
   * Inherits all VCarousel props, slots, and emits.
   *
   * @component
   * @extends VCarousel
   */
  // Import Vuetify's VCarousel component (Base component)
  import { VCarousel } from 'vuetify/components';
  import './UCarousel.scss';

  // Component options
  defineOptions({ name: 'UCarousel', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-carousel v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-carousel>
</template>

<style scoped lang="scss"></style>
