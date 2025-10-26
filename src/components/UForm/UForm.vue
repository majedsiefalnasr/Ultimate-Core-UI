<script setup lang="ts">
  /**
   * UForm - wrapper around native form element with consistent styling
   *
   * @component
   * @extends VForm
   */
  import { VForm } from 'vuetify/components';
  import './UForm.scss';

  // Component options
  defineOptions({ name: 'UForm', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-form v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-form>
</template>

<style scoped lang="scss"></style>
