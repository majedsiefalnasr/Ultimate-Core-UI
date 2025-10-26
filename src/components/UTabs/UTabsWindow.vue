<script setup lang="ts">
  /**
   * UTabsWindow - tab navigation component
   *
   * @component
   * @extends VTabsWindow
   */
  import { VTabsWindow } from 'vuetify/components';
  import './UTabs.scss';

  // Component options
  defineOptions({ name: 'UTabsWindow', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-tabs-window v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-tabs-window>
</template>

<style scoped lang="scss"></style>
