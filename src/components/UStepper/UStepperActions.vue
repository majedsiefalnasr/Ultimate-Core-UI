<script setup lang="ts">
  /**
   * UStepperActions - simple surface container
   *
   * @component
   * @extends VStepperActions
   */
  import { VStepperActions } from 'vuetify/components';
  import './UStepper.scss';

  // Component options
  defineOptions({ name: 'UStepperActions', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-stepper-actions v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-stepper-actions>
</template>

<style scoped lang="scss"></style>
