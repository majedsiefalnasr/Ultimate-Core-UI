<script setup lang="ts">
  /**
   * UFileInput - file input wrapper component
   *
   * @component
   * @extends VFileInput
   */
  import { VFileInput } from 'vuetify/components';
  import './UFileInput.scss';

  // Component options
  defineOptions({ name: 'UFileInput', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-file-input v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-file-input>
</template>

<style scoped lang="scss"></style>
