/* eslint-disable import/order */

import { mount } from '@vue/test-utils';
import { vi } from 'vitest';
// Mock the vuetify components module so the imported VBtn inside UBtn.vue
// is replaced with a lightweight stub that provides props/emits shape.
vi.mock('vuetify/components', () => ({
  VBtn: {
    name: 'VBtn',
    props: {},
    emits: {},
    template: '<button v-bind="$attrs"><slot /></button>',
  },
}));

import { UBtn } from '@ultimate/core-ui/components';

describe('UBtn', () => {
  it('renders default slot', () => {
    const wrapper = mount(UBtn, { slots: { default: 'Click me' } });
    expect(wrapper.text()).toContain('Click me');
  });

  it('forwards attributes to the underlying VBtn', () => {
    const wrapper = mount(UBtn, { attrs: { 'aria-label': 'my-button' } });
    // the underlying VBtn stub renders a <button>, assert it received the attribute
    const btn = wrapper.find('button');
    expect(btn.attributes('aria-label')).toBe('my-button');
  });
});
