<script setup lang="ts">
  /**
   * Extended UBadge component built on Vuetify's VBadge.
   * Inherits all VBadge props, slots, and emits.
   *
   * @component
   * @extends VBadge
   */
  // Import Vuetify's VBadge component (Base component)
  import { VBadge } from 'vuetify/components';
  import './UBadge.scss';

  // Component options
  defineOptions({ name: 'UBadge', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-badge v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-badge>
</template>

<style scoped lang="scss"></style>
