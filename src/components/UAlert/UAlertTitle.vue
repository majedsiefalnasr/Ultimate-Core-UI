<script setup lang="ts">
  /**
   * Extended UAlertTitle component built on Vuetify's VAlertTitle.
   * Inherits all VAlertTitle props, slots, and emits.
   *
   * @component
   * @extends VAlertTitle
   */
  // Import Vuetify's VAlert component (Base component)
  import { VAlertTitle } from 'vuetify/components';
  import './UAlert.scss';

  // Component options
  defineOptions({ name: 'UAlertTitle', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-alert-title v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-alert-title>
</template>

<style scoped lang="scss"></style>
