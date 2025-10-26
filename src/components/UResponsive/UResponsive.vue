<script setup lang="ts">
  /**
   * UResponsive - responsive container helper
   *
   * @component
   * @extends VResponsive
   */
  import { VResponsive } from 'vuetify/components';
  import './UResponsive.scss';

  // Component options
  defineOptions({ name: 'UResponsive', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-responsive v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-responsive>
</template>

<style scoped lang="scss"></style>
