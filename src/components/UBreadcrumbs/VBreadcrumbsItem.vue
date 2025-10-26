<script setup lang="ts">
  /**
   * UBreadcrumbsItem - breadcrumbs helper
   *
   * @component
   * @extends VBreadcrumbsItem
   */
  import { VBreadcrumbsItem } from 'vuetify/components';
  import './UBreadcrumbs.scss';

  // Component options
  defineOptions({ name: 'UBreadcrumbsItem', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-breadcrumbs-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-breadcrumbs-item>
</template>

<style scoped lang="scss"></style>
