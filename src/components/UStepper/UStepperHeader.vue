<script setup lang="ts">
  /**
   * UStepperHeader - simple surface container
   *
   * @component
   * @extends VStepperHeader
   */
  import { VStepperHeader } from 'vuetify/components';
  import './UStepper.scss';

  // Component options
  defineOptions({ name: 'UStepperHeader', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-stepper-header v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-stepper-header>
</template>

<style scoped lang="scss"></style>
