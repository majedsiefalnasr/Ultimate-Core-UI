<script setup lang="ts">
  /**
   * USlideGroup - simple surface container
   *
   * @component
   * @extends VSlideGroup
   */
  import { VSlideGroup } from 'vuetify/components';
  import './USlideGroup.scss';

  // Component options
  defineOptions({ name: 'USlideGroup', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-slide-group v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-slide-group>
</template>

<style scoped lang="scss"></style>
