<script setup lang="ts">
  /**
   * UStepperWindowItem - simple surface container
   *
   * @component
   * @extends VStepperWindowItem
   */
  import { VStepperWindowItem } from 'vuetify/components';
  import './UStepper.scss';

  // Component options
  defineOptions({ name: 'UStepperWindowItem', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-stepper-window-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-stepper-window-item>
</template>

<style scoped lang="scss"></style>
