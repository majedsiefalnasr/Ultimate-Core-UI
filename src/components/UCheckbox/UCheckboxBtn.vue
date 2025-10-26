<script setup lang="ts">
  /**
   * Extended UCheckboxBtn component built on Vuetify's VCheckboxBtn.
   * Inherits all VCheckboxBtn props, slots, and emits.
   *
   * @component
   * @extends VCheckboxBtn
   */
  // Import Vuetify's VCheckbox component (Base component)
  import { VCheckboxBtn } from 'vuetify/components';
  import './UCheckbox.scss';

  // Component options
  defineOptions({ name: 'UCheckboxBtn', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-checkbox-btn v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-checkbox-btn>
</template>

<style scoped lang="scss"></style>
