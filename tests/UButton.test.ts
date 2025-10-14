import { fireEvent, render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';

import UButton from '../src/components/core/button/UButton.vue';

describe('UButton', () => {
  it('renders default slot and emits click', async () => {
    const vuetify = createVuetify({ components });
    const { getByText, emitted } = render(UButton, {
      global: { plugins: [vuetify] },
      slots: { default: 'Press me' },
    });

    const btn = getByText('Press me');
    await fireEvent.click(btn);

    expect(emitted()).toHaveProperty('click');
  });
});
