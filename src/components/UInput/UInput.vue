<script setup lang="ts">
  /**
   * UInput - text input wrapper
   *
   * @component
   * @extends VInput
   */
  import { VInput } from 'vuetify/components';
  import './UInput.scss';

  // Component options
  defineOptions({ name: 'UInput', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-input v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-input>
</template>

<style scoped lang="scss"></style>
