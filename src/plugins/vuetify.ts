import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export const anchorVuetify = createVuetify({
  theme: {
    defaultTheme: 'anchorLight',
    themes: {
      anchorLight: {
        dark: false,
        colors: {
          primary: '#0057b8',
          secondary: '#6c757d',
        },
      },
      anchorDark: {
        dark: true,
        colors: {
          primary: '#0077ff',
          secondary: '#adb5bd',
        },
      },
    },
  },
});
