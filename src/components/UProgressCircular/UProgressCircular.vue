<script setup lang="ts">
  /**
   * UProgressCircular - circular progress wrapper
   *
   * @component
   * @extends VProgressCircular
   */
  import { VProgressCircular } from 'vuetify/components';
  import './UProgressCircular.scss';

  // Component options
  defineOptions({ name: 'UProgressCircular', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-progress-circular v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-progress-circular>
</template>

<style scoped lang="scss"></style>
