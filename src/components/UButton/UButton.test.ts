import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import UButton from './UButton.vue';

describe('UButton', () => {
  it('renders slot content', () => {
    const wrapper = mount(UButton, { slots: { default: 'Click' } });
    expect(wrapper.text()).toBe('Click');
  });

  it('applies color prop', () => {
    const wrapper = mount(UButton, { props: { color: 'red' } });
    // use typed access to props
    expect(String(wrapper.props().color)).toBe('red');
  });
});
