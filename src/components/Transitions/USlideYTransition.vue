<script setup lang="ts">
  /**
   * USlideYTransition - slide Y transition component
   *
   * @component
   * @extends VSlideYTransition
   */
  import { VSlideYTransition } from 'vuetify/components';
  import './Transitions.scss';

  // Component options
  defineOptions({ name: 'USlideYTransition', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-slide-y-transition v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-slide-y-transition>
</template>

<style scoped lang="scss"></style>
