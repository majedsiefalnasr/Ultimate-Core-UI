<script setup lang="ts">
  /**
   * Extended UMenu component built on Vuetify's VMenu.
   * Inherits all VMenu props, slots, and emits.
   *
   * @component
   * @extends VMenu
   */
  import { VMenu } from 'vuetify/components';
  import './UMenu.scss';

  // Component options
  defineOptions({ name: 'UMenu', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-menu v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-menu>
</template>

<style scoped lang="scss"></style>
