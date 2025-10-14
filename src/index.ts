import type { App, Component } from 'vue';
// Ensure Material Design Icons font CSS is included when the library is used
// This allows consumers of the library to have the MDI font available by default.
import '@mdi/font/css/materialdesignicons.css';

import * as components from './components';

type InstallableComponent = Component & { install?: (app: App) => void; name?: string };

const install = (app: App): void => {
  // register each component that has an install method or a name
  Object.values(components).forEach((comp) => {
    const c = comp as unknown as InstallableComponent;
    if (!c) return;
    if (typeof c === 'object' && 'install' in c && typeof c.install === 'function') {
      c.install!(app);
    } else if (c.name) {
      app.component(c.name as string, c as Component);
    }
  });
};

export default { install };
export * from './components';
