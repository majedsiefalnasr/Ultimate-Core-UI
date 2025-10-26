<script setup lang="ts">
  /**
   * Extended UListItemTitle component built on Vuetify's VListItemTitle.
   * Inherits all VListItemTitle props, slots, and emits.
   *
   * @component
   * @extends VListItemTitle
   * </UList>
   */
  import { VListItemTitle } from 'vuetify/components';
  import './UList.scss';

  // Component options
  defineOptions({ name: 'UListItemTitle', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-list-item-title v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-list-item-title>
</template>

<style scoped lang="scss"></style>
