<script setup lang="ts">
  /**
   * UIcon - wrapper for Vuetify's VIcon
   *
   * @component
   * @extends VIcon
   */
  import { VIcon } from 'vuetify/components';
  import './UIcon.scss';

  defineOptions({ name: 'UIcon', inheritAttrs: false });
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-icon v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-icon>
</template>

<style scoped lang="scss"></style>
