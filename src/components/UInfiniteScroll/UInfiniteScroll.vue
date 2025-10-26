<script setup lang="ts">
  /**
   * UInfiniteScroll - wrapper to provide infinite scroll behaviour
   *
   * @component
   * @extends VInfiniteScroll
   */
  import { VInfiniteScroll } from 'vuetify/components';
  import './UInfiniteScroll.scss';

  // Component options
  defineOptions({ name: 'UInfiniteScroll', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-infinite-scroll v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-infinite-scroll>
</template>

<style scoped lang="scss"></style>
