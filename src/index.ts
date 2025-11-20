import type { App, Component } from 'vue';

// Ensure library global styles are included when consumers import the package
import './styles/index.scss';

// Re-export everything from the components barrel so consumers can import
// individual components or use the plugin.
export * from './components';
export * from './composables';

import * as components from './components';

type InstallableComponent = Component & { install?: (app: App) => void; name?: string };

const install = (app: App): void => {
  Object.values(components).forEach((comp) => {
    const c = comp as unknown as InstallableComponent;
    if (!c) return;
    if (typeof c === 'object' && 'install' in c && typeof c.install === 'function') {
      c.install!(app);
    } else if (c && typeof c.name === 'string') {
      app.component(c.name, c as Component);
    }
  });
};

export default { install };

// Factories / Plugins
export { createUltimateCoreUI } from './plugins/createUltimateCoreUI';
export type { UltimateCoreUIOptions } from './plugins/createUltimateCoreUI';
export { hugeiconsSet } from './plugins/iconify';
