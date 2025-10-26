<script setup lang="ts">
  /**
   * USpacer - wrapper around Vuetify VSpacer component
   *
   * @component
   * @extends VSpacer
   */
  import { VSpacer } from 'vuetify/components';
  import './UGrid.scss';

  // Component options
  defineOptions({ name: 'USpacer', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-spacer v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-spacer>
</template>

<style scoped lang="scss"></style>
