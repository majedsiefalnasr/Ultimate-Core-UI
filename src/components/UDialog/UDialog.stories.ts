import type { Meta, StoryFn } from '@storybook/vue3';
import {
  UAutocomplete,
  UBtn,
  UCard,
  UCardActions,
  UCardText,
  UCol,
  UContainer,
  UDivider,
  URadio,
  URadioGroup,
  URow,
  USelect,
  UTextField,
} from '@ultimate/core-ui/components';
import { computed, ref, shallowRef, watch } from 'vue';

import { UDialog } from './index';

interface ComponentArgs {
  modelValue?: boolean;
  width?: string | number;
  persistent?: boolean;
  transition?: 'dialog-top-transition' | 'dialog-bottom-transition' | undefined;
  nesting?: boolean;
  overflowed?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/Dialogs',
  component: UDialog,
  parameters: {
    docs: {
      description: {
        component:
          'The u-dialog component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.',
      },
      import: `import { UDialog } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          // Build attributes string from args
          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false)
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `<u-dialog${attrsString}>
  <template #activator="{ props: activatorProps }">
    <u-btn v-bind="activatorProps" text="Open Dialog" />
  </template>
  <template #default="{ isActive }">
    <u-card>
      <u-card-text class="text-h2 pa-12">
        Hello world!
      </u-card-text>
      <u-card-actions class="justify-end">
        <u-btn text="Close" @click="isActive.value = false" />
      </u-card-actions>
    </u-card>
  </template>
</u-dialog>`;
        },
      },
    },
    Primary: {
      description:
        'In this basic example we use the activator slot to render a button that is used to open the dialog. When using the activator slot it is important that you bind the props object from the slot (using v-bind) to the element that will activate the dialog. See the examples below for more ways of activating a dialog.',
    },
    Vuetify: {
      component: 'VDialog',
      content:
        "This component is built on top of Vuetify's VDialog component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/dialogs/',
    },
    api: {
      data: [
        {
          element: { title: 'v-dialog', link: 'https://vuetifyjs.com/en/api/v-dialog/' },
          description: 'Primary component',
        },
        {
          element: { title: 'v-overlay', link: 'https://vuetifyjs.com/en/api/v-overlay/' },
          description: 'Extended component',
        },
      ],
    },
    anatomy: {
      description:
        'The recommended components to use inside of a u-dialog are: u-card, u-list, and u-sheet',
      Image: '/images/stories/udialog.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The dialog’s content that animates from the activator',
        },
        {
          element: '2. Activator',
          description: 'The element that activates the dialog',
        },
      ],
    },
  },
  argTypes: {
    modelValue: {
      control: 'boolean',
      description:
        'Controls visibility via v-model (model-value). You can open/close the dialog by updating the bound value programmatically (no activator required).',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    width: {
      control: 'text',
      description: 'Optional width for dialog content area.',
      table: { type: { summary: 'string | number' } },
    },
    persistent: {
      control: 'boolean',
      description:
        'Persistent: Persistent dialogs are not dismissed when touching outside or pressing the esc key.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    transition: {
      control: { type: 'select' },
      options: ['dialog-top-transition', 'dialog-bottom-transition', undefined],
      description: 'Transitions: You can make the dialog appear from the top or the bottom.',
      table: {
        type: { summary: "'dialog-top-transition' | 'dialog-bottom-transition' | undefined" },
      },
    },
    nesting: {
      control: 'boolean',
      description: 'Nesting: Dialogs can be nested; you can open one dialog from another.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    overflowed: {
      control: 'boolean',
      description:
        'Overflowed: Modals that do not fit within the available window space will scroll the container.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UDialog, UBtn, UCard, UCardText, UCardActions },
  setup() {
    return { args };
  },
  template: `
    <u-dialog v-bind="args">
      <template v-slot:activator="{ props: activatorProps }">
        <u-btn
          v-bind="activatorProps"
          text="Open Dialog"
        ></u-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <u-card title="Dialog">
          <u-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </u-card-text>

          <u-card-actions>
            <u-spacer></u-spacer>

            <u-btn
              text="Close Dialog"
              @click="isActive.value = false"
            ></u-btn>
          </u-card-actions>
        </u-card>
      </template>
    </u-dialog>
  `,
});

Default.args = { maxWidth: '500' } as ComponentArgs;

export const VModel: StoryFn<ComponentArgs> = () => ({
  components: { UDialog, UBtn, UCard, UCardText, UCardActions },
  setup() {
    const dialog = ref(false);
    return { dialog };
  },
  template: `
    <div class="text-center pa-4">
      <u-btn @click="dialog = true">
        Open Dialog
      </u-btn>

      <u-dialog
        v-model="dialog"
        width="auto"
      >
        <u-card
          max-width="400"
          prepend-icon="hugeicons:refresh"
          text="Your application will relaunch automatically after the update is complete."
          title="Update in progress"
        >
          <template v-slot:actions>
            <u-btn
              class="ms-auto"
              text="Ok"
              @click="dialog = false"
            ></u-btn>
          </template>
        </u-card>
      </u-dialog>
    </div>
  `,
});

VModel.parameters = {
  docs: {
    description: {
      story:
        'You can also trigger a dialog by simply updating the v-model, without using either activator slot or prop.',
    },
    source: {
      code: `<template>
  <div class="text-center pa-4">
    <u-btn @click="dialog = true">
      Open Dialog
    </u-btn>

    <u-dialog v-model="dialog" width="auto">
      <u-card
        max-width="400"
        text="Your application will relaunch automatically after the update is complete."
        title="Update in progress"
      >
        <template #actions>
          <u-btn class="ms-auto" text="Ok" @click="dialog = false"></u-btn>
        </template>
      </u-card>
    </u-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref(false);
</script>`,
    },
  },
};

export const Persistent: StoryFn<ComponentArgs> = () => ({
  components: { UDialog, UBtn, UCard, UCardText, UCardActions },
  setup() {
    const dialog = ref(false);
    return { dialog };
  },
  template: `
    <div class="text-center pa-4">
      <u-dialog
        v-model="dialog"
        max-width="400"
        persistent
      >
        <template v-slot:activator="{ props: activatorProps }">
          <u-btn v-bind="activatorProps">
            Open Dialog
          </u-btn>
        </template>

        <u-card
          prepend-icon="hugeicons:location-01"
          text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
          title="Use Google's location service?"
        >
          <template v-slot:actions>
            <u-spacer></u-spacer>

            <u-btn @click="dialog = false">
              Disagree
            </u-btn>

            <u-btn @click="dialog = false">
              Agree
            </u-btn>
          </template>
        </u-card>
      </u-dialog>
    </div>
  `,
});

Persistent.parameters = {
  docs: {
    description: {
      story: 'Persistent dialogs are not dismissed when touching outside or pressing the esc key.',
    },
    source: {
      code: `<template>
    <div class="text-center pa-4">
      <u-dialog
        v-model="dialog"
        max-width="400"
        persistent
      >
        <template v-slot:activator="{ props: activatorProps }">
          <u-btn v-bind="activatorProps">
            Open Dialog
          </u-btn>
        </template>

        <u-card
          prepend-icon="hugeicons:location-01"
          text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
          title="Use Google's location service?"
        >
          <template v-slot:actions>
            <u-spacer></u-spacer>

            <u-btn @click="dialog = false">
              Disagree
            </u-btn>

            <u-btn @click="dialog = false">
              Agree
            </u-btn>
          </template>
        </u-card>
      </u-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref(false);
</script>`,
    },
  },
};

export const Transitions: StoryFn<ComponentArgs> = () => ({
  components: { UDialog, UBtn, UCard, UCardText, UContainer, URow, UCol },
  setup() {
    return {};
  },
  template: `
  <u-container>
    <u-row justify="space-around">
      <u-col cols="12" md="6">
        <u-dialog transition="dialog-bottom-transition" width="auto">
          <template #activator="{ props: activatorProps }">
            <u-btn v-bind="activatorProps" text="Transition from Bottom" block></u-btn>
          </template>
          <template #default="{ isActive }">
            <u-card>
              <u-card-text class="text-h2 pa-12">Hello world!</u-card-text>
              <u-card-actions class="justify-end">
                <u-btn text="Close" @click="isActive.value = false"></u-btn>
              </u-card-actions>
            </u-card>
          </template>
        </u-dialog>
      </u-col>

      <u-col cols="12" md="6">
        <u-dialog transition="dialog-top-transition" width="auto">
          <template #activator="{ props: activatorProps }">
            <u-btn v-bind="activatorProps" text="Transition from Top" block></u-btn>
          </template>
          <template #default="{ isActive }">
            <u-card>
              <u-card-text class="text-h2 pa-12">Hello world!</u-card-text>
              <u-card-actions class="justify-end">
                <u-btn text="Close" @click="isActive.value = false"></u-btn>
              </u-card-actions>
            </u-card>
          </template>
        </u-dialog>
      </u-col>
    </u-row>
  </u-container>
  `,
});

Transitions.parameters = {
  docs: {
    description: {
      story: 'You can make the dialog appear from the top or the bottom.',
    },
    source: {
      code: `<template>
  <u-container>
    <u-row justify="space-around">
      <u-col cols="12" md="6">
        <u-dialog transition="dialog-bottom-transition" width="auto">
          <template #activator="{ props: activatorProps }">
            <u-btn v-bind="activatorProps" text="Transition from Bottom" block></u-btn>
          </template>
          <template #default="{ isActive }">
            <u-card>
              <u-card-text class="text-h2 pa-12">Hello world!</u-card-text>
              <u-card-actions class="justify-end">
                <u-btn text="Close" @click="isActive.value = false"></u-btn>
              </u-card-actions>
            </u-card>
          </template>
        </u-dialog>
      </u-col>

      <u-col cols="12" md="6">
        <u-dialog transition="dialog-top-transition" width="auto">
          <template #activator="{ props: activatorProps }">
            <u-btn v-bind="activatorProps" text="Transition from Top" block></u-btn>
          </template>
          <template #default="{ isActive }">
            <u-card>
              <u-card-text class="text-h2 pa-12">Hello world!</u-card-text>
              <u-card-actions class="justify-end">
                <u-btn text="Close" @click="isActive.value = false"></u-btn>
              </u-card-actions>
            </u-card>
          </template>
        </u-dialog>
      </u-col>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const Nesting: StoryFn<ComponentArgs> = () => ({
  components: { UDialog, UBtn, UCard, UCardActions, UCardText },
  setup() {
    const dialog = shallowRef(false);
    const dialog2 = shallowRef(false);
    const dialog3 = shallowRef(false);

    return { dialog, dialog2, dialog3 };
  },
  template: `
    <div class="pa-4 text-center">
      <u-btn
        text="Open Dialog 1"
        @click="dialog = true"
      ></u-btn>

      <u-dialog
        v-model="dialog"
        max-width="480"
      >
        <u-card title="Dialog 1">
          <template v-slot:text>
            <u-btn
              class="my-2"
              text="Open Dialog 2"
              @click="dialog2 = true"
            ></u-btn>
          </template>

          <u-card-actions>
            <u-spacer></u-spacer>

            <u-btn
              text="Close"
              variant="text"
              @click="dialog = false"
            ></u-btn>
          </u-card-actions>
        </u-card>
      </u-dialog>

      <u-dialog
        v-model="dialog2"
        max-width="240"
      >
        <u-card title="Dialog 2">
          <template v-slot:text>
            <u-btn
              class="my-2"
              text="Open Dialog 3"
              @click="dialog3 = !dialog3"
            ></u-btn>
          </template>

          <u-card-actions>
            <u-spacer></u-spacer>

            <u-btn
              text="Close"
              variant="text"
              @click="dialog2 = false"
            ></u-btn>
          </u-card-actions>
        </u-card>
      </u-dialog>

      <u-dialog
        v-model="dialog3"
        width="auto"
      >
        <u-card title="Dialog 3">
          <u-card-actions>
            <u-spacer></u-spacer>

            <u-btn
              text="Close"
              variant="text"
              @click="dialog3 = false"
            ></u-btn>
          </u-card-actions>
        </u-card>
      </u-dialog>
    </div>
  `,
});

Nesting.parameters = {
  docs: {
    description: {
      story: 'Dialogs can be nested: you can open one dialog from another.',
    },
    source: {
      code: `<template>
  <div class="pa-4 text-center">
    <u-btn
      text="Open Dialog 1"
      @click="dialog = true"
    ></u-btn>

    <u-dialog
      v-model="dialog"
      max-width="480"
    >
      <u-card title="Dialog 1">
        <template v-slot:text>
          <u-btn
            class="my-2"
            text="Open Dialog 2"
            @click="dialog2 = true"
          ></u-btn>
        </template>

        <u-card-actions>
          <u-spacer></u-spacer>

          <u-btn
            text="Close"
            variant="text"
            @click="dialog = false"
          ></u-btn>
        </u-card-actions>
      </u-card>
    </u-dialog>

    <u-dialog
      v-model="dialog2"
      max-width="240"
    >
      <u-card title="Dialog 2">
        <template v-slot:text>
          <u-btn
            class="my-2"
            text="Open Dialog 3"
            @click="dialog3 = !dialog3"
          ></u-btn>
        </template>

        <u-card-actions>
          <u-spacer></u-spacer>

          <u-btn
            text="Close"
            variant="text"
            @click="dialog2 = false"
          ></u-btn>
        </u-card-actions>
      </u-card>
    </u-dialog>

    <u-dialog
      v-model="dialog3"
      width="auto"
    >
      <u-card title="Dialog 3">
        <u-card-actions>
          <u-spacer></u-spacer>

          <u-btn
            text="Close"
            variant="text"
            @click="dialog3 = false"
          ></u-btn>
        </u-card-actions>
      </u-card>
    </u-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialog1 = ref(false);
const dialog2 = ref(false);
const dialog3 = ref(false);
</script>`,
    },
  },
};

export const Overflowed: StoryFn<ComponentArgs> = () => ({
  components: { UDialog, UBtn, UCard, UCardText, UCardActions },
  setup() {
    return {};
  },
  template: `
    <div class="pa-4 text-center">
      <u-dialog max-width="800">
        <template v-slot:activator="{ props: activatorProps }">
          <u-btn
            v-bind="activatorProps"
            text="Open Dialog"
          ></u-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <u-card title="Use Google's location service?">
            <template v-slot:text>
              Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.

              <br>

              Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.

              <br>

              Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.

              <br>

              Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.
              Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.

              <br>

              Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.

              <br>

              Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.

              <br>

              Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.

              <br>

              Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.

              <br>

              Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
            </template>

            <u-card-actions>
              <u-spacer></u-spacer>

              <u-btn
                text="Disagree"
                variant="text"
                @click="isActive.value = false"
              ></u-btn>

              <u-btn
                color="surface-variant"
                text="Agree"
                variant="flat"
                @click="isActive.value = false"
              ></u-btn>
            </u-card-actions>
          </u-card>
        </template>
      </u-dialog>
    </div>
  `,
});

Overflowed.parameters = {
  docs: {
    description: {
      story: 'Modals that do not fit within the available window space will scroll the container.',
    },
    source: {
      code: `<template>
  <div class="pa-4 text-center">
    <u-dialog max-width="800">
      <template v-slot:activator="{ props: activatorProps }">
        <u-btn
          v-bind="activatorProps"
          text="Open Dialog"
        ></u-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <u-card title="Use Google's location service?">
          <template v-slot:text>
            Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.

            <br>

            Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.

            <br>

            Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.

            <br>

            Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.
            Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.

            <br>

            Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.

            <br>

            Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.

            <br>

            Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.

            <br>

            Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.

            <br>

            Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
          </template>

          <u-card-actions>
            <u-spacer></u-spacer>

            <u-btn
              text="Disagree"
              variant="text"
              @click="isActive.value = false"
            ></u-btn>

            <u-btn
              color="surface-variant"
              text="Agree"
              variant="flat"
              @click="isActive.value = false"
            ></u-btn>
          </u-card-actions>
        </u-card>
      </template>
    </u-dialog>
  </div>
</template>`,
    },
  },
};

export const Scrollable: StoryFn<ComponentArgs> = () => ({
  components: { UDialog, UBtn, UCard, UCardText, UCardActions, UDivider, URadioGroup, URadio },
  setup() {
    const dialog = ref('');
    return { dialog };
  },
  template: `
    <div class="pa-4 text-center">
      <u-dialog
        width="auto"
        scrollable
      >
        <template v-slot:activator="{ props: activatorProps }">
          <u-btn
            color="brown"
            prepend-icon="hugeicons:global"
            text="Select Country"
            variant="outlined"
            v-bind="activatorProps"
          ></u-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <u-card
            prepend-icon="hugeicons:global"
            title="Select Country"
          >
            <u-divider class="mt-3"></u-divider>

            <u-card-text class="px-4" style="height: 300px;">
              <u-radio-group
                v-model="dialog"
                messages="Select a Country from the radio group"
              >
                <u-radio
                  label="Bahamas, The"
                  value="bahamas"
                ></u-radio>

                <u-radio
                  label="Bahrain"
                  value="bahrain"
                ></u-radio>

                <u-radio
                  label="Bangladesh"
                  value="bangladesh"
                ></u-radio>

                <u-radio
                  label="Barbados"
                  value="barbados"
                ></u-radio>

                <u-radio
                  label="Belarus"
                  value="belarus"
                ></u-radio>

                <u-radio
                  label="Belgium"
                  value="belgium"
                ></u-radio>

                <u-radio
                  label="Belize"
                  value="belize"
                ></u-radio>

                <u-radio
                  label="Benin"
                  value="benin"
                ></u-radio>

                <u-radio
                  label="Bhutan"
                  value="bhutan"
                ></u-radio>

                <u-radio
                  label="Bolivia"
                  value="bolivia"
                ></u-radio>

                <u-radio
                  label="Bosnia and Herzegovina"
                  value="bosnia"
                ></u-radio>

                <u-radio
                  label="Botswana"
                  value="botswana"
                ></u-radio>

                <u-radio
                  label="Brazil"
                  value="brazil"
                ></u-radio>

                <u-radio
                  label="Brunei"
                  value="brunei"
                ></u-radio>

                <u-radio
                  label="Bulgaria"
                  value="bulgaria"
                ></u-radio>

                <u-radio
                  label="Burkina Faso"
                  value="burkina"
                ></u-radio>

                <u-radio
                  label="Burma"
                  value="burma"
                ></u-radio>

                <u-radio
                  label="Burundi"
                  value="burundi"
                ></u-radio>
              </u-radio-group>
            </u-card-text>

            <u-divider></u-divider>

            <u-card-actions>
              <u-btn
                text="Close"
                @click="isActive.value = false"
              ></u-btn>

              <u-spacer></u-spacer>

              <u-btn
                color="surface-variant"
                text="Save"
                variant="flat"
                @click="isActive.value = false"
              ></u-btn>
            </u-card-actions>
          </u-card>
        </template>
      </u-dialog>
    </div>
  `,
});

Scrollable.parameters = {
  docs: {
    description: {
      story: 'Example of a dialog with scrollable content.',
    },
    source: {
      code: `<template>
  <div class="pa-4 text-center">
    <u-dialog
      width="auto"
      scrollable
    >
      <template v-slot:activator="{ props: activatorProps }">
        <u-btn
          color="brown"
          prepend-icon="hugeicons:global"
          text="Select Country"
          variant="outlined"
          v-bind="activatorProps"
        ></u-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <u-card
          prepend-icon="hugeicons:global"
          title="Select Country"
        >
          <u-divider class="mt-3"></u-divider>

          <u-card-text class="px-4" style="height: 300px;">
            <u-radio-group
              v-model="dialog"
              messages="Select a Country from the radio group"
            >
              <u-radio
                label="Bahamas, The"
                value="bahamas"
              ></u-radio>

              <u-radio
                label="Bahrain"
                value="bahrain"
              ></u-radio>

              <u-radio
                label="Bangladesh"
                value="bangladesh"
              ></u-radio>

              <u-radio
                label="Barbados"
                value="barbados"
              ></u-radio>

              <u-radio
                label="Belarus"
                value="belarus"
              ></u-radio>

              <u-radio
                label="Belgium"
                value="belgium"
              ></u-radio>

              <u-radio
                label="Belize"
                value="belize"
              ></u-radio>

              <u-radio
                label="Benin"
                value="benin"
              ></u-radio>

              <u-radio
                label="Bhutan"
                value="bhutan"
              ></u-radio>

              <u-radio
                label="Bolivia"
                value="bolivia"
              ></u-radio>

              <u-radio
                label="Bosnia and Herzegovina"
                value="bosnia"
              ></u-radio>

              <u-radio
                label="Botswana"
                value="botswana"
              ></u-radio>

              <u-radio
                label="Brazil"
                value="brazil"
              ></u-radio>

              <u-radio
                label="Brunei"
                value="brunei"
              ></u-radio>

              <u-radio
                label="Bulgaria"
                value="bulgaria"
              ></u-radio>

              <u-radio
                label="Burkina Faso"
                value="burkina"
              ></u-radio>

              <u-radio
                label="Burma"
                value="burma"
              ></u-radio>

              <u-radio
                label="Burundi"
                value="burundi"
              ></u-radio>
            </u-radio-group>
          </u-card-text>

          <u-divider></u-divider>

          <u-card-actions>
            <u-btn
              text="Close"
              @click="isActive.value = false"
            ></u-btn>

            <u-spacer></u-spacer>

            <u-btn
              color="surface-variant"
              text="Save"
              variant="flat"
              @click="isActive.value = false"
            ></u-btn>
          </u-card-actions>
        </u-card>
      </template>
    </u-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>`,
    },
  },
};

export const Form: StoryFn<ComponentArgs> = () => ({
  components: {
    UDialog,
    UBtn,
    UCard,
    UCardText,
    UCardActions,
    UDivider,
    URow,
    UCol,
    UTextField,
    USelect,
    UAutocomplete,
  },
  setup() {
    const dialog = shallowRef(false);
    return { dialog };
  },
  template: `
    <div class="pa-4 text-center">
      <u-dialog
        v-model="dialog"
        max-width="600"
      >
        <template v-slot:activator="{ props: activatorProps }">
          <u-btn
            class="text-none font-weight-regular"
            prepend-icon="hugeicons:user"
            text="Edit Profile"
            variant="tonal"
            v-bind="activatorProps"
          ></u-btn>
        </template>

        <u-card
          prepend-icon="hugeicons:user"
          title="User Profile"
        >
          <u-card-text>
            <u-row dense>
              <u-col
                cols="12"
                md="4"
                sm="6"
              >
                <u-text-field
                  label="First name*"
                  required
                ></u-text-field>
              </u-col>

              <u-col
                cols="12"
                md="4"
                sm="6"
              >
                <u-text-field
                  hint="example of helper text only on focus"
                  label="Middle name"
                ></u-text-field>
              </u-col>

              <u-col
                cols="12"
                md="4"
                sm="6"
              >
                <u-text-field
                  hint="example of persistent helper text"
                  label="Last name*"
                  persistent-hint
                  required
                ></u-text-field>
              </u-col>

              <u-col
                cols="12"
                md="4"
                sm="6"
              >
                <u-text-field
                  label="Email*"
                  required
                ></u-text-field>
              </u-col>

              <u-col
                cols="12"
                md="4"
                sm="6"
              >
                <u-text-field
                  label="Password*"
                  type="password"
                  required
                ></u-text-field>
              </u-col>

              <u-col
                cols="12"
                md="4"
                sm="6"
              >
                <u-text-field
                  label="Confirm Password*"
                  type="password"
                  required
                ></u-text-field>
              </u-col>

              <u-col
                cols="12"
                sm="6"
              >
                <u-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></u-select>
              </u-col>

              <u-col
                cols="12"
                sm="6"
              >
                <u-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  auto-select-first
                  multiple
                ></u-autocomplete>
              </u-col>
            </u-row>

            <small class="text-caption text-medium-emphasis">*indicates required field</small>
          </u-card-text>

          <u-divider></u-divider>

          <u-card-actions>
            <u-spacer></u-spacer>

            <u-btn
              text="Close"
              variant="plain"
              @click="dialog = false"
            ></u-btn>

            <u-btn
              color="primary"
              text="Save"
              variant="tonal"
              @click="dialog = false"
            ></u-btn>
          </u-card-actions>
        </u-card>
      </u-dialog>
    </div>
  `,
});

Form.parameters = {
  docs: {
    description: {
      story: 'A simple example of a form in a dialog.',
    },
    source: {
      code: `<template>
  <div class="pa-4 text-center">
    <u-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <u-btn
          class="text-none font-weight-regular"
          prepend-icon="hugeicons:user"
          text="Edit Profile"
          variant="tonal"
          v-bind="activatorProps"
        ></u-btn>
      </template>

      <u-card
        prepend-icon="hugeicons:user"
        title="User Profile"
      >
        <u-card-text>
          <u-row dense>
            <u-col
              cols="12"
              md="4"
              sm="6"
            >
              <u-text-field
                label="First name*"
                required
              ></u-text-field>
            </u-col>

            <u-col
              cols="12"
              md="4"
              sm="6"
            >
              <u-text-field
                hint="example of helper text only on focus"
                label="Middle name"
              ></u-text-field>
            </u-col>

            <u-col
              cols="12"
              md="4"
              sm="6"
            >
              <u-text-field
                hint="example of persistent helper text"
                label="Last name*"
                persistent-hint
                required
              ></u-text-field>
            </u-col>

            <u-col
              cols="12"
              md="4"
              sm="6"
            >
              <u-text-field
                label="Email*"
                required
              ></u-text-field>
            </u-col>

            <u-col
              cols="12"
              md="4"
              sm="6"
            >
              <u-text-field
                label="Password*"
                type="password"
                required
              ></u-text-field>
            </u-col>

            <u-col
              cols="12"
              md="4"
              sm="6"
            >
              <u-text-field
                label="Confirm Password*"
                type="password"
                required
              ></u-text-field>
            </u-col>

            <u-col
              cols="12"
              sm="6"
            >
              <u-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></u-select>
            </u-col>

            <u-col
              cols="12"
              sm="6"
            >
              <u-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests"
                auto-select-first
                multiple
              ></u-autocomplete>
            </u-col>
          </u-row>

          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </u-card-text>

        <u-divider></u-divider>

        <u-card-actions>
          <u-spacer></u-spacer>

          <u-btn
            text="Close"
            variant="plain"
            @click="dialog = false"
          ></u-btn>

          <u-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="dialog = false"
          ></u-btn>
        </u-card-actions>
      </u-card>
    </u-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref(false);
</script>`,
    },
  },
};

export const Loader: StoryFn<ComponentArgs> = () => ({
  components: {
    UDialog,
  },
  setup() {
    const dialog = shallowRef(false);
    watch(dialog, (val) => {
      if (!val) return;
      setTimeout(() => (dialog.value = false), 4000);
    });

    return { dialog };
  },
  template: `
  <div class="pa-4 text-center">
    <u-btn
      :disabled="dialog"
      color="primary"
      icon="hugeicons:refresh"
      text="Start loading"
      @click="dialog = true"
    ></u-btn>

    <u-dialog
      v-model="dialog"
      max-width="320"
      persistent
    >
      <u-list
        class="py-2"
        color="primary"
        elevation="12"
        rounded="lg"
      >
        <u-list-item
          prepend-icon="$vuetify-outline"
          title="Refreshing Application..."
        >
          <template v-slot:prepend>
            <div class="pe-4">
              <u-icon color="primary" size="x-large"></u-icon>
            </div>
          </template>

          <template v-slot:append>
            <u-progress-circular
              color="primary"
              indeterminate="disable-shrink"
              size="16"
              width="2"
            ></u-progress-circular>
          </template>
        </u-list-item>
      </u-list>
    </u-dialog>
  </div>
  `,
});

Loader.parameters = {
  docs: {
    description: {
      story:
        'The u-dialog component makes it easy to create a customized loading experience for your application.',
    },
    source: {
      code: `<template>
  <div class="pa-4 text-center">
    <u-btn
      :disabled="dialog"
      color="primary"
      icon="hugeicons:refresh"
      text="Start loading"
      @click="dialog = true"
    ></u-btn>

    <u-dialog
      v-model="dialog"
      max-width="320"
      persistent
    >
      <u-list
        class="py-2"
        color="primary"
        elevation="12"
        rounded="lg"
      >
        <u-list-item
          prepend-icon="$vuetify-outline"
          title="Refreshing Application..."
        >
          <template v-slot:prepend>
            <div class="pe-4">
              <u-icon color="primary" size="x-large"></u-icon>
            </div>
          </template>

          <template v-slot:append>
            <u-progress-circular
              color="primary"
              indeterminate="disable-shrink"
              size="16"
              width="2"
            ></u-progress-circular>
          </template>
        </u-list-item>
      </u-list>
    </u-dialog>
  </div>
</template>

<script setup>
  import { shallowRef, watch } from 'vue'

  const dialog = shallowRef(false)
  watch(dialog, val => {
    if (!val) return
    setTimeout(() => (dialog.value = false), 4000)
  })
</script>`,
    },
  },
};

export const Fullscreen: StoryFn<ComponentArgs> = () => ({
  components: {
    UDialog,
  },
  setup() {
    const dialog = shallowRef(false);
    const notifications = shallowRef(false);
    const sound = shallowRef(true);
    const widgets = shallowRef(false);

    return { dialog, notifications, sound, widgets };
  },
  template: `
  <div class="text-center pa-4">
    <u-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      fullscreen
    >
      <template v-slot:activator="{ props: activatorProps }">
        <u-btn
          prepend-icon="hugeicons:settings-01"
          size="small"
          text="Settings"
          v-bind="activatorProps"
        ></u-btn>
      </template>

      <u-card>
        <u-toolbar>
          <u-btn
            icon="hugeicons:cancel-01"
            @click="dialog = false"
          ></u-btn>

          <u-toolbar-title>Settings</u-toolbar-title>

          <u-toolbar-items>
            <u-btn
              text="Save"
              variant="text"
              @click="dialog = false"
            ></u-btn>
          </u-toolbar-items>
        </u-toolbar>

        <u-list lines="two">
          <u-list-subheader>User Controls</u-list-subheader>

          <u-list-item
            subtitle="Set the content filtering level to restrict apps that can be downloaded"
            title="Content filtering"
            link
          ></u-list-item>

          <u-list-item
            subtitle="Require password for purchase or use password to restrict purchase"
            title="Password"
            link
          ></u-list-item>

          <u-divider></u-divider>

          <u-list-subheader>General</u-list-subheader>

          <u-list-item
            subtitle="Notify me about updates to apps or games that I downloaded"
            title="Notifications"
            @click="notifications = !notifications"
          >
            <template v-slot:prepend>
              <u-list-item-action start>
                <u-checkbox-btn v-model="notifications" color="primary"></u-checkbox-btn>
              </u-list-item-action>
            </template>
          </u-list-item>

          <u-list-item
            subtitle="Auto-update apps at any time. Data charges may apply"
            title="Sound"
            @click="sound = !sound"
          >
            <template v-slot:prepend>
              <u-list-item-action start>
                <u-checkbox-btn v-model="sound" color="primary"></u-checkbox-btn>
              </u-list-item-action>
            </template>
          </u-list-item>

          <u-list-item
            subtitle="Automatically add home screen widgets"
            title="Auto-add widgets"
            @click="widgets = !widgets"
          >
            <template v-slot:prepend>
              <u-list-item-action start>
                <u-checkbox-btn v-model="widgets" color="primary"></u-checkbox-btn>
              </u-list-item-action>
            </template>
          </u-list-item>
        </u-list>
      </u-card>
    </u-dialog>
  </div>
  `,
});

Fullscreen.parameters = {
  docs: {
    description: {
      story:
        'Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.',
    },
    source: {
      code: `<template>
  <div class="text-center pa-4">
    <u-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      fullscreen
    >
      <template v-slot:activator="{ props: activatorProps }">
        <u-btn
          prepend-icon="hugeicons:settings-01"
          size="small"
          text="Settings"
          v-bind="activatorProps"
        ></u-btn>
      </template>

      <u-card>
        <u-toolbar>
          <u-btn
            icon="hugeicons:cancel-01"
            @click="dialog = false"
          ></u-btn>

          <u-toolbar-title>Settings</u-toolbar-title>

          <u-toolbar-items>
            <u-btn
              text="Save"
              variant="text"
              @click="dialog = false"
            ></u-btn>
          </u-toolbar-items>
        </u-toolbar>

        <u-list lines="two">
          <u-list-subheader>User Controls</u-list-subheader>

          <u-list-item
            subtitle="Set the content filtering level to restrict apps that can be downloaded"
            title="Content filtering"
            link
          ></u-list-item>

          <u-list-item
            subtitle="Require password for purchase or use password to restrict purchase"
            title="Password"
            link
          ></u-list-item>

          <u-divider></u-divider>

          <u-list-subheader>General</u-list-subheader>

          <u-list-item
            subtitle="Notify me about updates to apps or games that I downloaded"
            title="Notifications"
            @click="notifications = !notifications"
          >
            <template v-slot:prepend>
              <u-list-item-action start>
                <u-checkbox-btn v-model="notifications" color="primary"></u-checkbox-btn>
              </u-list-item-action>
            </template>
          </u-list-item>

          <u-list-item
            subtitle="Auto-update apps at any time. Data charges may apply"
            title="Sound"
            @click="sound = !sound"
          >
            <template v-slot:prepend>
              <u-list-item-action start>
                <u-checkbox-btn v-model="sound" color="primary"></u-checkbox-btn>
              </u-list-item-action>
            </template>
          </u-list-item>

          <u-list-item
            subtitle="Automatically add home screen widgets"
            title="Auto-add widgets"
            @click="widgets = !widgets"
          >
            <template v-slot:prepend>
              <u-list-item-action start>
                <u-checkbox-btn v-model="widgets" color="primary"></u-checkbox-btn>
              </u-list-item-action>
            </template>
          </u-list-item>
        </u-list>
      </u-card>
    </u-dialog>
  </div>
</template>

<script setup>
  import { shallowRef } from 'vue'

  const dialog = shallowRef(false)
  const notifications = shallowRef(false)
  const sound = shallowRef(true)
  const widgets = shallowRef(false)
</script>`,
    },
  },
};

export const InviteDialog: StoryFn<ComponentArgs> = () => ({
  components: {
    UDialog,
  },
  template: `
  <div class="pa-4 text-center">
    <u-btn-group
      color="#b2d7ef"
      density="comfortable"
      rounded="pill"
      divided
    >
      <u-btn
        class="pe-2"
        prepend-icon="hugeicons:user-multiple-02"
        variant="flat"
      >
        <div class="text-none font-weight-regular">
          Share
        </div>

        <u-dialog activator="parent" max-width="500">
          <template v-slot:default="{ isActive }">
            <u-card rounded="lg">
              <u-card-title class="d-flex justify-space-between align-center">
                <div class="text-h5 text-medium-emphasis ps-2">
                  Invite John to connect
                </div>

                <u-btn
                  icon="hugeicons:cancel-01"
                  variant="text"
                  @click="isActive.value = false"
                ></u-btn>
              </u-card-title>

              <u-divider class="mb-4"></u-divider>

              <u-card-text>
                <div class="text-medium-emphasis mb-4">
                  Invite collaborators to your network and grow your connections.
                </div>

                <div class="mb-2">Message (optional)</div>

                <u-textarea
                  :counter="300"
                  class="mb-2"
                  rows="2"
                  variant="outlined"
                  persistent-counter
                ></u-textarea>

                <div class="text-overline mb-2">💎 PREMIUM</div>

                <div class="text-medium-emphasis mb-1">
                  Share with unlimited people and get more insights about your network. Try Premium Free for 30 days.
                </div>

                <u-btn
                  class="text-none font-weight-bold ms-n4"
                  color="primary"
                  text="Retry Premium Free"
                  variant="text"
                ></u-btn>
              </u-card-text>

              <u-divider class="mt-2"></u-divider>

              <u-card-actions class="my-2 d-flex justify-end">
                <u-btn
                  class="text-none"
                  rounded="xl"
                  text="Cancel"
                  @click="isActive.value = false"
                ></u-btn>

                <u-btn
                  class="text-none"
                  color="primary"
                  rounded="xl"
                  text="Send"
                  variant="flat"
                  @click="isActive.value = false"
                ></u-btn>
              </u-card-actions>
            </u-card>
          </template>
        </u-dialog>
      </u-btn>

      <u-btn
        size="small"
        icon
      >
        <u-icon icon="hugeicons:arrow-down-01"></u-icon>

        <u-menu
          activator="parent"
          location="bottom end"
          transition="fade-transition"
        >
          <u-list
            density="compact"
            min-width="250"
            rounded="lg"
            slim
          >
            <u-list-item
              prepend-icon="hugeicons:link-01"
              title="Copy link"
              link
            ></u-list-item>

            <u-divider class="my-2"></u-divider>

            <u-list-item min-height="24">
              <template u-slot:subtitle>
                <div class="text-caption">
                  Shared with John + 1 more
                </div>
              </template>
            </u-list-item>
          </u-list>
        </u-menu>
      </u-btn>
    </u-btn-group>
  </div>
  `,
});

InviteDialog.parameters = {
  docs: {
    description: {
      story: 'This example demonstrates a dialog that is used to invite users to a group.',
    },
    source: {
      code: `<template>
  <div class="pa-4 text-center">
    <u-btn-group
      color="#b2d7ef"
      density="comfortable"
      rounded="pill"
      divided
    >
      <u-btn
        class="pe-2"
        prepend-icon="hugeicons:user-multiple-02"
        variant="flat"
      >
        <div class="text-none font-weight-regular">
          Share
        </div>

        <u-dialog activator="parent" max-width="500">
          <template v-slot:default="{ isActive }">
            <u-card rounded="lg">
              <u-card-title class="d-flex justify-space-between align-center">
                <div class="text-h5 text-medium-emphasis ps-2">
                  Invite John to connect
                </div>

                <u-btn
                  icon="hugeicons:cancel-01"
                  variant="text"
                  @click="isActive.value = false"
                ></u-btn>
              </u-card-title>

              <u-divider class="mb-4"></u-divider>

              <u-card-text>
                <div class="text-medium-emphasis mb-4">
                  Invite collaborators to your network and grow your connections.
                </div>

                <div class="mb-2">Message (optional)</div>

                <u-textarea
                  :counter="300"
                  class="mb-2"
                  rows="2"
                  variant="outlined"
                  persistent-counter
                ></u-textarea>

                <div class="text-overline mb-2">💎 PREMIUM</div>

                <div class="text-medium-emphasis mb-1">
                  Share with unlimited people and get more insights about your network. Try Premium Free for 30 days.
                </div>

                <u-btn
                  class="text-none font-weight-bold ms-n4"
                  color="primary"
                  text="Retry Premium Free"
                  variant="text"
                ></u-btn>
              </u-card-text>

              <u-divider class="mt-2"></u-divider>

              <u-card-actions class="my-2 d-flex justify-end">
                <u-btn
                  class="text-none"
                  rounded="xl"
                  text="Cancel"
                  @click="isActive.value = false"
                ></u-btn>

                <u-btn
                  class="text-none"
                  color="primary"
                  rounded="xl"
                  text="Send"
                  variant="flat"
                  @click="isActive.value = false"
                ></u-btn>
              </u-card-actions>
            </u-card>
          </template>
        </u-dialog>
      </u-btn>

      <u-btn
        size="small"
        icon
      >
        <u-icon icon="hugeicons:arrow-down-01"></u-icon>

        <u-menu
          activator="parent"
          location="bottom end"
          transition="fade-transition"
        >
          <u-list
            density="compact"
            min-width="250"
            rounded="lg"
            slim
          >
            <u-list-item
              prepend-icon="hugeicons:link-01"
              title="Copy link"
              link
            ></u-list-item>

            <u-divider class="my-2"></u-divider>

            <u-list-item min-height="24">
              <template u-slot:subtitle>
                <div class="text-caption">
                  Shared with John + 1 more
                </div>
              </template>
            </u-list-item>
          </u-list>
        </u-menu>
      </u-btn>
    </u-btn-group>
  </div>
</template>`,
    },
  },
};

export const DataTable: StoryFn<ComponentArgs> = () => ({
  components: {
    UDialog,
  },
  setup() {
    // u-dialog
    const dialog = ref(false);
    const activator = ref<HTMLElement | null>(null);

    // u-confirm-edit
    const confirm = ref(null);

    const model = ref({
      name: '',
      progress: 0,
    });

    const selected = ref();

    const headers = [
      { title: 'ID', value: 'id' },
      { title: 'Name', value: 'name' },
      { title: 'Progress', value: 'progress' },
      { title: 'Actions', value: 'actions' },
    ];

    const items = ref([
      { id: 1, name: 'Tumwater', progress: 50 },
      { id: 2, name: 'Siena', progress: 73 },
      { id: 3, name: 'Cold Harbor', progress: 100 },
      { id: 4, name: 'Cairns', progress: 92 },
      { id: 5, name: 'Allentown', progress: 40 },
    ]);

    // Adjust progress bar color based on progress
    const color = computed(() => (progress: number) => {
      if (progress === 100) return 'green-lighten-2';
      if (progress >= 90) return 'green-lighten-4';
      if (progress >= 70) return 'light-green-lighten-2';
      if (progress >= 50) return 'light-green-lighten-4';
      return 'blue-grey';
    });

    // Register current, hovered row to activator
    // Preferrably called before edit()
    function register(event: MouseEvent) {
      activator.value = event.currentTarget as HTMLElement | null;
    }

    // Select & load data to be edited
    function edit(item: { id: number; name: string; progress: number }) {
      selected.value = item.id;
      model.value = { name: item.name, progress: item.progress };
    }

    // Update item data
    function save() {
      dialog.value = false;

      items.value = items.value.map((item) =>
        item.id === selected.value
          ? { ...item, name: model.value.name, progress: model.value.progress }
          : item
      );
    }

    function remove(id: number) {
      items.value = items.value.filter((item) => item.id !== id);
    }

    return {
      dialog,
      activator,
      confirm,
      model,
      selected,
      headers,
      items,
      color,
      register,
      edit,
      save,
      remove,
    };
  },
  template: `
  <u-data-table :headers="headers" :items="items">
    <template v-slot:item.progress="{ item }">
      <u-progress-linear
        :color="color(item.progress)"
        :model-value="item.progress"
        height="25"
      >
        <template v-slot:default="{ value }">
          <strong>{{ value }}%</strong>
        </template>
      </u-progress-linear>
    </template>

    <template v-slot:item.actions="{ item }">
      <u-btn
        variant="text"
        icon
        @click="edit(item)"
        @mouseenter="register($event)"
      >
        <u-icon>hugeicons:edit-02</u-icon>
      </u-btn>

      <u-btn variant="text" icon @click="remove(item.id)">
        <u-icon>hugeicons:delete-02</u-icon>
      </u-btn>
    </template>
  </u-data-table>

  <u-dialog v-model="dialog" :activator="activator" max-width="500">
    <u-confirm-edit
      ref="confirm"
      v-model="model"
      ok-text="save"
      @cancel="dialog = false"
      @save="save"
    >
      <template v-slot:default="{ model: proxyModel, actions }">
        <u-card title="Modify Data">
          <u-card-text>
            <u-text-field
              v-model="proxyModel.value.name"
              label="Modify name"
            ></u-text-field>

            <u-number-input
              v-model="proxyModel.value.progress"
              label="Modify progress"
              max="100"
              min="0"
            ></u-number-input>
          </u-card-text>

          <template v-slot:actions>
            <u-spacer></u-spacer>
            <component :is="actions"></component>
          </template>
        </u-card>
      </template>
    </u-confirm-edit>
  </u-dialog>
  `,
});

DataTable.parameters = {
  docs: {
    description: {
      story:
        'The activator prop allows you to use just one instance of the u-dialog component. For example, a row in a u-data-table can trigger the same dialog.',
    },
    source: {
      code: `<template>
  <u-data-table :headers="headers" :items="items">
    <template v-slot:item.progress="{ item }">
      <u-progress-linear
        :color="color(item.progress)"
        :model-value="item.progress"
        height="25"
      >
        <template v-slot:default="{ value }">
          <strong>{{ value }}%</strong>
        </template>
      </u-progress-linear>
    </template>

    <template v-slot:item.actions="{ item }">
      <u-btn
        variant="text"
        icon
        @click="edit(item)"
        @mouseenter="register($event)"
      >
        <u-icon>hugeicons:edit-02</u-icon>
      </u-btn>

      <u-btn variant="text" icon @click="remove(item.id)">
        <u-icon>hugeicons:delete-02</u-icon>
      </u-btn>
    </template>
  </u-data-table>

  <u-dialog v-model="dialog" :activator="activator" max-width="500">
    <u-confirm-edit
      ref="confirm"
      v-model="model"
      ok-text="save"
      @cancel="dialog = false"
      @save="save"
    >
      <template v-slot:default="{ model: proxyModel, actions }">
        <u-card title="Modify Data">
          <u-card-text>
            <u-text-field
              v-model="proxyModel.value.name"
              label="Modify name"
            ></u-text-field>

            <u-number-input
              v-model="proxyModel.value.progress"
              label="Modify progress"
              max="100"
              min="0"
            ></u-number-input>
          </u-card-text>

          <template v-slot:actions>
            <u-spacer></u-spacer>
            <component :is="actions"></component>
          </template>
        </u-card>
      </template>
    </u-confirm-edit>
  </u-dialog>
</template>

<script setup>
  // u-dialog
  const dialog = ref(false)
  const activator = ref(null)

  // u-confirm-edit
  const confirm = ref(null)

  const model = ref({
    name: '',
    progress: 0,
  })

  const selected = ref()

  const headers = [
    { title: 'ID', value: 'id' },
    { title: 'Name', value: 'name' },
    { title: 'Progress', value: 'progress' },
    { title: 'Actions', value: 'actions' },
  ]

  const items = ref([
    { id: 1, name: 'Tumwater', progress: 50 },
    { id: 2, name: 'Siena', progress: 73 },
    { id: 3, name: 'Cold Harbor', progress: 100 },
    { id: 4, name: 'Cairns', progress: 92 },
    { id: 5, name: 'Allentown', progress: 40 },
  ])

  // Adjust progress bar color based on progress
  const color = computed(() => progress => {
    if (progress === 100) return 'green-lighten-2'
    if (progress >= 90) return 'green-lighten-4'
    if (progress >= 70) return 'light-green-lighten-2'
    if (progress >= 50) return 'light-green-lighten-4'
    return 'blue-grey'
  })

  // Register current, hovered row to activator
  // Preferrably called before edit()
  function register (event) {
    activator.value = event.currentTarget
  }

  // Select & load data to be edited
  function edit (item) {
    selected.value = item.id
    model.value = { name: item.name, progress: item.progress }
  }

  // Update item data
  function save () {
    dialog.value = false

    items.value = items.value.map(item =>
      item.id === selected.value
        ? { ...item, name: model.value.name, progress: model.value.progress }
        : item
    )
  }

  function remove (id) {
    items.value = items.value.filter(item => item.id !== id)
  }
</script>`,
    },
  },
};
