<script setup lang="ts">
  /**
   * Extended UAutocomplete component built on Vuetify's VAutocomplete.
   * Inherits all VAutocomplete props, slots, and emits.
   *
   * Supports two modes:
   * 1. Default mode (no variant): Custom styled with external label, outlined variant, and compact density
   * 2. Standard mode (with variant): Full passthrough to VAutocomplete
   *
   * @component
   * @extends VAutocomplete
   */
  // Import Vuetify components
  import { computed, useAttrs, useId } from 'vue';
  import { VAutocomplete, VLabel } from 'vuetify/components';
  import './UAutocomplete.scss';

  // Component options
  defineOptions({ name: 'UAutocomplete', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();

  // Get attrs once for efficiency
  const attrs = useAttrs();

  // Computed property for variant - determines rendering mode
  const variant = computed(() => attrs.variant as string | undefined);

  // Computed property for label - used in custom mode
  const label = computed(() => attrs.label as string | undefined);

  // Computed property for element ID - ensures proper label association
  const elementId = computed<string>(() => {
    // Use provided ID or fallback to Vue's SSR-safe generated ID
    const providedId = attrs.id as string | undefined;

    if (!providedId) {
      // Generate unique ID for SSR-safe label association
      const generatedId = useId();
      return generatedId;
    }

    return providedId;
  });
</script>

<template>
  <!-- Standard mode: Full Vuetify passthrough when variant is specified -->
  <v-autocomplete v-if="variant" v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-autocomplete>

  <!-- Custom mode: External label with outlined, compact styling when no variant -->
  <div v-else class="u-autocomplete-wrapper">
    <v-label v-if="label" :for="elementId" class="mb-1 text-body-2" :text="label" />

    <v-autocomplete v-bind="$attrs" :id="elementId" label="" variant="outlined" density="compact">
      <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </v-autocomplete>
  </div>
</template>

<style scoped lang="scss"></style>
