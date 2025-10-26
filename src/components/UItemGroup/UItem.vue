<script setup lang="ts">
  /**
   * UItem - wrapper for individual items (e.g., list items)
   *
   * @component
   * @extends VItem
   */
  import { VItem } from 'vuetify/components';
  import './UItemGroup.scss';

  // Component options
  defineOptions({ name: 'UItem', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-item>
</template>

<style scoped lang="scss"></style>
