<script setup lang="ts">
  /**
   * Extended UBtnGroup component built on Vuetify's VBtnGroup.
   * Inherits all VBtnGroup props, slots, and emits.
   *
   * @component
   * @extends VBtnGroup
   */
  // Import Vuetify's VBtnGroup component (Base component)
  import { VBtnGroup } from 'vuetify/components';
  import './UBtnGroup.scss';

  // Component options
  defineOptions({ name: 'UBtnGroup', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-btn-group v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-btn-group>
</template>

<style scoped lang="scss"></style>
