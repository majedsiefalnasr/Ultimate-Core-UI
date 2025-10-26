<script setup lang="ts">
  /**
   * Extended UCode component built on Vuetify's VCode (if available) or as a simple wrapper.
   * Inherits props, slots, and emits where applicable.
   *
   * @component
   * @extends VCode
   */
  // Import Vuetify's base component (placeholder)
  import { VCode } from 'vuetify/components';
  import './UCode.scss';

  // Component options
  defineOptions({ name: 'UCode', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-code v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-code>
</template>

<style scoped lang="scss"></style>
