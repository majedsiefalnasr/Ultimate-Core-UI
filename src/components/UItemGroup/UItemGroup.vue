<script setup lang="ts">
  /**
   * UItemGroup - wrapper for grouping items (e.g., list item groups)
   *
   * @component
   * @extends VItemGroup
   */
  import { VItemGroup } from 'vuetify/components';
  import './UItemGroup.scss';

  // Component options
  defineOptions({ name: 'UItemGroup', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-item-group v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-item-group>
</template>

<style scoped lang="scss"></style>
