<script setup lang="ts">
  /**
   * UTextarea - textarea input component
   *
   * @component
   * @extends VTextarea
   */
  import { VTextarea } from 'vuetify/components';
  import './UTextarea.scss';

  // Component options
  defineOptions({ name: 'UTextarea', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-textarea v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-textarea>
</template>

<style scoped lang="scss"></style>
