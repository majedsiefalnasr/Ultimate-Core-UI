<script setup lang="ts">
  /**
   * Extended UAppBarTitle component built on Vuetify's VAppBarTitle.
   * Inherits all VAppBarTitle props, slots, and emits.
   *
   * @component
   * @extends VAppBarTitle
   */
  // Import Vuetify's VAppBar component (Base component)
  import { VAppBarTitle } from 'vuetify/components';
  import './UAppBar.scss';

  // Component options
  defineOptions({ name: 'UAppBarTitle', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-app-bar-title v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-app-bar-title>
</template>

<style scoped lang="scss"></style>
