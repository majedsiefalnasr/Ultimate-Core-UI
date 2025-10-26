<script setup lang="ts">
  /**
   * ULocaleProvider - provides locale context to children
   *
   * @component
   * @extends VLocaleProvider
   */
  import { VLocaleProvider } from 'vuetify/components';
  import './ULocaleProvider.scss';

  // Component options
  defineOptions({ name: 'ULocaleProvider', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-locale-provider v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-locale-provider>
</template>

<style scoped lang="scss"></style>
