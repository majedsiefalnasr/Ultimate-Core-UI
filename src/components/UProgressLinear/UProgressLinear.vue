<script setup lang="ts">
  /**
   * UProgressLinear - linear progress wrapper
   *
   * @component
   * @extends VProgressLinear
   */
  import { VProgressLinear } from 'vuetify/components';
  import './UProgressLinear.scss';

  // Component options
  defineOptions({ name: 'UProgressLinear', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-progress-linear v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-progress-linear>
</template>

<style scoped lang="scss"></style>
