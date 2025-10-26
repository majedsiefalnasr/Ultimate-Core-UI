<script setup lang="ts">
  /**
   * UToolbar - toolbar component
   *
   * @component
   * @extends VToolbar
   */
  import { VToolbar } from 'vuetify/components';
  import './UToolbar.scss';

  // Component options
  defineOptions({ name: 'UToolbar', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-toolbar v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-toolbar>
</template>

<style scoped lang="scss"></style>
