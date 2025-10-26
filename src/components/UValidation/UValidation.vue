<script setup lang="ts">
  /**
   * UValidation - validation component
   *
   * @component
   * @extends VValidation
   */
  import { VValidation } from 'vuetify/components';
  import './UValidation.scss';

  // Component options
  defineOptions({ name: 'UValidation', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-validation v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-validation>
</template>

<style scoped lang="scss"></style>
