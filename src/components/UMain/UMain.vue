<script setup lang="ts">
  /**
   * UMain - main content wrapper
   *
   * @component
   * @extends VMain
   */
  import { VMain } from 'vuetify/components';
  import './UMain.scss';

  // Component options
  defineOptions({ name: 'UMain', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-main v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-main>
</template>

<style scoped lang="scss"></style>
