<script setup lang="ts">
  /**
   * Extended UStepperVerticalItem component built on Vuetify's VStepperVerticalItem.
   * Inherits all VStepperVerticalItem props, slots, and emits.
   * Configured for vertical layout.
   *
   * @component
   * @extends VStepperVerticalItem
   */
  // Import Vuetify's VStepperVerticalItem component (Base component)
  import { VStepperVerticalItem } from 'vuetify/labs/VStepperVertical';
  // Import local styles
  import './UStepperVertical.scss';

  defineOptions({
    name: 'UStepperVerticalItem',
    inheritAttrs: false,
  });

  // Define slots with proper typing
  defineSlots<{
    [key: string]: (props: Record<string, unknown>) => unknown;
  }>();
</script>

<template>
  <v-stepper-vertical-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-stepper-vertical-item>
</template>

<style scoped lang="scss"></style>
