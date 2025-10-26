<script setup lang="ts">
  /**
   * UBreadcrumbs - breadcrumbs helper
   *
   * @component
   * @extends VBreadcrumbs
   */
  import { VBreadcrumbs } from 'vuetify/components';
  import './UBreadcrumbs.scss';

  // Component options
  defineOptions({ name: 'UBreadcrumbs', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-breadcrumbs v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-breadcrumbs>
</template>

<style scoped lang="scss"></style>
