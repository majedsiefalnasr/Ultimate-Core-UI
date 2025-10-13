import { createApp } from 'vue';

// Create a Vuetify instance inside the playground so the playground is isolated
// from the library build. This ensures defaults/providers are available for
// Vuetify components used by the built bundle.
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from './App.vue';
import 'vuetify/styles';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(vuetify);

app.mount('#app');
