import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Create a Vuetify instance suitable for unit tests
export const vuetify = createVuetify({
  components,
  directives,
});
