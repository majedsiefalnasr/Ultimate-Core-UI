<script setup lang="ts">
  /**
   * UNoSsr - disables server-side rendering for child content
   *
   * @component
   * @extends VNoSsr
   */
  import { VNoSsr } from 'vuetify/components';
  import './UNoSsr.scss';

  // Component options
  defineOptions({ name: 'UNoSsr', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-no-ssr v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-no-ssr>
</template>

<style scoped lang="scss"></style>
