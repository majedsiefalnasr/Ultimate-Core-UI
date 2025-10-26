<script setup lang="ts">
  /**
   * UDefaultsProvider - provides default props/context for child components
   *
   * @component
   * @extends VDefaultsProvider
   */
  import { VDefaultsProvider } from 'vuetify/components';
  import './UDefaultsProvider.scss';

  // Component options
  defineOptions({ name: 'UDefaultsProvider', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-defaults-provider v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-defaults-provider>
</template>

<style scoped lang="scss"></style>
