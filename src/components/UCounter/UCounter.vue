<script setup lang="ts">
  /**
   * Extended UCounter - small counter/display component
   *
   * @component
   * @extends VCounter
   */
  import { VCounter } from 'vuetify/components';
  import './UCounter.scss';

  // Component options
  defineOptions({ name: 'UCounter', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-counter v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-counter>
</template>

<style scoped lang="scss"></style>
