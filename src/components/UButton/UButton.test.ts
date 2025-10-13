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
    expect((wrapper.props() as any).color).toBe('red');
  });
});
