<script setup lang="ts">
  /**
   * UStepperWindow - simple surface container
   *
   * @component
   * @extends VStepperWindow
   */
  import { VStepperWindow } from 'vuetify/components';
  import './UStepper.scss';

  // Component options
  defineOptions({ name: 'UStepperWindow', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-stepper-window v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-stepper-window>
</template>

<style scoped lang="scss"></style>
