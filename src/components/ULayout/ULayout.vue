<script setup lang="ts">
  /**
   * ULayout - layout container
   *
   * @component
   * @extends VLayout
   * @example
   * <ULayout>...</ULayout>
   */
  import { VLayout } from 'vuetify/components';
  import './ULayout.scss';

  // Component options
  defineOptions({ name: 'ULayout', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <VLayout v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </VLayout>
</template>

<style scoped lang="scss"></style>
