<script setup lang="ts">
  /**
   * Extended UAppBar component built on Vuetify's VAppBar.
   * Inherits all VAppBar props, slots, and emits.
   *
   * @component
   * @extends VAppBar
   */
  // Import Vuetify's VAppBar component (Base component)
  import { VAppBar } from 'vuetify/components';
  import './UAppBar.scss';

  // Component options
  defineOptions({ name: 'UAppBar', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-app-bar v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
