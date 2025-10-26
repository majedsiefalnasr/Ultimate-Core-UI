<script setup lang="ts">
  /**
   * Extended UListItemAction component built on Vuetify's VListItemAction.
   * Inherits all VListItemAction props, slots, and emits.
   *
   * @component
   * @extends VListItemAction
   * </UList>
   */
  import { VListItemAction } from 'vuetify/components';
  import './UList.scss';

  // Component options
  defineOptions({ name: 'UListItemAction', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-list-item-action v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-list-item-action>
</template>

<style scoped lang="scss"></style>
