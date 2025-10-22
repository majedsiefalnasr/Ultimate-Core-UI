<!-- snippet:UExpansionPanel -->
<!-- <UExpansionPanel title="Title">Content</UExpansionPanel> -->

<script setup lang="ts">
  /**
   * Extended UExpansionPanel component built on Vuetify's VExpansionPanel.
   * Inherits all VExpansionPanel props, slots, and emits.
   *
   * @component
   * @extends VExpansionPanel
   * @example
   * <UExpansionPanel>
   *   <template #title>My panel</template>
   *   Panel content
   * </UExpansionPanel>
   */
  import { VExpansionPanel } from 'vuetify/components';
  import './UExpansionPanel.scss';

  defineOptions({
    name: 'UExpansionPanel',
    inheritAttrs: false,
  });

  defineSlots<{
    [key: string]: (props: Record<string, unknown>) => unknown;
  }>();
</script>

<template>
  <v-expansion-panel v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-expansion-panel>
</template>

<style scoped lang="scss"></style>
