<template>
  <VBtn v-bind="forwarded" @click="$emit('click', $event)">
    <slot name="icon" />
    <slot />
  </VBtn>
</template>

<script setup lang="ts">
  import { computed, useAttrs } from 'vue';

  /**
   * A thin, prefixed wrapper around Vuetify's next `VBtn` to match the library's `u` prefix.
   * Kept minimal and typed for library consumption.
   */

  const attrs = useAttrs() as Record<string, unknown>;

  // Keep the wrapper thin: forward all incoming attributes to the inner VBtn via
  // a computed `forwarded` object so we can map any library-specific aliases to
  // Vuetify's supported values at runtime.
  const forwarded = computed(() => {
    // shallow copy attrs to avoid mutating the original reactive attrs object
    const out: Record<string, unknown> = { ...attrs };

    // Map 'contained' (used in our stories / library terminology) to Vuetify's
    // supported variant. Vuetify's VBtn does not accept 'contained' and will
    // throw a validator error; map it to 'elevated' which closely matches the
    // intended appearance.
    if (typeof out.variant === 'string' && out.variant === 'contained') {
      out.variant = 'elevated';
    }

    return out;
  });

  // No explicit props declared here; we forward attrs to VBtn.

  /**
   * Emitted events:
   * - click: native click event forwarded from the inner VBtn
   */
  defineEmits<{
    (e: 'click', ev: MouseEvent): void;
  }>();
</script>

<style scoped>
  /* Minimal styling is delegated to Vuetify. Keep scoped file for future tweaks. */
</style>
