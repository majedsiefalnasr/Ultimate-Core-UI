<!-- snippet:UMenu -->
<!-- <UMenu>Menu</UMenu> -->

<script setup lang="ts">
  /**
   * Extended UMenu component built on Vuetify's VMenu.
   * Inherits all VMenu props, slots, and emits.
   *
   * @component
   * @extends VMenu
   * @example
   * <UMenu activator="(props) => <UBtn v-bind=\"props\">Open</UBtn>">...</UMenu>
   */
  import { VMenu } from 'vuetify/components';
  import './UMenu.scss';

  defineOptions({
    name: 'UMenu',
    inheritAttrs: false,
  });

  defineSlots<{
    [key: string]: (props: Record<string, unknown>) => unknown;
  }>();
</script>

<template>
  <v-menu v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-menu>
</template>

<style scoped lang="scss"></style>
