import {mount} from '@vue/test-utils'
import {describe, expect, it} from 'vitest'
import AButton from './AButton.vue'

describe('AButton', () => {
  it('renders slot content', () => {
    const wrapper = mount(AButton, {slots: {default: 'Click'}})
    expect(wrapper.text()).toBe('Click')
  })

  it('applies color prop', () => {
    const wrapper = mount(AButton, {props: {color: 'red'}})
    expect((wrapper.props() as any).color).toBe('red')
  })
})
