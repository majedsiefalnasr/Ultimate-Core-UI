<script setup lang="ts">
  /**
   * USelectionControlGroup - responsive container helper
   *
   * @component
   * @extends VSelectionControlGroup
   */
  import { VSelectionControlGroup } from 'vuetify/components';
  import './USelectionControlGroup.scss';

  // Component options
  defineOptions({ name: 'USelectionControlGroup', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-selection-control-group v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-selection-control-group>
</template>

<style scoped lang="scss"></style>
