<script setup lang="ts">
  /**
   * URadioGroup - radio group wrapper
   *
   * @component
   * @extends VRadioGroup
   */
  import { computed, useAttrs } from 'vue';
  import { VRadioGroup } from 'vuetify/components';

  import { useUniqueId } from '../../composables/useUniqueId';
  import './URadioGroup.scss';

  // Component options
  defineOptions({ name: 'URadioGroup', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();

  // Get attrs to check for id
  const attrs = useAttrs();

  // Generate unique ID if not provided
  const generatedId = useUniqueId();

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
  <v-radio-group v-bind="computedAttrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-radio-group>
</template>

<style scoped lang="scss"></style>
