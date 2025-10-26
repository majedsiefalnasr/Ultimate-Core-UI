<script setup lang="ts">
  /**
   * ULazy - lazy render wrapper
   *
   * @component
   * @extends VLazy
   * @example
   * <ULazy><HeavyComponent /></ULazy>
   */
  import { VLazy } from 'vuetify/components';
  import './ULazy.scss';

  // Component options
  defineOptions({ name: 'ULazy', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <VLazy v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </VLazy>
</template>

<style scoped lang="scss"></style>
