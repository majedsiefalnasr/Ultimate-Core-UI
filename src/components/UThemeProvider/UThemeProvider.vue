<script setup lang="ts">
  /**
   * UThemeProvider - theme provider component
   *
   * @component
   * @extends VThemeProvider
   */
  import { VThemeProvider } from 'vuetify/components';
  import './UThemeProvider.scss';

  // Component options
  defineOptions({ name: 'UThemeProvider', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-theme-provider v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-theme-provider>
</template>

<style scoped lang="scss"></style>
