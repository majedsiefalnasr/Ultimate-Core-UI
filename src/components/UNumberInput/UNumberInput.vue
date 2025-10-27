<script setup lang="ts">
  /**
   * Extended UNumberInput component built on Vuetify's VNumberInput.
   * Inherits all VNumberInput props, slots, and emits.
   *
   * Supports two modes:
   * 1. Default mode (no variant): Custom styled with external label, outlined variant, and compact density
   * 2. Standard mode (with variant): Full passthrough to VNumberInput
   *
   * @component
   * @extends VNumberInput
   * @example
   * <!-- Custom mode with external label -->
   * <UNumberInput label="Enter Amount" v-model="amount" />
   *
   * @example
   * <!-- Standard Vuetify mode -->
   * <UNumberInput variant="solo" label="Enter Amount" v-model="amount" />
   */
  // Import Vuetify components
  import { computed, useAttrs, useId } from 'vue';
  import { VLabel, VNumberInput } from 'vuetify/components';
  import './UNumberInput.scss';

  // Component options
  defineOptions({ name: 'UNumberInput', inheritAttrs: false });

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
  <v-number-input v-if="variant" v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-number-input>

  <!-- Custom mode: External label with outlined, compact styling when no variant -->
  <div v-else class="u-number-input-wrapper">
    <v-label v-if="label" :for="elementId" class="mb-1 text-body-2" :text="label" />

    <v-number-input v-bind="$attrs" :id="elementId" label="" variant="outlined" density="compact">
      <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </v-number-input>
  </div>
</template>

<style scoped lang="scss"></style>
