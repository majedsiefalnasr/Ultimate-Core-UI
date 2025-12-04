<script setup lang="ts">
  /**
   * Extended UHotkey component built on Vuetify's VHotkey.
   * Inherits all VHotkey props, slots, and emits.
   * Displays keyboard shortcuts in a styled format.
   *
   * @component
   * @extends VHotkey
   */
  // Import Vuetify's VHotkey component (Base component)
  import { VHotkey } from 'vuetify/components';
  // Import local styles
  import './UHotkey.scss';

  // Define component options
  defineOptions({ name: 'UHotkey', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-hotkey v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-hotkey>
</template>

<style scoped lang="scss"></style>
