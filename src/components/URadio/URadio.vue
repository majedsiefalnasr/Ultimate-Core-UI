<script setup lang="ts">
  /**
   * URadio - radio input wrapper
   *
   * @component
   * @extends VRadio
   * @example
   * <URadio value="a" />
   */
  import { computed, useAttrs, useId } from 'vue';
  import { VRadio } from 'vuetify/components';
  import './URadio.scss';

  // Component options
  defineOptions({ name: 'URadio', inheritAttrs: false });

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
</script>

<template>
  <v-radio v-bind="computedAttrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-radio>
</template>

<style scoped lang="scss"></style>
