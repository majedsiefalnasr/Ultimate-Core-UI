<script setup lang="ts">
  /**
   * ULabel - label element wrapper
   *
   * @component
   * @extends VList
   */
  import { VList } from 'vuetify/components';
  import './ULabel.scss';

  // Component options
  defineOptions({ name: 'ULabel', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <VList v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </VList>
</template>

<style scoped lang="scss"></style>
