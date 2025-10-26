<script setup lang="ts">
  /**
   * Extended UCarouselItem component built on Vuetify's VCarouselItem.
   * Inherits all VCarouselItem props, slots, and emits.
   *
   * @component
   * @extends VCarouselItem
   */
  // Import Vuetify's VCarousel component (Base component)
  import { VCarouselItem } from 'vuetify/components';
  import './UCarousel.scss';

  // Component options
  defineOptions({ name: 'UCarouselItem', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-carousel-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-carousel-item>
</template>

<style scoped lang="scss"></style>
