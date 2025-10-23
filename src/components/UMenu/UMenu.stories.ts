import type { Meta, StoryFn } from '@storybook/vue3';
import { UBtn, UList, UListItem, UMenu } from '@ultimate/core-ui/components';

interface ComponentArgs {
  location?: string;
  openOnHover?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Component/Containment/Menu',
  component: UMenu,
  parameters: {
    docs: {
      description: {
        component:
          'The UMenu component shows a menu at the position of the element used to activate it.',
      },
      import: `import { UMenu } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false && value !== 'default')
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `
<div class="d-flex justify-space-around">
  <UMenu ${attrsString}>
    <template v-slot:activator="{ props }">
      <UBtn color="primary" v-bind="props"> Activator slot </UBtn>
    </template>
    <UList>
      <UListItem v-for="(item, index) in items" :key="index" :value="index" :title="item.title">
      </UListItem>
    </UList>
  </UMenu>

  <UBtn color="primary">
    Parent activator

    <UMenu ${attrsString} activator="parent">
      <UList>
        <UListItem v-for="(item, index) in items" :key="index" :value="index" :title="item.title">
        </UListItem>
      </UList>
    </UMenu>
  </UBtn>

  <UBtn id="menu-activator" color="primary"> Sibling activator </UBtn>

  <UMenu ${attrsString} activator="#menu-activator">
    <UList>
      <UListItem v-for="(item, index) in items" :key="index" :value="index" :title="item.title">
      </UListItem>
    </UList>
  </UMenu>
</div>`;
        },
      },
    },
    Vuetify: {
      component: 'VMenu',
      content:
        "This component is built on top of Vuetify's VMenu component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/menus/',
    },
  },
  argTypes: {
    location: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'start', 'end', 'center'],
      description:
        "Menu can be offset relative to the activator by using the location prop. Options: 'top','bottom','start','end','center'.",
      table: {
        type: { summary: "'top' | 'bottom' | 'start' | 'end' | 'center'" },
        defaultValue: { summary: undefined },
      },
    },
    openOnHover: {
      name: 'open-on-hover',
      control: { type: 'boolean' },
      description:
        'Menus can be accessed using hover instead of clicking with the open-on-hover prop.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UMenu, UBtn, UList, UListItem },
  setup() {
    const items = [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
    ];

    return { args, items };
  },
  template: `
<div class="d-flex justify-space-around">
  <UMenu v-bind="args">
    <template v-slot:activator="{ props }">
      <UBtn color="primary" v-bind="props"> Activator slot </UBtn>
    </template>
    <UList>
      <UListItem v-for="(item, index) in items" :key="index" :value="index" :title="item.title">
      </UListItem>
    </UList>
  </UMenu>

  <UBtn color="primary">
    Parent activator

    <UMenu v-bind="args" activator="parent">
      <UList>
        <UListItem v-for="(item, index) in items" :key="index" :value="index" :title="item.title">
        </UListItem>
      </UList>
    </UMenu>
  </UBtn>

  <UBtn id="menu-activator" color="primary"> Sibling activator </UBtn>

  <UMenu v-bind="args" activator="#menu-activator">
    <UList>
      <UListItem v-for="(item, index) in items" :key="index" :value="index" :title="item.title">
      </UListItem>
    </UList>
  </UMenu>
</div>
  `,
});

Default.args = {} as ComponentArgs;
