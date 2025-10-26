<script setup lang="ts">
  /**
   * UOverlay - overlay wrapper
   *
   * @component
   * @extends VOverlay
   */
  import { VOverlay } from 'vuetify/components';
  import './UOverlay.scss';

  // Component options
  defineOptions({ name: 'UOverlay', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-overlay v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-overlay>
</template>

<style scoped lang="scss"></style>
