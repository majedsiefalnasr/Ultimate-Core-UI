<script setup lang="ts">
  /**
   * URangeSlider - range slider wrapper
   *
   * @component
   * @extends VRangeSlider
   */
  import { VRangeSlider } from 'vuetify/components';
  import './URangeSlider.scss';

  // Component options
  defineOptions({ name: 'URangeSlider', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-range-slider v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-range-slider>
</template>

<style scoped lang="scss"></style>
