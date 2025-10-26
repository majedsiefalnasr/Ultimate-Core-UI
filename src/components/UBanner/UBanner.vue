<script setup lang="ts">
  /**
   * Extended UBanner component built on Vuetify's VBanner.
   * Inherits all VBanner props, slots, and emits.
   *
   * @component
   * @extends VBanner
   */
  // Import Vuetify's VBanner component (Base component)
  import { VBanner } from 'vuetify/components';
  import './UBanner.scss';

  // Component options
  defineOptions({ name: 'UBanner', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-banner v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-banner>
</template>

<style scoped lang="scss"></style>
