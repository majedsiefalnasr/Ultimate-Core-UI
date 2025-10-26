<script setup lang="ts">
  /**
   * USheet - simple surface container
   *
   * @component
   * @extends VSwitch
   */
  import { VSwitch } from 'vuetify/components';
  import './USwitch.scss';

  // Component options
  defineOptions({ name: 'USwitch', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-switch v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-switch>
</template>

<style scoped lang="scss"></style>
