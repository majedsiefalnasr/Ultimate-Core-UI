<script setup lang="ts">
  /**
   * USheet - simple surface container
   *
   * @component
   * @extends VSparkline
   */
  import { VSparkline } from 'vuetify/components';
  import './USparkline.scss';

  // Component options
  defineOptions({ name: 'USparkline', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-sparkline v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-sparkline>
</template>

<style scoped lang="scss"></style>
