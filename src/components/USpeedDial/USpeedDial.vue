<script setup lang="ts">
  /**
   * USheet - simple surface container
   *
   * @component
   * @extends VSpeedDial
   */
  import { VSpeedDial } from 'vuetify/components';
  import './USpeedDial.scss';

  // Component options
  defineOptions({ name: 'USpeedDial', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-speed-dial v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-speed-dial>
</template>

<style scoped lang="scss"></style>
