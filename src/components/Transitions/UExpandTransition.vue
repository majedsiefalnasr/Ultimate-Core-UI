<script setup lang="ts">
  /**
   * UExpandTransition - expand transition component
   *
   * @component
   * @extends VExpandTransition
   */
  import { VExpandTransition } from 'vuetify/components';
  import './Transitions.scss';

  // Component options
  defineOptions({ name: 'UExpandTransition', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-expand-transition v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-expand-transition>
</template>

<style scoped lang="scss"></style>
