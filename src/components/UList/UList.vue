<!-- snippet:UList -->
<!-- <UList><UListItem>Item</UListItem></UList> -->

<script setup lang="ts">
  /**
   * Extended UList component built on Vuetify's VList.
   * Inherits all VList props, slots, and emits.
   *
   * @component
   * @extends VList
   * @example
   * <UList>
   *   <UListItem>First</UListItem>
   * </UList>
   */
  import { VList } from 'vuetify/components';
  import './UList.scss';

  defineOptions({
    name: 'UList',
    inheritAttrs: false,
  });

  defineSlots<{
    [key: string]: (props: Record<string, unknown>) => unknown;
  }>();
</script>

<template>
  <v-list v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-list>
</template>

<style scoped lang="scss"></style>
