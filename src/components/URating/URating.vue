<script setup lang="ts">
  /**
   * URating - rating display/input component
   *
   * @component
   * @extends VRating
   */
  import { VRating } from 'vuetify/components';
  import './URating.scss';

  // Component options
  defineOptions({ name: 'URating', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-rating v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-rating>
</template>

<style scoped lang="scss"></style>
