<script setup lang="ts">
  /**
   * Extended UAppBarNavIcon component built on Vuetify's VAppBarNavIcon.
   * Inherits all VAppBarNavIcon props, slots, and emits.
   *
   * @component
   * @extends VAppBarNavIcon
   */
  // Import Vuetify's VAppBar component (Base component)
  import { VAppBarNavIcon } from 'vuetify/components';
  import './UAppBar.scss';

  // Component options
  defineOptions({ name: 'UAppBarNavIcon', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-app-bar-nav-icon v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-app-bar-nav-icon>
</template>

<style scoped lang="scss"></style>
