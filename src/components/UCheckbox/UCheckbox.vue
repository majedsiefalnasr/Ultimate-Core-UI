<script setup lang="ts">
  /**
   * Extended UCheckbox component built on Vuetify's VCheckbox.
   * Inherits all VCheckbox props, slots, and emits.
   *
   * @component
   * @extends VCheckbox
   */
  // Import Vuetify's VCheckbox component (Base component)
  import { computed, useAttrs, useId } from 'vue';
  import { VCheckbox } from 'vuetify/components';
  import './UCheckbox.scss';

  // Component options
  defineOptions({ name: 'UCheckbox', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();

  // Get attrs to check for id
  const attrs = useAttrs();

  // Generate unique ID if not provided
  const generatedId = useId();

  // Compute final attributes with ID fallback
  const computedAttrs = computed(() => {
    const id = attrs.id as string | undefined;
    return {
      ...attrs,
      id: id && id.trim() !== '' ? id : generatedId,
    };
  });

  console.log('UCheckbox component initialized with ID:', computedAttrs.value.id);
</script>

<template>
  <v-checkbox v-bind="computedAttrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-checkbox>
</template>

<style scoped lang="scss"></style>
