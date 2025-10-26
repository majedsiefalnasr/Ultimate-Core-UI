<script setup lang="ts">
  /**
   * UTextField - text field input component
   *
   * @component
   * @extends VTextField
   */
  import { VTextField } from 'vuetify/components';
  import './UTextField.scss';

  // Component options
  defineOptions({ name: 'UTextField', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-text-field v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-text-field>
</template>

<style scoped lang="scss"></style>
