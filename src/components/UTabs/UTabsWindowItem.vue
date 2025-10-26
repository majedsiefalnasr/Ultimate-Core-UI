<script setup lang="ts">
  /**
   * UTabsWindowItem - tab navigation component
   *
   * @component
   * @extends VTabsWindowItem
   */
  import { VTabsWindowItem } from 'vuetify/components';
  import './UTabs.scss';

  // Component options
  defineOptions({ name: 'UTabsWindowItem', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-tabs-window-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-tabs-window-item>
</template>

<style scoped lang="scss"></style>
