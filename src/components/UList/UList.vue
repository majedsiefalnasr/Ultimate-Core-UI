<script setup lang="ts">
  /**
   * Extended UList component built on Vuetify's VList.
   * Inherits all VList props, slots, and emits.
   *
   * @component
   * @extends VList
   * </UList>
   */
  import { VList } from 'vuetify/components';
  import './UList.scss';

  // Component options
  defineOptions({ name: 'UList', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-list v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-list>
</template>

<style scoped lang="scss"></style>
