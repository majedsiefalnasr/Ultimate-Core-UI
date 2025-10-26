<script setup lang="ts">
  /**
   * ULayoutItem - layout container
   *
   * @component
   * @extends VLayoutItem
   */
  import { computed, useAttrs } from 'vue';
  import { VLayoutItem } from 'vuetify/components';
  import './ULayout.scss';

  // Component options
  defineOptions({ name: 'ULayoutItem', inheritAttrs: false });

  // Grab current attrs and ensure required position prop is present
  const attrs = useAttrs() as Record<string, unknown>;
  const boundAttrs = computed(() => ({
    ...attrs,
    position: (attrs.position as 'top' | 'bottom' | 'left' | 'right') ?? 'top',
  }));

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-layout-item v-bind="boundAttrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-layout-item>
</template>

<style scoped lang="scss"></style>
