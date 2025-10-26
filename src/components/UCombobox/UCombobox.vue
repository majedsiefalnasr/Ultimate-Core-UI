<script setup lang="ts">
  /**
   * Extended UCombobox component built on Vuetify's VCombobox.
   * Inherits all VCombobox props, slots, and emits.
   *
   * @component
   * @extends VCombobox
   */
  // Import Vuetify's VCombobox component (Base component)
  import { VCombobox } from 'vuetify/components';
  import './UCombobox.scss';

  // Component options
  defineOptions({ name: 'UCombobox', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-combobox v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-combobox>
</template>

<style scoped lang="scss"></style>
