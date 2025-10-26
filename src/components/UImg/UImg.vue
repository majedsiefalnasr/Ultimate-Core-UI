<script setup lang="ts">
  /**
   * UImg - image wrapper
   *
   * @component
   * @extends VImg
   */
  import { VImg } from 'vuetify/components';
  import './UImg.scss';

  // Component options
  defineOptions({ name: 'UImg', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-img v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-img>
</template>

<style scoped lang="scss"></style>
