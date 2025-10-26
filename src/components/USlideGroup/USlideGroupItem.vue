<script setup lang="ts">
  /**
   * USlideGroupItem - simple surface container
   *
   * @component
   * @extends VSlideGroupItem
   */
  import { VSlideGroupItem } from 'vuetify/components';
  import './USlideGroup.scss';

  // Component options
  defineOptions({ name: 'USlideGroupItem', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-slide-group-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-slide-group-item>
</template>

<style scoped lang="scss"></style>
