<!-- snippet:UBtn -->
<!-- <UBtn>Click Me</UBtn> -->

<script setup lang="ts">
  /**
   * Extended UBtn component built on Vuetify's VBtn.
   * Inherits all VBtn props, slots, and emits.
   *
   * @component
   * @extends VBtn
   * @example
   * <UBtn color="primary" @click="onClick">Click Me</UBtn>
   */
  // Import Vuetify's VBtn component (Base component)
  import { VBtn } from 'vuetify/components';
  // Import local styles
  import './UBtn.scss';

  defineOptions({
    name: 'UBtn',
    inheritAttrs: false,
  });
</script>

<template>
  <v-btn v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name as string" v-bind="slotData || {}" />
    </template>
  </v-btn>
</template>

<style scoped lang="scss"></style>
