import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export const ultimateVuetify = createVuetify({
  theme: {
    defaultTheme: 'ultimateLight',
    themes: {
      ultimateLight: {
        dark: false,
        colors: {
          primary: '#0057b8',
          secondary: '#6c757d',
        },
      },
      ultimateDark: {
        dark: true,
        colors: {
          primary: '#0077ff',
          secondary: '#adb5bd',
        },
      },
    },
  },
});
