<script setup lang="ts">
  /**
   * USheet - simple surface container
   *
   * @component
   * @extends VSheet
   */
  import { VSheet } from 'vuetify/components';
  import './USheet.scss';

  // Component options
  defineOptions({ name: 'USheet', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-sheet v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-sheet>
</template>

<style scoped lang="scss"></style>
