<script setup lang="ts">
  /**
   * Extended UListSubheader component built on Vuetify's VListSubheader.
   * Inherits all VListSubheader props, slots, and emits.
   *
   * @component
   * @extends VListSubheader
   * </UList>
   */
  import { VListSubheader } from 'vuetify/components';
  import './UList.scss';

  // Component options
  defineOptions({ name: 'UListSubheader', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-list-subheader v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-list-subheader>
</template>

<style scoped lang="scss"></style>
