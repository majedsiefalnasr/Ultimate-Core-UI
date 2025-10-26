<script setup lang="ts">
  /**
   * UParallax - parallax container
   *
   * @component
   * @extends VParallax
   */
  import { VParallax } from 'vuetify/components';
  import './UParallax.scss';

  // Component options
  defineOptions({ name: 'UParallax', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-parallax v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-parallax>
</template>

<style scoped lang="scss"></style>
