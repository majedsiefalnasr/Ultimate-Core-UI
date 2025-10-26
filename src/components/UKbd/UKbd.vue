<script setup lang="ts">
  /**
   * UKbd - keyboard key visual helper
   *
   * @component
   * @extends VKbd
   */
  import { VKbd } from 'vuetify/components';
  import './UKbd.scss';

  // Component options
  defineOptions({ name: 'UKbd', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-kbd v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-kbd>
</template>

<style scoped lang="scss"></style>
