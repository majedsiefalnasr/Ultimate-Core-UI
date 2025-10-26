<script setup lang="ts">
  /**
   * Extended UCardText component built on Vuetify's VCardText.
   * Inherits all VCardText props, slots, and emits.
   *
   * @component
   * @extends VCardText
   */
  import { VCardText } from 'vuetify/components';
  // Import local styles
  import './UCard.scss';

  defineOptions({ name: 'UCardText', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-card-text v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-card-text>
</template>

<style scoped lang="scss"></style>
