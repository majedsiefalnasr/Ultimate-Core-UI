<script setup lang="ts">
  /**
   * Extended UAvatar component built on Vuetify's VAvatar.
   * Inherits all VAvatar props, slots, and emits.
   *
   * @component
   * @extends VAvatar
   */
  // Import Vuetify's VAvatar component (Base component)
  import { VAvatar } from 'vuetify/components';
  import './UAvatar.scss';

  // Component options
  defineOptions({ name: 'UAvatar', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-avatar v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-avatar>
</template>

<style scoped lang="scss"></style>
