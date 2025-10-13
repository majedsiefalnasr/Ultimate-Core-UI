import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import { UButton } from '../src';

import { vuetify } from './vuetify';

describe('package entry', () => {
  it('exports UButton and mounts', () => {
    const wrapper = mount(UButton as any, {
      global: { plugins: [vuetify] },
      slots: { default: 'OK' },
    });
    expect(wrapper.text()).toBe('OK');
  });
});
