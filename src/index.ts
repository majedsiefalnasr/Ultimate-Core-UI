// Ensure Material Design Icons font CSS is included when the library is used
// This allows consumers of the library to have the MDI font available by default.
import '@mdi/font/css/materialdesignicons.css';
import type { App, Component } from 'vue';

// Re-export everything from the components barrel so consumers can import
// individual components or use the plugin.
export * from './components';

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
