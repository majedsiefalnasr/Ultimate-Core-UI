<script setup lang="ts">
  /**
   * Extended UFileInput component built on Vuetify's VFileInput.
   * Inherits all VFileInput props, slots, and emits.
   *
   * Supports two modes:
   * 1. Default mode (no variant): Custom styled with external label, outlined variant, and compact density
   * 2. Standard mode (with variant): Full passthrough to VFileInput
   *
   * @component
   * @extends VFileInput
   * @example
   * <!-- Custom mode with external label -->
   * <UFileInput label="Upload File" v-model="file" />
   *
   * @example
   * <!-- Standard Vuetify mode -->
   * <UFileInput variant="solo" label="Upload File" v-model="file" />
   */
  // Import Vuetify components
  import { computed, useAttrs, useId } from 'vue';
  import { VFileInput, VLabel } from 'vuetify/components';
  import './UFileInput.scss';

  // Component options
  defineOptions({ name: 'UFileInput', inheritAttrs: false });

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
  <v-file-input v-if="variant" v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-file-input>

  <!-- Custom mode: External label with outlined, compact styling when no variant -->
  <div v-else class="u-file-input-wrapper">
    <v-label v-if="label" :for="elementId" class="mb-1 text-body-2" :text="label" />

    <v-file-input v-bind="$attrs" :id="elementId" label="" variant="outlined" density="compact">
      <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </v-file-input>
  </div>
</template>

<style scoped lang="scss"></style>
