<script setup lang="ts">
  /**
   * UFieldLabel - generic form field label, based on Vuetify form controls.
   *
   * @component
   * @extends VFieldLabel
   */
  import { VFieldLabel } from 'vuetify/components';
  import './UField.scss';

  // Component options
  defineOptions({ name: 'UFieldLabel', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-field-label class="u-field" v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-field-label>
</template>

<style scoped lang="scss"></style>
