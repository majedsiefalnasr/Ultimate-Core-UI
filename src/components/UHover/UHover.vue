<script setup lang="ts">
  /**
   * UHover - utility component for hover interaction
   *
   * @component
   * @extends VHover
   */
  import { VHover } from 'vuetify/components';
  import './UHover.scss';

  // Component options
  defineOptions({ name: 'UHover', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-hover v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-hover>
</template>

<style scoped lang="scss"></style>
