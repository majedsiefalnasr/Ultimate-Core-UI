<script setup lang="ts">
  /**
   * UToolbarItems - toolbar component
   *
   * @component
   * @extends VToolbarItems
   */
  import { VToolbarItems } from 'vuetify/components';
  import './UToolbar.scss';

  // Component options
  defineOptions({ name: 'UToolbarItems', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-toolbar-items v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-toolbar-items>
</template>

<style scoped lang="scss"></style>
