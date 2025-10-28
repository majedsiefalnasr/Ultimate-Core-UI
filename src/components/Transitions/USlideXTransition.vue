<script setup lang="ts">
  /**
   * USlideXTransition - slide X transition component
   *
   * @component
   * @extends VSlideXTransition
   */
  import { VSlideXTransition } from 'vuetify/components';
  import './Transitions.scss';

  // Component options
  defineOptions({ name: 'USlideXTransition', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-slide-x-transition v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-slide-x-transition>
</template>

<style scoped lang="scss"></style>
