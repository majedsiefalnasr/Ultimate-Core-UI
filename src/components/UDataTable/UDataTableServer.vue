<script setup lang="ts">
  /**
   * Extended UDataTableServer component built on Vuetify's VDataTableServer.
   * Inherits all VDataTableServer props, slots, and emits.
   *
   * @component
   * @extends VDataTableServer
   */
  // Import Vuetify's VDataTable component (Base component)
  import { computed, useAttrs } from 'vue';
  import { VDataTableServer } from 'vuetify/components';
  import './UDataTable.scss';

  // Component options
  defineOptions({ name: 'UDataTableServer', inheritAttrs: false });

  // Grab current attrs and ensure required itemsLength prop is present
  const attrs = useAttrs() as Record<string, unknown>;
  const boundAttrs = computed(() => ({
    ...attrs,
    itemsLength: (attrs.itemsLength as number) ?? 0,
  }));

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-data-table-server v-bind="boundAttrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-data-table-server>
</template>

<style scoped lang="scss"></style>
