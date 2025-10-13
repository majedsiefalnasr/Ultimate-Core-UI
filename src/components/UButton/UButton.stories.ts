import type {Meta, StoryObj} from '@storybook/vue3'
import UButton from './UButton.vue'

const meta: Meta<typeof UButton> = {
  title: 'Components/UButton',
  component: UButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      autodocs: true,
    },
    // 👇 These values will be picked up by the custom docs page
    bootstrapComponent: 'BButton',
    VuetifyComponent: 'VBtn',
  },
  argTypes: {
    color: {control: 'color'},
    variant: {control: 'select', options: ['flat', 'outlined', 'text']},
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: '#389d74',
    variant: 'flat',
  },
  render: args => ({
    components: {UButton},
    setup() {
      return {args}
    },
    template: `<UButton v-bind="args">Click Me</UButton>`,
  }),
}

export const Disabled: Story = {
  args: {
    color: '#389d74',
    variant: 'flat',
  },
  render: args => ({
    components: {UButton},
    setup() {
      return {args}
    },
    template: `<UButton v-bind="args" :disabled="true">Click Me</UButton>`,
  }),
}
