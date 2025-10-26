<script setup lang="ts">
  /**
   * UFooter - footer wrapper component
   *
   * @component
   * @extends VFooter
   */
  import { VFooter } from 'vuetify/components';
  import './UFooter.scss';

  // Component options
  defineOptions({ name: 'UFooter', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-footer v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-footer>
</template>

<style scoped lang="scss"></style>
