<script setup lang="ts">
  /**
   * USheet - simple surface container
   *
   * @component
   * @extends VSnackbarQueue
   */
  import { VSnackbarQueue } from 'vuetify/components';
  import './USnackbarQueue.scss';

  // Component options
  defineOptions({ name: 'USnackbarQueue', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-snackbar-queue v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-snackbar-queue>
</template>

<style scoped lang="scss"></style>
