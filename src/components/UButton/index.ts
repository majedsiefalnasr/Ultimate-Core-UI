import type { App } from 'vue';

import UButton from './UButton.vue';

// Define a small installable SFC type instead of using `any`
type SFCWithInstall<T> = T & { install?: (app: App) => void };

const _UButton = UButton as SFCWithInstall<typeof UButton>;

_UButton.install = (app: App): void => {
  app.component('UButton', UButton);
};

export default _UButton;
export { UButton };
