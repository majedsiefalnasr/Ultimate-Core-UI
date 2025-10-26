<script setup lang="ts">
  /**
   * Extended UBtnToggle component built on Vuetify's VBtnToggle.
   * Inherits all VBtnToggle props, slots, and emits.
   *
   * @component
   * @extends VBtnToggle
   */
  // Import Vuetify's VBtnToggle component (Base component)
  import { VBtnToggle } from 'vuetify/components';
  import './UBtnToggle.scss';

  // Component options
  defineOptions({ name: 'UBtnToggle', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-btn-toggle v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-btn-toggle>
</template>

<style scoped lang="scss"></style>
