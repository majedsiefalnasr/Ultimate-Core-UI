<script setup lang="ts">
  /**
   * USheet - simple surface container
   *
   * @component
   * @extends VSlider
   */
  import { VSlider } from 'vuetify/components';
  import './USlider.scss';

  // Component options
  defineOptions({ name: 'USlider', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-slider v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-slider>
</template>

<style scoped lang="scss"></style>
