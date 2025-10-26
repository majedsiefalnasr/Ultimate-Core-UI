<script setup lang="ts">
  /**
   * Extended UListImg component built on Vuetify's VListImg.
   * Inherits all VListImg props, slots, and emits.
   *
   * @component
   * @extends VListImg
   */
  import { VListImg } from 'vuetify/components';
  import './UList.scss';

  // Component options
  defineOptions({ name: 'UListImg', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-list-img v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-list-img>
</template>

<style scoped lang="scss"></style>
