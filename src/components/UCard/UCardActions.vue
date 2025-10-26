<script setup lang="ts">
  /**
   * Extended UCardActions component built on Vuetify's VCardActions.
   * Inherits all VCardActions props, slots, and emits.
   *
   * @component
   * @extends VCardActions
   */
  import { VCardActions } from 'vuetify/components';
  // Import local styles
  import './UCard.scss';

  defineOptions({ name: 'UCardActions', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-card-actions v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-card-actions>
</template>

<style scoped lang="scss"></style>
