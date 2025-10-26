<script setup lang="ts">
  /**
   * UTabs - tab navigation component
   *
   * @component
   * @extends VTabs
   */
  import { VTabs } from 'vuetify/components';
  import './UTabs.scss';

  // Component options
  defineOptions({ name: 'UTabs', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-tabs v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-tabs>
</template>

<style scoped lang="scss"></style>
