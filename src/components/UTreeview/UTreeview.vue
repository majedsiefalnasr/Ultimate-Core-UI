<script setup lang="ts">
  /**
   * UTreeview - treeview component
   *
   * @component
   * @extends VTreeview
   */
  import { VTreeview } from 'vuetify/components';
  import './UTreeview.scss';

  // Component options
  defineOptions({ name: 'UTreeview', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-treeview v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-treeview>
</template>

<style scoped lang="scss"></style>
