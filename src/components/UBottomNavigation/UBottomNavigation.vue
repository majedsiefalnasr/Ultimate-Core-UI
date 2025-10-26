<script setup lang="ts">
  /**
   * Extended UBottomNavigation component built on Vuetify's VBottomNavigation.
   * Inherits all VBottomNavigation props, slots, and emits.
   *
   * @component
   * @extends VBottomNavigation
   */
  // Import Vuetify's VBottomNavigation component (Base component)
  import { VBottomNavigation } from 'vuetify/components';
  import './UBottomNavigation.scss';

  // Component options
  defineOptions({ name: 'UBottomNavigation', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-bottom-navigation v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-bottom-navigation>
</template>

<style scoped lang="scss"></style>
