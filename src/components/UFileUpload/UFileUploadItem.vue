<script setup lang="ts">
  /**
   * Extended UFileUploadItem component built on Vuetify's VFileUploadItem.
   * Inherits all VFileUploadItem props, slots, and emits.
   *
   * @component
   * @extends VFileUploadItem
   */
  // Import Vuetify's VFileUploadItem component (Base component)
  import { VFileUploadItem } from 'vuetify/labs/VFileUpload';
  // Import local styles
  import './UFileUpload.scss';

  // Define component options
  defineOptions({ name: 'UFileUploadItem', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-file-upload-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-file-upload-item>
</template>

<style scoped lang="scss"></style>
