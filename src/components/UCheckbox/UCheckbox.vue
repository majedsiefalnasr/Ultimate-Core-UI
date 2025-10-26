<script setup lang="ts">
  /**
   * Extended UCheckbox component built on Vuetify's VCheckbox.
   * Inherits all VCheckbox props, slots, and emits.
   *
   * @component
   * @extends VCheckbox
   */
  // Import Vuetify's VCheckbox component (Base component)
  import { VCheckbox } from 'vuetify/components';
  import './UCheckbox.scss';

  // Component options
  defineOptions({ name: 'UCheckbox', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-checkbox v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-checkbox>
</template>

<style scoped lang="scss"></style>
