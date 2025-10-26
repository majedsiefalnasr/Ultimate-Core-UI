<script setup lang="ts">
  /**
   * UStepper - simple surface container
   *
   * @component
   * @extends VStepper
   */
  import { VStepper } from 'vuetify/components';
  import './UStepper.scss';

  // Component options
  defineOptions({ name: 'UStepper', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-stepper v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-stepper>
</template>

<style scoped lang="scss"></style>
