<script setup lang="ts">
  /**
   * UTimeline - timeline component
   *
   * @component
   * @extends VTimeline
   */
  import { VTimeline } from 'vuetify/components';
  import './UTimeline.scss';

  // Component options
  defineOptions({ name: 'UTimeline', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-timeline v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-timeline>
</template>

<style scoped lang="scss"></style>
