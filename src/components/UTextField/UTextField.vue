<script setup lang="ts">
  /**
   * Extended UTextField component built on Vuetify's VTextField.
   * Inherits all VTextField props, slots, and emits.
   *
   * Supports two modes:
   * 1. Default mode (no variant): Custom styled with external label, outlined variant, and compact density
   * 2. Standard mode (with variant): Full passthrough to VTextField
   *
   * @component
   * @extends VTextField
   * @example
   * <!-- Custom mode with external label -->
   * <UTextField label="Enter Name" v-model="name" />
   *
   * @example
   * <!-- Standard Vuetify mode -->
   * <UTextField variant="solo" label="Enter Name" v-model="name" />
   */
  // Import Vuetify components
  import { computed, useAttrs, useId } from 'vue';
  import { VLabel, VTextField } from 'vuetify/components';
  import './UTextField.scss';

  // Component options
  defineOptions({ name: 'UTextField', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();

  // Get attrs once for efficiency
  const attrs = useAttrs();

  // Generate unique ID for SSR-safe label association
  const generatedId = useId();

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
</script>

<template>
  <!-- Standard mode: Full Vuetify passthrough when variant is specified -->
  <v-text-field v-if="variant" v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-text-field>

  <!-- Custom mode: External label with outlined, compact styling when no variant -->
  <div v-else class="u-text-field-wrapper">
    <v-label v-if="label" :for="elementId" class="mb-1 text-body-2" :text="label" />

    <v-text-field v-bind="$attrs" :id="elementId" label="" variant="outlined" density="compact">
      <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </v-text-field>
  </div>
</template>

<style scoped lang="scss"></style>
