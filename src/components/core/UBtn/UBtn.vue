<!-- snippet:UBtn -->
<!-- <UBtn color="primary" @click="onClick">Click Me</UBtn> -->

<script setup lang="ts">
  /**
   * Extended UBtn component built on Vuetify's VBtn.
   * Inherits all VBtn props, slots, and emits.
   *
   * @component
   * @extends VBtn
   * @example
   * <UBtn color="primary" @click="onClick">Click Me</UBtn>
   * <UBtn icon="mdi-heart" rounded="circle" />
   */
  import { VBtn } from 'vuetify/components';

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

<style scoped lang="scss">
  // keep local styles in UBtn.scss; uncomment if needed
  // @import './UBtn.scss';
</style>
