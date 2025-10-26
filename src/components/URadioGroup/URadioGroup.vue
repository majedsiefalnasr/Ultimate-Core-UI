<script setup lang="ts">
  /**
   * URadioGroup - radio group wrapper
   *
   * @component
   * @extends VRadioGroup
   */
  import { VRadioGroup } from 'vuetify/components';
  import './URadioGroup.scss';

  // Component options
  defineOptions({ name: 'URadioGroup', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-radio-group v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-radio-group>
</template>

<style scoped lang="scss"></style>
