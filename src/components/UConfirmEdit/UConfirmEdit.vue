<script setup lang="ts">
  /**
   * Extended UConfirmEdit component - lightweight wrapper for edit confirmation
   * Inherits props, slots, and emits where applicable.
   *
   * @component
   * @extends VConfirmEdit
   */
  import { VConfirmEdit } from 'vuetify/components';
  import './UConfirmEdit.scss';

  // Component options
  defineOptions({ name: 'UConfirmEdit', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-confirm-edit v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-confirm-edit>
</template>

<style scoped lang="scss"></style>
