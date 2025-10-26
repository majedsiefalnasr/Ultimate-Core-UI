<script setup lang="ts">
  /**
   * UEmptyState - simple empty state wrapper component
   *
   * @component
   * @extends VEmptyState
   */
  import { VEmptyState } from 'vuetify/components';
  import './UEmptyState.scss';

  // Component options
  defineOptions({ name: 'UEmptyState', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <VEmptyState v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </VEmptyState>
</template>

<style scoped lang="scss"></style>
