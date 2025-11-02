import type { App, Component, Plugin } from 'vue';
import { createVuetify } from 'vuetify';

import * as uComponents from '../components';

import { aliases, hugeiconsSet } from './iconify';

// Types derived from the runtime createVuetify signature to avoid depending
// on internal Vuetify type names across versions.
type VuetifyOptions = NonNullable<Parameters<typeof createVuetify>[0]>;

export type UltimateCoreUIOptions = VuetifyOptions;

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

// Minimal deep merge tailored for Vuetify options structure:
// - Recursively merges plain objects
// - Arrays and non-objects are replaced by source
// - Does not attempt to merge functions or special classes
function mergeDeep<T extends Record<string, unknown>>(
  target: T,
  source: Record<string, unknown>
): T {
  const out: Record<string, unknown> = { ...target };

  for (const [key, sourceVal] of Object.entries(source)) {
    const targetVal = out[key];

    if (isObject(targetVal) && isObject(sourceVal)) {
      out[key] = mergeDeep(targetVal as Record<string, unknown>, sourceVal);
    } else {
      // Replace for arrays, primitives, functions, and other cases
      out[key] = sourceVal as unknown;
    }
  }

  return out as T;
}

// Branded theme presets and component defaults. Users can override any of these
// by passing their own options to the factory.
const libraryDefaults: Partial<VuetifyOptions> = {
  icons: {
    defaultSet: 'hugeicons',
    aliases,
    sets: {
      hugeicons: hugeiconsSet,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      // Ultimate brand light theme
      light: {
        dark: false,
        colors: {},
        variables: {},
      },
      // Ultimate brand dark theme
      dark: {
        dark: true,
        colors: {},
        variables: {},
      },
      // Ultimate brand light colorblind theme
      lightColorblind: {
        dark: false,
        colors: {},
        variables: {},
      },
      // Ultimate brand dark colorblind theme
      darkColorblind: {
        dark: true,
        colors: {},
        variables: {},
      },
    },
  },
  // Component-level defaults that reflect Ultimate Core UI opinions
  defaults: {
    global: {
      ripple: false,
      elevation: 'none',
    },
    VBtn: {
      rounded: 'md',
    },
    VTextField: {
      variant: 'outlined',
      color: 'primary',
      density: 'comfortable',
      // showDetails: 'auto' // uncomment if preferred
    },
    VTextarea: {
      variant: 'outlined',
      color: 'primary',
      density: 'comfortable',
    },
    VSelect: {
      variant: 'outlined',
      color: 'primary',
      density: 'comfortable',
    },
    VCard: {
      rounded: 'lg',
    },
    VAlert: {
      variant: 'tonal',
      density: 'comfortable',
    },
    VChip: {
      rounded: 'lg',
    },
    VDialog: {
      // Use rounded dialogs by default; surfaces still inherit theme colors
      rounded: 'lg',
    },
  },
};

export function createUltimateCoreUI(options?: UltimateCoreUIOptions): Plugin {
  // Start from library defaults, then merge user overrides.
  const merged =
    options && isObject(options)
      ? (mergeDeep(
          libraryDefaults as Record<string, unknown>,
          options as unknown as Record<string, unknown>
        ) as VuetifyOptions)
      : (libraryDefaults as VuetifyOptions);

  const vuetifyPlugin = createVuetify(merged);

  // Helper: install all Ultimate Core UI components globally
  type InstallableComponent = Component & { install?: (app: App) => void; name?: string };
  const installUltimateComponents = (app: App): void => {
    Object.values(uComponents).forEach((comp) => {
      const c = comp as unknown as InstallableComponent;
      if (!c) return;
      if (typeof c === 'object' && 'install' in c && typeof c.install === 'function') {
        c.install(app);
      } else if (c && typeof c.name === 'string') {
        app.component(c.name, c as Component);
      }
    });
  };

  const plugin: Plugin = {
    install(app: App) {
      // 1) Install Vuetify with merged options (includes user-provided components/directives)
      app.use(vuetifyPlugin);
      // 2) Register Ultimate Core UI components globally
      installUltimateComponents(app);
    },
  };

  return plugin;
}

export default createUltimateCoreUI;
