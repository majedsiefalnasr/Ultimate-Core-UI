<script setup lang="ts">
  /**
   * USystemBar - system status bar component
   *
   * @component
   * @extends VSystemBar
   */
  import { VSystemBar } from 'vuetify/components';
  import './USystemBar.scss';

  // Component options
  defineOptions({ name: 'USystemBar', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-system-bar v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-system-bar>
</template>

<style scoped lang="scss"></style>
