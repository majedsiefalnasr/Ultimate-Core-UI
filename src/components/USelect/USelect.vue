<script setup lang="ts">
  /**
   * USelect - responsive container helper
   *
   * @component
   * @extends VSelect
   */
  import { VSelect } from 'vuetify/components';
  import './USelect.scss';

  // Component options
  defineOptions({ name: 'USelect', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-select v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-select>
</template>

<style scoped lang="scss"></style>
