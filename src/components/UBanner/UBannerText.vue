<script setup lang="ts">
  /**
   * Extended UBannerText component built on Vuetify's VBannerText.
   * Inherits all VBannerText props, slots, and emits.
   *
   * @component
   * @extends VBannerText
   */
  // Import Vuetify's VBanner component (Base component)
  import { VBannerText } from 'vuetify/components';
  import './UBanner.scss';

  // Component options
  defineOptions({ name: 'UBannerText', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-banner-text v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-banner-text>
</template>

<style scoped lang="scss"></style>
