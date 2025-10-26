<script setup lang="ts">
  /**
   * UToolbarTitle - toolbar component
   *
   * @component
   * @extends VToolbarTitle
   */
  import { VToolbarTitle } from 'vuetify/components';
  import './UToolbar.scss';

  // Component options
  defineOptions({ name: 'UToolbarTitle', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-toolbar-title v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-toolbar-title>
</template>

<style scoped lang="scss"></style>
