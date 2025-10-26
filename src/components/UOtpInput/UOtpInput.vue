<script setup lang="ts">
  /**
   * UOtpInput - one-time password input wrapper
   *
   * @component
   * @extends VOtpInput
   */
  import { VOtpInput } from 'vuetify/components';
  import './UOtpInput.scss';

  // Component options
  defineOptions({ name: 'UOtpInput', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-otp-input v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-otp-input>
</template>

<style scoped lang="scss"></style>
