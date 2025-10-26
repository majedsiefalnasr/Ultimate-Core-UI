<script setup lang="ts">
  /**
   * UPagination - pagination control wrapper
   *
   * @component
   * @extends VPagination
   */
  import { VPagination } from 'vuetify/components';
  import './UPagination.scss';

  // Component options
  defineOptions({ name: 'UPagination', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-pagination v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-pagination>
</template>

<style scoped lang="scss"></style>
