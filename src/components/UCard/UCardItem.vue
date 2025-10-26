<script setup lang="ts">
  /**
   * Extended UCardItem component built on Vuetify's VCardItem.
   * Inherits all VCardItem props, slots, and emits.
   *
   * @component
   * @extends VCardItem
   */
  import { VCardItem } from 'vuetify/components';
  // Import local styles
  import './UCard.scss';

  defineOptions({ name: 'UCardItem', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-card-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-card-item>
</template>

<style scoped lang="scss"></style>
