<script setup lang="ts">
  /**
   * UScaleTransition - scale transition component
   *
   * @component
   * @extends VScaleTransition
   */
  import { VScaleTransition } from 'vuetify/components';
  import './UScaleTransition.scss';

  // Component options
  defineOptions({ name: 'UScaleTransition', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-scale-transition v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-scale-transition>
</template>

<style scoped lang="scss"></style>
