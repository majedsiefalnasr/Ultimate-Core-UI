<script setup lang="ts">
  /**
   * Extended UListGroup component built on Vuetify's VListGroup.
   * Inherits all VListGroup props, slots, and emits.
   *
   * @component
   * @extends VListGroup
   */
  import { VListGroup } from 'vuetify/components';
  import './UList.scss';

  // Component options
  defineOptions({ name: 'UListGroup', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-list-group v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-list-group>
</template>

<style scoped lang="scss"></style>
