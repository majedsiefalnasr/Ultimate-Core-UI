<script setup lang="ts">
  /**
   * UStepperItem - simple surface container
   *
   * @component
   * @extends VStepperItem
   */
  import { VStepperItem } from 'vuetify/components';
  import './UStepper.scss';

  // Component options
  defineOptions({ name: 'UStepperItem', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-stepper-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-stepper-item>
</template>

<style scoped lang="scss"></style>
