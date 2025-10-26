<script setup lang="ts">
  /**
   * UFadeTransition - fade transition component
   *
   * @component
   * @extends VFadeTransition
   */
  import { VFadeTransition } from 'vuetify/components';
  import './UFadeTransition.scss';

  // Component options
  defineOptions({ name: 'UFadeTransition', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-fade-transition v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-fade-transition>
</template>

<style scoped lang="scss"></style>
