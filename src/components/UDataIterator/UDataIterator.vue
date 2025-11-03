<script setup lang="ts">
  /**
   * Extended UDataIterator - wrapper for data alteration UI
   *
   * @component
   * @extends VDataIterator
   */
  import { VDataIterator } from 'vuetify/components';
  import './UDataIterator.scss';

  // Component options
  defineOptions({ name: 'UDataIterator', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-data-iterator v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-data-iterator>
</template>

<style scoped lang="scss"></style>
