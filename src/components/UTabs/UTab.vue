<script setup lang="ts">
  /**
   * UTab - tab navigation component
   *
   * @component
   * @extends VTab
   */
  import { VTab } from 'vuetify/components';
  import './UTabs.scss';

  // Component options
  defineOptions({ name: 'UTab', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-tab v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-tab>
</template>

<style scoped lang="scss"></style>
