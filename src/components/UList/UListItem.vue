<script setup lang="ts">
  /**
   * Extended UListItem component built on Vuetify's VListItem.
   * Inherits all VListItem props, slots, and emits.
   *
   * @component
   * @extends VListItem
   */
  import { VListItem } from 'vuetify/components';
  import './UList.scss';

  // Component options
  defineOptions({ name: 'UListItem', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-list-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-list-item>
</template>

<style scoped lang="scss"></style>
