<script setup lang="ts">
  /**
   * UTimePickerClock - time picker component
   *
   * @component
   * @extends VTimePickerClock
   */
  import { computed, useAttrs } from 'vue';
  import { VTimePickerClock } from 'vuetify/components';
  import './UTimePicker.scss';

  // Component options
  defineOptions({ name: 'UTimePickerClock', inheritAttrs: false });

  // Grab current attrs and ensure required min and max props are present
  const attrs = useAttrs() as Record<string, unknown>;
  const boundAttrs = computed(() => ({
    ...attrs,
    min: (attrs.min as number) ?? 0,
    max: (attrs.max as number) ?? 0,
  }));

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-time-picker-clock v-bind="boundAttrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-time-picker-clock>
</template>

<style scoped lang="scss"></style>
