<script setup lang="ts">
  /**
   * UContainer - wrapper around Vuetify VContainer component
   *
   * @component
   * @extends VContainer
   */
  import { VContainer } from 'vuetify/components';
  import './UGrid.scss';

  // Component options
  defineOptions({ name: 'UContainer', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-container v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-container>
</template>

<style scoped lang="scss"></style>
