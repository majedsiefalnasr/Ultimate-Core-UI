import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, onBeforeUnmount, ref, shallowRef, watch } from 'vue';
import { useHotkey } from 'vuetify';

import {
  UAlert,
  UBtn,
  UCard,
  UCardText,
  UChip,
  UCol,
  UContainer,
  UDivider,
  URow,
  USlider,
  USwitch,
  UTable,
  UTextField,
} from '../index';

import { UHotkey } from './index';

interface ComponentArgs {
  keys?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/Hotkeys',
  component: UHotkey,
  parameters: {
    docs: {
      description: {
        component:
          'Provides a simple and powerful way to register keyboard shortcuts that work across different platforms and input contexts.',
      },
      import: `import { UHotkey, useHotkey } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false)
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `<template>
  <span>Current hotkey:</span>
  <u-hotkey${attrsString} />
  <pre>log: {{ log }}</pre>
</template>

<script setup>
  import { shallowRef } from 'vue'
  import { useHotkey } from 'vuetify'

  const log = shallowRef('')

  function onHotkey () {
    log.value += '\\n- Hotkey pressed'
  }

  useHotkey('${args.keys}', onHotkey, {
    sequenceTimeout: 2000,
  })
</script>`;
        },
      },
    },
    Vuetify: {
      component: 'VHotkey',
      content:
        'Provides a simple and powerful way to register keyboard shortcuts that work across different platforms and input contexts.',
      link: 'https://vuetifyjs.com/en/components/hotkeys/',
    },
    Primary: {
      description:
        'Provides a simple and powerful way to register keyboard shortcuts that work across different platforms and input contexts.',
    },
    api: {
      data: [
        {
          element: { title: 'useHotkey', link: 'https://vuetifyjs.com/en/api/use-hotkey/' },
          description: 'The useHotkey composable',
        },
      ],
    },
  },
  argTypes: {
    keys: {
      control: 'text',
      description: 'The keyboard shortcut keys to display',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UHotkey },
  setup() {
    const log = shallowRef('');

    function onHotkey() {
      log.value += '\n- Hotkey pressed';
    }

    useHotkey(args.keys, onHotkey, {
      sequenceTimeout: 2000,
    });

    return { args, log };
  },
  template: `
    <div>
      <span>Current hotkey:</span>
      <u-hotkey v-bind="args" />
      <pre>log: {{ log }}</pre>
    </div>
  `,
});

Default.args = {
  keys: 'cmd+b',
} as ComponentArgs;

export const UseHotkey: StoryFn<ComponentArgs> = (args) => ({
  components: { UContainer, URow, UCol, UCard, UCardText, UTable, UHotkey, UDivider, UBtn },
  setup() {
    const messages = ref<Array<{ id: number; text: string; time: string }>>([]);

    const addMessage = (text: string) => {
      messages.value.push({
        id: Date.now(),
        text,
        time: new Date().toLocaleTimeString(),
      });

      if (messages.value.length > 5) {
        messages.value = messages.value.slice(-5);
      }
    };

    const clearMessages = () => {
      messages.value = [];
    };

    useHotkey('cmd+s', () => {
      addMessage('💾 Document saved!');
    });

    useHotkey('ctrl+z', () => {
      addMessage('↶ Action undone!');
    });

    return { args, messages, clearMessages };
  },
  template: `
    <u-container>
      <u-row>
        <u-col cols="12">
          <u-card>
            <u-card-text>
              <p class="text-body-2 mb-4">
                Press the keyboard shortcuts below to trigger actions:
              </p>

              <u-table>
                <thead>
                  <tr>
                    <th>Hotkey</th>
                    <th>Action</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><u-hotkey keys="cmd+s"></u-hotkey></td>
                    <td>Save Document</td>
                    <td>Cross-platform save shortcut</td>
                  </tr>
                  <tr>
                    <td><u-hotkey keys="ctrl+z"></u-hotkey></td>
                    <td>Undo Action</td>
                    <td>Standard undo shortcut</td>
                  </tr>
                </tbody>
              </u-table>

              <u-divider class="my-4"></u-divider>

              <div class="activity-log pa-3 border rounded">
                <h4 class="text-subtitle-1 mb-2">Activity Log:</h4>
                <div v-if="messages.length === 0" class="text-grey">
                  No hotkeys triggered yet...
                </div>
                <div v-for="message in messages" :key="message.id" class="text-body-2 mb-1">
                  <span class="text-grey text-caption">{{ message.time }}</span> - {{ message.text }}
                </div>
                <u-btn v-if="messages.length > 0" class="mt-2" size="small" @click="clearMessages">
                  Clear Log
                </u-btn>
              </div>
            </u-card-text>
          </u-card>
        </u-col>
      </u-row>
    </u-container>
  `,
});

UseHotkey.args = {} as ComponentArgs;

UseHotkey.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <u-row>
      <u-col cols="12">
        <u-card>
          <u-card-text>
            <p class="text-body-2 mb-4">
              Press the keyboard shortcuts below to trigger actions:
            </p>

            <u-table>
              <thead>
                <tr>
                  <th>Hotkey</th>
                  <th>Action</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><u-hotkey keys="cmd+s"></u-hotkey></td>
                  <td>Save Document</td>
                  <td>Cross-platform save shortcut</td>
                </tr>
                <tr>
                  <td><u-hotkey keys="ctrl+z"></u-hotkey></td>
                  <td>Undo Action</td>
                  <td>Standard undo shortcut</td>
                </tr>
              </tbody>
            </u-table>

            <u-divider class="my-4"></u-divider>

            <div class="activity-log pa-3 border rounded">
              <h4 class="text-subtitle-1 mb-2">Activity Log:</h4>
              <div v-if="messages.length === 0" class="text-grey">
                No hotkeys triggered yet...
              </div>
              <div v-for="message in messages" :key="message.id" class="text-body-2 mb-1">
                <span class="text-grey text-caption">{{ message.time }}</span> - {{ message.text }}
              </div>
              <u-btn v-if="messages.length > 0" class="mt-2" size="small" @click="clearMessages">
                Clear Log
              </u-btn>
            </div>
          </u-card-text>
        </u-card>
      </u-col>
    </u-row>
  </u-container>
</template>
<script setup>
  import { ref } from 'vue'
  import { useHotkey } from 'vuetify'

  const messages = ref([])

  const addMessage = text => {
    messages.value.push({
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString(),
    })

    if (messages.value.length > 5) {
      messages.value = messages.value.slice(-5)
    }
  }

  const clearMessages = () => {
    messages.value = []
  }

  useHotkey('cmd+s', () => {
    addMessage('💾 Document saved!')
  })

  useHotkey('ctrl+z', () => {
    addMessage('↶ Action undone!')
  })
</script>`,
    },
    description: {
      story: 'The useHotkey composable provides keyboard shortcut functionality.',
    },
  },
};

export const KeySequences: StoryFn<ComponentArgs> = (args) => ({
  components: {
    UContainer,
    URow,
    UCol,
    UCard,
    UCardText,
    UTable,
    UHotkey,
    UAlert,
    USlider,
    UDivider,
    UBtn,
  },
  setup() {
    const messages = ref<Array<{ id: number; text: string; time: string }>>([]);
    const sequenceTimeout = ref(2000);
    const cleanupFunctions = ref<Array<() => void>>([]);

    const addMessage = (text: string) => {
      messages.value.push({
        id: Date.now(),
        text,
        time: new Date().toLocaleTimeString(),
      });

      if (messages.value.length > 8) {
        messages.value = messages.value.slice(-8);
      }
    };

    const clearMessages = () => {
      messages.value = [];
    };

    const setupSequences = () => {
      cleanupFunctions.value.forEach((cleanup) => cleanup());
      cleanupFunctions.value = [];

      cleanupFunctions.value.push(
        useHotkey(
          'ctrl+x-p',
          () => {
            addMessage('🎨 Command Palette opened!');
          },
          { sequenceTimeout: sequenceTimeout.value }
        )
      );

      cleanupFunctions.value.push(
        useHotkey(
          'g-g',
          () => {
            addMessage('⬆️ Navigated to top!');
          },
          { sequenceTimeout: sequenceTimeout.value }
        )
      );

      cleanupFunctions.value.push(
        useHotkey(
          'ctrl+x-ctrl+s',
          () => {
            addMessage('💾 File saved (Emacs style)!');
          },
          { sequenceTimeout: sequenceTimeout.value }
        )
      );
    };

    const updateTimeout = () => {
      setupSequences();
    };

    setupSequences();

    onBeforeUnmount(() => {
      cleanupFunctions.value.forEach((cleanup) => cleanup());
    });

    return { args, messages, sequenceTimeout, clearMessages, updateTimeout };
  },
  template: `
    <u-container>
      <u-row>
        <u-col cols="12">
          <u-card>
            <u-card-text>
              <p class="text-body-2 mb-4">
                Key sequences require pressing keys in order within the timeout period.
                Try the sequences below:
              </p>

              <u-table>
                <thead>
                  <tr>
                    <th>Hotkey</th>
                    <th>Action</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><u-hotkey keys="ctrl+x-p"></u-hotkey></td>
                    <td>Command Palette</td>
                    <td>Press Ctrl+X, then P (within timeout)</td>
                  </tr>
                  <tr>
                    <td><u-hotkey keys="g-g"></u-hotkey></td>
                    <td>Go to Top</td>
                    <td>Press G, then G (Vim-style navigation)</td>
                  </tr>
                  <tr>
                    <td><u-hotkey keys="ctrl+x-ctrl+s"></u-hotkey></td>
                    <td>Save File</td>
                    <td>Press Ctrl+X, then Ctrl+S (Emacs-style)</td>
                  </tr>
                </tbody>
              </u-table>

              <u-alert class="my-4" color="info" variant="tonal">
                <template v-slot:title>Sequence Timeout</template>
                You have {{ sequenceTimeout }}ms to complete each sequence.
                If you wait too long, the sequence will reset.
              </u-alert>

              <u-slider
                v-model="sequenceTimeout"
                :label="\`Sequence Timeout (\${sequenceTimeout}ms)\`"
                class="mb-4"
                max="3000"
                min="500"
                step="100"
                thumb-label
                @update:model-value="updateTimeout"
              >
              </u-slider>

              <u-divider class="my-4"></u-divider>

              <div class="activity-log pa-3 border rounded">
                <h4 class="text-subtitle-1 mb-2">Activity Log:</h4>
                <div v-if="messages.length === 0" class="text-grey">
                  No sequences triggered yet...
                </div>
                <div v-for="message in messages" :key="message.id" class="text-body-2 mb-1">
                  <span class="text-grey text-caption">{{ message.time }}</span> - {{ message.text }}
                </div>
                <u-btn v-if="messages.length > 0" class="mt-2" size="small" @click="clearMessages">
                  Clear Log
                </u-btn>
              </div>
            </u-card-text>
          </u-card>
        </u-col>
      </u-row>
    </u-container>
  `,
});

KeySequences.args = {} as ComponentArgs;

KeySequences.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <!-- Story content with key sequences demo -->
  </u-container>
</template>
<script setup>
  import { onBeforeUnmount, ref } from 'vue'
  import { useHotkey } from 'vuetify'

  const messages = ref([])
  const sequenceTimeout = ref(2000)
  const cleanupFunctions = ref([])

  const setupSequences = () => {
    cleanupFunctions.value.forEach(cleanup => cleanup())
    cleanupFunctions.value = []

    cleanupFunctions.value.push(
      useHotkey('ctrl+x-p', () => {
        addMessage('🎨 Command Palette opened!')
      }, { sequenceTimeout: sequenceTimeout.value })
    )
  }

  setupSequences()

  onBeforeUnmount(() => {
    cleanupFunctions.value.forEach(cleanup => cleanup())
  })
</script>`,
    },
    description: {
      story:
        'Create multi-step keyboard shortcuts by separating keys with dashes. Users must press keys in sequence within the timeout period.',
    },
  },
};

export const PlatformAwareness: StoryFn<ComponentArgs> = (args) => ({
  components: {
    UContainer,
    URow,
    UCol,
    UCard,
    UCardText,
    UAlert,
    UTable,
    UHotkey,
    UDivider,
    UBtn,
  },
  setup() {
    const messages = ref<Array<{ id: number; text: string; time: string }>>([]);

    const isMac = computed(() => {
      return typeof navigator !== 'undefined' && /macintosh/i.test(navigator.userAgent);
    });

    const platformName = computed(() => {
      return isMac.value ? 'macOS' : 'Windows/Linux';
    });

    const userAgent = computed(() => {
      return typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown';
    });

    const addMessage = (text: string) => {
      messages.value.push({
        id: Date.now(),
        text,
        time: new Date().toLocaleTimeString(),
      });

      if (messages.value.length > 6) {
        messages.value = messages.value.slice(-6);
      }
    };

    const clearMessages = () => {
      messages.value = [];
    };

    useHotkey('cmd+c', () => {
      addMessage(`📋 Copy action (${isMac.value ? 'Cmd' : 'Ctrl'}+C)`);
    });

    useHotkey('cmd+v', () => {
      addMessage(`📄 Paste action (${isMac.value ? 'Cmd' : 'Ctrl'}+V)`);
    });

    useHotkey('cmd+shift+z', () => {
      addMessage(`↷ Redo action (${isMac.value ? 'Cmd+Shift' : 'Ctrl+Shift'}+Z)`);
    });

    useHotkey('ctrl+a', () => {
      addMessage('🔘 Select All (explicit Ctrl+A)');
    });

    useHotkey('meta+f', () => {
      addMessage(`🔍 Find in Page (${isMac.value ? 'Cmd' : 'Win'}+F)`);
    });

    return { args, messages, isMac, platformName, userAgent, clearMessages };
  },
  template: `
    <u-container>
      <u-row>
        <u-col cols="12">
          <u-card>
            <u-card-text>
              <u-alert class="mb-4" color="info" variant="tonal">
                <template v-slot:title>Current Platform: {{ platformName }}</template>
                The useHotkey composable automatically adapts to your platform.
              </u-alert>

              <p class="text-body-2 mb-4">
                Try the hotkeys below to see how they adapt to your platform:
              </p>

              <u-row>
                <u-col cols="12">
                  <h4 class="text-subtitle-1 mb-3">Available Hotkeys</h4>
                  <u-table>
                    <thead>
                      <tr>
                        <th>Hotkey</th>
                        <th>Action</th>
                        <th>Platform Behavior</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><u-hotkey keys="cmd+c"></u-hotkey></td>
                        <td>Copy</td>
                        <td>{{ isMac ? '⌘ on Mac' : 'Ctrl on PC' }}</td>
                      </tr>
                      <tr>
                        <td><u-hotkey keys="cmd+v"></u-hotkey></td>
                        <td>Paste</td>
                        <td>{{ isMac ? '⌘ on Mac' : 'Ctrl on PC' }}</td>
                      </tr>
                      <tr>
                        <td><u-hotkey keys="cmd+shift+z"></u-hotkey></td>
                        <td>Redo</td>
                        <td>{{ isMac ? '⌘⇧ on Mac' : 'Ctrl+Shift on PC' }}</td>
                      </tr>
                    </tbody>
                  </u-table>
                </u-col>
              </u-row>

              <u-divider class="my-4"></u-divider>

              <div class="activity-log pa-3 border rounded">
                <h4 class="text-subtitle-1 mb-2">Activity Log:</h4>
                <div v-if="messages.length === 0" class="text-grey">
                  No platform-aware hotkeys triggered yet...
                </div>
                <div v-for="message in messages" :key="message.id" class="text-body-2 mb-1">
                  <span class="text-grey text-caption">{{ message.time }}</span> - {{ message.text }}
                </div>
                <u-btn v-if="messages.length > 0" class="mt-2" size="small" @click="clearMessages">
                  Clear Log
                </u-btn>
              </div>
            </u-card-text>
          </u-card>
        </u-col>
      </u-row>
    </u-container>
  `,
});

PlatformAwareness.args = {} as ComponentArgs;

PlatformAwareness.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <!-- Platform-aware hotkeys demo -->
  </u-container>
</template>
<script setup>
  import { computed, ref } from 'vue'
  import { useHotkey } from 'vuetify'

  const isMac = computed(() => {
    return typeof navigator !== 'undefined' && /macintosh/i.test(navigator.userAgent)
  })

  useHotkey('cmd+c', () => {
    addMessage(\`📋 Copy action (\${isMac.value ? 'Cmd' : 'Ctrl'}+C)\`)
  })
</script>`,
    },
    description: {
      story:
        'The composable automatically handles platform differences. Use cmd for cross-platform compatibility or specific modifiers for platform-specific behavior.',
    },
  },
};

export const ReactiveHotkeys: StoryFn<ComponentArgs> = (args) => ({
  components: {
    UContainer,
    URow,
    UCol,
    UCard,
    UCardText,
    UTextField,
    USwitch,
    UBtn,
    UTable,
    UHotkey,
    UChip,
    UDivider,
  },
  setup() {
    const messages = ref<Array<{ id: number; text: string; time: string }>>([]);
    const saveHotkey = ref('cmd+s');
    const undoHotkey = ref('cmd+z');
    const customHotkey = ref('alt+shift+x');
    const hotkeyEnabled = ref(true);

    const activeSaveHotkey = computed(() => (hotkeyEnabled.value ? saveHotkey.value : undefined));
    const activeUndoHotkey = computed(() => (hotkeyEnabled.value ? undoHotkey.value : undefined));
    const activeCustomHotkey = computed(() =>
      hotkeyEnabled.value ? customHotkey.value : undefined
    );

    const addMessage = (text: string) => {
      messages.value.push({
        id: Date.now(),
        text,
        time: new Date().toLocaleTimeString(),
      });

      if (messages.value.length > 8) {
        messages.value = messages.value.slice(-8);
      }
    };

    const clearMessages = () => {
      messages.value = [];
    };

    const resetToDefaults = () => {
      saveHotkey.value = 'cmd+s';
      undoHotkey.value = 'cmd+z';
      customHotkey.value = 'alt+shift+x';
      hotkeyEnabled.value = true;
      addMessage('🔄 Reset hotkeys to defaults');
    };

    useHotkey(activeSaveHotkey, () => {
      addMessage(`💾 Save triggered with: ${saveHotkey.value}`);
    });

    useHotkey(activeUndoHotkey, () => {
      addMessage(`↶ Undo triggered with: ${undoHotkey.value}`);
    });

    useHotkey(activeCustomHotkey, () => {
      addMessage(`⚡ Custom action triggered with: ${customHotkey.value}`);
    });

    watch([saveHotkey, undoHotkey, customHotkey, hotkeyEnabled], () => {
      if (hotkeyEnabled.value) {
        addMessage('⚙️ Hotkey configuration updated');
      } else {
        addMessage('⏸️ Hotkeys disabled');
      }
    });

    return {
      args,
      messages,
      saveHotkey,
      undoHotkey,
      customHotkey,
      hotkeyEnabled,
      clearMessages,
      resetToDefaults,
    };
  },
  template: `
    <u-container>
      <u-row>
        <u-col cols="12">
          <u-card>
            <u-card-text>
              <p class="text-body-2 mb-4">
                Hotkey combinations can be reactive, allowing you to change them dynamically.
                Try changing the hotkey combinations below:
              </p>

              <u-row>
                <u-col cols="12" md="6">
                  <u-text-field
                    v-model="saveHotkey"
                    class="mb-3"
                    hint="e.g., cmd+s, ctrl+shift+s"
                    label="Save Hotkey"
                    persistent-hint
                  ></u-text-field>

                  <u-text-field
                    v-model="undoHotkey"
                    class="mb-3"
                    hint="e.g., cmd+z, ctrl+z"
                    label="Undo Hotkey"
                    persistent-hint
                  ></u-text-field>

                  <u-text-field
                    v-model="customHotkey"
                    class="mb-3"
                    hint="e.g., alt+shift+x, f5"
                    label="Custom Action Hotkey"
                    persistent-hint
                  ></u-text-field>

                  <u-switch
                    v-model="hotkeyEnabled"
                    class="mb-3"
                    label="Enable hotkeys"
                  ></u-switch>
                </u-col>

                <u-col cols="12" md="6">
                  <h4 class="text-subtitle-1 mb-3">Current Active Hotkeys</h4>
                  <u-table density="compact">
                    <thead>
                      <tr>
                        <th>Hotkey</th>
                        <th>Action</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><u-hotkey :keys="saveHotkey"></u-hotkey></td>
                        <td>Save Document</td>
                        <td>
                          <u-chip :color="hotkeyEnabled ? 'success' : 'grey'" size="small">
                            {{ hotkeyEnabled ? 'Active' : 'Disabled' }}
                          </u-chip>
                        </td>
                      </tr>
                      <tr>
                        <td><u-hotkey :keys="undoHotkey"></u-hotkey></td>
                        <td>Undo Action</td>
                        <td>
                          <u-chip :color="hotkeyEnabled ? 'success' : 'grey'" size="small">
                            {{ hotkeyEnabled ? 'Active' : 'Disabled' }}
                          </u-chip>
                        </td>
                      </tr>
                      <tr>
                        <td><u-hotkey :keys="customHotkey"></u-hotkey></td>
                        <td>Custom Action</td>
                        <td>
                          <u-chip :color="hotkeyEnabled ? 'success' : 'grey'" size="small">
                            {{ hotkeyEnabled ? 'Active' : 'Disabled' }}
                          </u-chip>
                        </td>
                      </tr>
                    </tbody>
                  </u-table>

                  <u-btn class="mt-3" @click="resetToDefaults">
                    Reset to Defaults
                  </u-btn>
                </u-col>
              </u-row>

              <u-divider class="my-4"></u-divider>

              <div class="activity-log pa-3 border rounded">
                <h4 class="text-subtitle-1 mb-2">Activity Log:</h4>
                <div v-if="messages.length === 0" class="text-grey">
                  No reactive hotkeys triggered yet...
                </div>
                <div v-for="message in messages" :key="message.id" class="text-body-2 mb-1">
                  <span class="text-grey text-caption">{{ message.time }}</span> - {{ message.text }}
                </div>
                <u-btn v-if="messages.length > 0" class="mt-2" size="small" @click="clearMessages">
                  Clear Log
                </u-btn>
              </div>
            </u-card-text>
          </u-card>
        </u-col>
      </u-row>
    </u-container>
  `,
});

ReactiveHotkeys.args = {} as ComponentArgs;

ReactiveHotkeys.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <!-- Reactive hotkeys demo -->
  </u-container>
</template>
<script setup>
  import { computed, ref, watch } from 'vue'
  import { useHotkey } from 'vuetify'

  const saveHotkey = ref('cmd+s')
  const hotkeyEnabled = ref(true)

  const activeSaveHotkey = computed(() => hotkeyEnabled.value ? saveHotkey.value : undefined)

  useHotkey(activeSaveHotkey, () => {
    addMessage(\`💾 Save triggered with: \${saveHotkey.value}\`)
  })
</script>`,
    },
    description: {
      story: 'Key combinations can be reactive, allowing you to change hotkeys dynamically.',
    },
  },
};

export const Options: StoryFn<ComponentArgs> = (args) => ({
  components: {
    UContainer,
    URow,
    UCol,
    UCard,
    UCardText,
    USwitch,
    USlider,
    UTable,
    UHotkey,
    UChip,
    UDivider,
    UTextField,
    UBtn,
  },
  setup() {
    const messages = ref<Array<{ id: number; text: string; time: string }>>([]);
    const sequenceTimeout = ref(1000);
    const hotkeyEnabled = ref(true);

    const addMessage = (text: string) => {
      messages.value.push({
        id: Date.now(),
        text,
        time: new Date().toLocaleTimeString(),
      });

      if (messages.value.length > 8) {
        messages.value = messages.value.slice(-8);
      }
    };

    const clearMessages = () => {
      messages.value = [];
    };

    let cleanupFunction: (() => void) | undefined;

    const setupHotkeys = () => {
      if (cleanupFunction) {
        cleanupFunction();
      }

      if (hotkeyEnabled.value) {
        cleanupFunction = useHotkey(
          'cmd+k',
          (event) => {
            addMessage(`⚡ Hotkey triggered with sequenceTimeout: ${sequenceTimeout.value}ms`);
            console.log('Event:', event);
          },
          {
            sequenceTimeout: sequenceTimeout.value,
          }
        );
      }
    };

    setupHotkeys();

    watch([sequenceTimeout, hotkeyEnabled], () => {
      setupHotkeys();
      addMessage('⚙️ Hotkey options updated');
    });

    onBeforeUnmount(() => {
      if (cleanupFunction) {
        cleanupFunction();
      }
    });

    return {
      args,
      messages,
      sequenceTimeout,
      hotkeyEnabled,
      clearMessages,
    };
  },
  template: `
    <u-container>
      <u-row>
        <u-col cols="12">
          <u-card>
            <u-card-text>
              <p class="text-body-2 mb-4">
                Configure useHotkey options to customize behavior. Try <u-hotkey keys="cmd+k"></u-hotkey> to test:
              </p>

              <u-row>
                <u-col cols="12" md="6">
                  <h4 class="text-subtitle-1 mb-3">Options Configuration</h4>

                  <u-switch
                    v-model="hotkeyEnabled"
                    class="mb-4"
                    label="Enable Hotkey"
                  ></u-switch>

                  <u-slider
                    v-model="sequenceTimeout"
                    :max="3000"
                    :min="500"
                    :step="100"
                    class="mb-2"
                    label="Sequence Timeout (ms)"
                    thumb-label
                  ></u-slider>

                  <p class="text-caption text-grey mt-2">
                    The sequenceTimeout option controls how long the composable waits for the next key in a sequence.
                  </p>
                </u-col>

                <u-col cols="12" md="6">
                  <h4 class="text-subtitle-1 mb-3">Current Configuration</h4>
                  <u-table density="compact">
                    <thead>
                      <tr>
                        <th>Option</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sequence Timeout</td>
                        <td>
                          <u-chip size="small">{{ sequenceTimeout }}ms</u-chip>
                        </td>
                      </tr>
                      <tr>
                        <td>Hotkey Status</td>
                        <td>
                          <u-chip :color="hotkeyEnabled ? 'success' : 'grey'" size="small">
                            {{ hotkeyEnabled ? 'Active' : 'Disabled' }}
                          </u-chip>
                        </td>
                      </tr>
                    </tbody>
                  </u-table>

                  <u-alert class="mt-4" color="info" density="compact" variant="tonal">
                    <template v-slot:title>About Options</template>
                    The useHotkey composable supports the sequenceTimeout option for configuring multi-key sequence behavior.
                  </u-alert>
                </u-col>
              </u-row>

              <u-divider class="my-4"></u-divider>

              <div class="activity-log pa-3 border rounded">
                <h4 class="text-subtitle-1 mb-2">Activity Log:</h4>
                <div v-if="messages.length === 0" class="text-grey">
                  No hotkey with options triggered yet. Press <u-hotkey keys="cmd+k"></u-hotkey> to test!
                </div>
                <div v-for="message in messages" :key="message.id" class="text-body-2 mb-1">
                  <span class="text-grey text-caption">{{ message.time }}</span> - {{ message.text }}
                </div>
                <u-btn v-if="messages.length > 0" class="mt-2" size="small" @click="clearMessages">
                  Clear Log
                </u-btn>
              </div>
            </u-card-text>
          </u-card>
        </u-col>
      </u-row>
    </u-container>
  `,
});

Options.args = {} as ComponentArgs;

Options.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <!-- Options demo -->
  </u-container>
</template>
<script setup>
  import { ref, watch, onBeforeUnmount } from 'vue'
  import { useHotkey } from 'vuetify'

  const sequenceTimeout = ref(1000)
  const hotkeyEnabled = ref(true)

  let cleanupFunction

  const setupHotkeys = () => {
    if (cleanupFunction) cleanupFunction()

    if (hotkeyEnabled.value) {
      cleanupFunction = useHotkey('cmd+k', (event) => {
        addMessage(\`⚡ Hotkey triggered with sequenceTimeout: \${sequenceTimeout.value}ms\`)
      }, {
        sequenceTimeout: sequenceTimeout.value
      })
    }
  }

  setupHotkeys()

  watch([sequenceTimeout, hotkeyEnabled], () => {
    setupHotkeys()
  })

  onBeforeUnmount(() => {
    if (cleanupFunction) cleanupFunction()
  })
</script>`,
    },
    description: {
      story:
        'Configure useHotkey with the sequenceTimeout option to control multi-key sequence behavior.',
    },
  },
};
