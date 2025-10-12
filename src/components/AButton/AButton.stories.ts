import AButton from './AButton.vue'

export default {
  title: 'Components/AButton',
  component: AButton,
  argTypes: {
    color: {control: 'color'},
    variant: {control: 'select', options: ['flat', 'outlined', 'text']},
  },
}

export const Default = (args: any) => ({
  components: {AButton},
  setup() {
    return {args}
  },
  template: '<AButton v-bind="args">Click Me</AButton>',
})

export const Disabled = (args: any) => ({
  components: {AButton},
  setup() {
    return {args}
  },
  template: '<AButton v-bind="args" :disabled="true">Click Me</AButton>',
})
