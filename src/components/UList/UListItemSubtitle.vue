<script setup lang="ts">
  /**
   * Extended UListItemSubtitle component built on Vuetify's VListItemSubtitle.
   * Inherits all VListItemSubtitle props, slots, and emits.
   *
   * @component
   * @extends VListItemSubtitle
   * </UList>
   */
  import { VListItemSubtitle } from 'vuetify/components';
  import './UList.scss';

  // Component options
  defineOptions({ name: 'UListItemSubtitle', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-list-item-subtitle v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-list-item-subtitle>
</template>

<style scoped lang="scss"></style>
