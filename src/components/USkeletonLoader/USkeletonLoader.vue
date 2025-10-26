<script setup lang="ts">
  /**
   * USheet - simple surface container
   *
   * @component
   * @extends VSkeletonLoader
   */
  import { VSkeletonLoader } from 'vuetify/components';
  import './USkeletonLoader.scss';

  // Component options
  defineOptions({ name: 'USkeletonLoader', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-skeleton-loader v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-skeleton-loader>
</template>

<style scoped lang="scss"></style>
