<script setup lang="ts">
  /**
   * USheet - simple surface container
   *
   * @component
   * @extends VSnackbar
   */
  import { VSnackbar } from 'vuetify/components';
  import './USnackbar.scss';

  // Component options
  defineOptions({ name: 'USnackbar', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-snackbar v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-snackbar>
</template>

<style scoped lang="scss"></style>
