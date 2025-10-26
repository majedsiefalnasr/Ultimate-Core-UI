<script setup lang="ts">
  /**
   * UBreadcrumbsDivider - breadcrumbs helper
   *
   * @component
   * @extends VBreadcrumbsDivider
   */
  import { VBreadcrumbsDivider } from 'vuetify/components';
  import './UBreadcrumbs.scss';

  // Component options
  defineOptions({ name: 'UBreadcrumbsDivider', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-breadcrumbs-divider v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-breadcrumbs-divider>
</template>

<style scoped lang="scss"></style>
