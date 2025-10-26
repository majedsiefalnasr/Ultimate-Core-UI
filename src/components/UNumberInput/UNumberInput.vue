<script setup lang="ts">
  /**
   * UNumberInput - numeric input control wrapper
   *
   * @component
   * @extends VNumberInput
   */
  import { VNumberInput } from 'vuetify/components';
  import './UNumberInput.scss';

  // Component options
  defineOptions({ name: 'UNumberInput', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-number-input v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-number-input>
</template>

<style scoped lang="scss"></style>
