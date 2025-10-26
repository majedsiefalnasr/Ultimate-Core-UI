<script setup lang="ts">
  /**
   * UMessages - message list / toast wrapper
   *
   * @component
   * @extends VMessages
   */
  import { VMessages } from 'vuetify/components';
  import './UMessages.scss';

  // Component options
  defineOptions({ name: 'UMessages', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-messages v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-messages>
</template>

<style scoped lang="scss"></style>
