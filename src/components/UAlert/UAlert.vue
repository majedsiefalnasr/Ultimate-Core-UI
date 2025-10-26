<script setup lang="ts">
  /**
   * Extended UAlert component built on Vuetify's VAlert.
   * Inherits all VAlert props, slots, and emits.
   *
   * @component
   * @extends VAlert
   */
  // Import Vuetify's VAlert component (Base component)
  import { VAlert } from 'vuetify/components';
  import './UAlert.scss';

  // Component options
  defineOptions({ name: 'UAlert', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-alert v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-alert>
</template>

<style scoped lang="scss"></style>
