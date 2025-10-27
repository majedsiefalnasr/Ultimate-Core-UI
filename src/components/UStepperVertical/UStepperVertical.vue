<script setup lang="ts">
  /**
   * Extended UStepperVertical component built on Vuetify's VStepper.
   * Inherits all VStepper props, slots, and emits.
   * Configured for vertical layout.
   *
   * @component
   * @extends VStepper
   */
  // Import Vuetify's VStepper component (Base component)
  import { VStepper } from 'vuetify/components';
  // Import local styles
  import './UStepperVertical.scss';

  defineOptions({
    name: 'UStepperVertical',
    inheritAttrs: false,
  });

  // Define slots with proper typing
  defineSlots<{
    [key: string]: (props: Record<string, unknown>) => unknown;
  }>();
</script>

<template>
  <v-stepper v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-stepper>
</template>

<style scoped lang="scss"></style>
