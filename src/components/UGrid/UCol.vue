<script setup lang="ts">
  /**
   * UCol - wrapper around Vuetify VCol component
   *
   * @component
   * @extends VCol
   */
  import { VCol } from 'vuetify/components';
  import './UGrid.scss';

  // Component options
  defineOptions({ name: 'UCol', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-col v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-col>
</template>

<style scoped lang="scss"></style>
