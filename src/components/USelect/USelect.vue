<script setup lang="ts">
  /**
   * Extended USelect component built on Vuetify's VSelect.
   * Inherits all VSelect props, slots, and emits.
   *
   * Supports two modes:
   * 1. Default mode (no variant): Custom styled with external label, outlined variant, and compact density
   * 2. Standard mode (with variant): Full passthrough to VSelect
   *
   * @component
   * @extends VSelect
   * @example
   * <!-- Custom mode with external label -->
   * <USelect label="Choose Option" :items="items" v-model="selected" />
   *
   * @example
   * <!-- Standard Vuetify mode -->
   * <USelect variant="solo" label="Choose Option" :items="items" v-model="selected" />
   */
  // Import Vuetify components
  import { computed, useAttrs } from 'vue';
  import { VLabel, VSelect } from 'vuetify/components';

  import { useUniqueId } from '../../composables/useUniqueId';
  import './USelect.scss';

  // Component options
  defineOptions({ name: 'USelect', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();

  // Get attrs once for efficiency
  const attrs = useAttrs();

  // Generate unique ID for SSR-safe label association
  const generatedId = useUniqueId();

  // Computed property for variant - determines rendering mode
  const variant = computed(() => attrs.variant as string | undefined);

  // Computed property for label - used in custom mode
  const label = computed(() => attrs.label as string | undefined);

  // Computed property for element ID - ensures proper label association
  const elementId = computed<string>(() => {
    const providedId = attrs.id as string | undefined;
    // Use provided ID or fallback to Vue's SSR-safe generated ID
    return providedId ?? generatedId;
  });

  // Convert width-related props to inline styles for container
  const containerStyle = computed(() => {
    const styles: Record<string, string> = {};

    // Check for both kebab-case and camelCase versions
    const maxWidthValue = attrs['max-width'] || attrs.maxWidth;
    const minWidthValue = attrs['min-width'] || attrs.minWidth;
    const widthValue = attrs.width;

    if (maxWidthValue) {
      const value = String(maxWidthValue);
      // Add 'px' only if the value is a pure number without units
      styles['max-width'] = /^\d+$/.test(value) ? `${value}px` : value;
    }

    if (minWidthValue) {
      const value = String(minWidthValue);
      styles['min-width'] = /^\d+$/.test(value) ? `${value}px` : value;
    }

    if (widthValue) {
      const value = String(widthValue);
      styles.width = /^\d+$/.test(value) ? `${value}px` : value;
    }

    return styles;
  });

  // Filter out width-related props from attrs for VSelect
  const inputAttrs = computed(() => {
    const rest: Record<string, unknown> = {};

    for (const key in attrs) {
      // Skip width-related props in both kebab-case and camelCase
      if (
        key !== 'max-width' &&
        key !== 'maxWidth' &&
        key !== 'min-width' &&
        key !== 'minWidth' &&
        key !== 'width'
      ) {
        rest[key] = attrs[key];
      }
    }

    return rest;
  });
</script>

<template>
  <!-- Standard mode: Full Vuetify passthrough when variant is specified -->
  <v-select v-if="variant" v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-select>

  <!-- Custom mode: External label with outlined, compact styling when no variant -->
  <div v-else class="v-input" :style="containerStyle">
    <v-label v-if="label" :for="elementId" class="mb-1 text-body-2" :text="label" />

    <v-select v-bind="inputAttrs" :id="elementId" label="" variant="outlined">
      <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </v-select>
  </div>
</template>

<style scoped lang="scss"></style>
