<script setup lang="ts">
  /**
   * Extended UFab component built on Vuetify's VFab (VBtn with fab styles).
   * Inherits VFab props/slots/emits.
   *
   * @component
   * @extends VFab
   */
  import { VFab } from 'vuetify/components';
  import './UFab.scss';

  // Component options
  defineOptions({ name: 'UFab', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-fab v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-fab>
</template>

<style scoped lang="scss"></style>
