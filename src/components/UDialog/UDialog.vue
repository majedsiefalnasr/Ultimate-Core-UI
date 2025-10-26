<script setup lang="ts">
  /**
   * Extended UDialog component built on Vuetify's VDialog.
   * Inherits all VDialog props, slots, and emits.
   *
   * @component
   * @extends VDialog
   */
  import { VDialog } from 'vuetify/components';
  import './UDialog.scss';

  // Component options
  defineOptions({ name: 'UDialog', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-dialog v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
