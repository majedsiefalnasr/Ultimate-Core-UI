<script setup lang="ts">
  /**
   * UTooltip - tooltip component
   *
   * @component
   * @extends VTooltip
   */
  import { VTooltip } from 'vuetify/components';
  import './UTooltip.scss';

  // Component options
  defineOptions({ name: 'UTooltip', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-tooltip v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-tooltip>
</template>

<style scoped lang="scss"></style>
