<script setup lang="ts">
  /**
   * URadio - radio input wrapper
   *
   * @component
   * @extends VRadio
   * @example
   * <URadio value="a" />
   */
  import { VRadio } from 'vuetify/components';
  import './URadio.scss';

  // Component options
  defineOptions({ name: 'URadio', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-radio v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-radio>
</template>

<style scoped lang="scss"></style>
