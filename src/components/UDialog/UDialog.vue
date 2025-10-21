<!-- snippet:UDialog -->
<!-- <UDialog v-model:open="show">Content</UDialog> -->

<script setup lang="ts">
  /**
   * Extended UDialog component built on Vuetify's VDialog.
   * Inherits all VDialog props, slots, and emits.
   *
   * @component
   * @extends VDialog
   * @example
   * <UDialog v-model:open="show">Content</UDialog>
   */
  import { VDialog } from 'vuetify/components';
  import './UDialog.scss';

  defineOptions({
    name: 'UDialog',
    inheritAttrs: false,
  });

  defineSlots<{
    [key: string]: (props: Record<string, unknown>) => unknown;
  }>();
</script>

<template>
  <v-dialog v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
