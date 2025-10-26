<script setup lang="ts">
  /**
   * Extended UBannerActions component built on Vuetify's VBannerActions.
   * Inherits all VBannerActions props, slots, and emits.
   *
   * @component
   * @extends VBannerActions
   */
  // Import Vuetify's VBanner component (Base component)
  import { VBannerActions } from 'vuetify/components';
  import './UBanner.scss';

  // Component options
  defineOptions({ name: 'UBannerActions', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-banner-actions v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-banner-actions>
</template>

<style scoped lang="scss"></style>
