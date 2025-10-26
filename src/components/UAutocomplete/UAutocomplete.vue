<script setup lang="ts">
  /**
   * Extended UAutocomplete component built on Vuetify's VAutocomplete.
   * Inherits all VAutocomplete props, slots, and emits.
   *
   * @component
   * @extends VAutocomplete
   */
  // Import Vuetify's VAutocomplete component (Base component)
  import { VAutocomplete } from 'vuetify/components';
  import './UAutocomplete.scss';

  // Component options
  defineOptions({ name: 'UAutocomplete', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-autocomplete v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-autocomplete>
</template>

<style scoped lang="scss"></style>
