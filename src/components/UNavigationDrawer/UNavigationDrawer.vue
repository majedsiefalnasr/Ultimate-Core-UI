<script setup lang="ts">
  /**
   * UNavigationDrawer - wrapper for Vuetify's VNavigationDrawer
   *
   * @component
   * @extends VNavigationDrawer
   */
  import { VNavigationDrawer } from 'vuetify/components';
  import './UNavigationDrawer.scss';

  // Component options
  defineOptions({ name: 'UNavigationDrawer', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-navigation-drawer v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-navigation-drawer>
</template>

<style scoped lang="scss"></style>
