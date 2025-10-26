<script setup lang="ts">
  /**
   * URow - wrapper around Vuetify VRow component
   *
   * @component
   * @extends VRow
   */
  import { VRow } from 'vuetify/components';
  import './UGrid.scss';

  // Component options
  defineOptions({ name: 'URow', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-row v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-row>
</template>

<style scoped lang="scss"></style>
