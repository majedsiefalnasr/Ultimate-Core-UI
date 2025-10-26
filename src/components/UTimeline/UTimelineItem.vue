<script setup lang="ts">
  /**
   * UTimelineItem - timeline component
   *
   * @component
   * @extends VTimelineItem
   */
  import { VTimelineItem } from 'vuetify/components';
  import './UTimeline.scss';

  // Component options
  defineOptions({ name: 'UTimelineItem', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-timeline-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-timeline-item>
</template>

<style scoped lang="scss"></style>
