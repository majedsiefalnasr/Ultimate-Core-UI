<script setup lang="ts">
  /**
   * Extended UListItemMedia component built on Vuetify's VListItemMedia.
   * Inherits all VListItemMedia props, slots, and emits.
   *
   * @component
   * @extends VListItemMedia
   * </UList>
   */
  import { VListItemMedia } from 'vuetify/components';
  import './UList.scss';

  // Component options
  defineOptions({ name: 'UListItemMedia', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-list-item-media v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-list-item-media>
</template>

<style scoped lang="scss"></style>
