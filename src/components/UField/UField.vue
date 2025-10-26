<script setup lang="ts">
  /**
   * UField - generic form field wrapper, based on Vuetify form controls.
   *
   * @component
   * @extends VField
   */
  import { VField } from 'vuetify/components';
  import './UField.scss';

  // Component options
  defineOptions({ name: 'UField', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-field class="u-field" v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-field>
</template>

<style scoped lang="scss"></style>
