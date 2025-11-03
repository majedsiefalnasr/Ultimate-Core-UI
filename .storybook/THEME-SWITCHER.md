# 🎨 Storybook Theme Switcher Guide

## Overview

This project implements a **Vuetify theme switcher** in Storybook using the toolbar approach, allowing you to test components across different theme variations in real-time.

## ✨ Features

- 🌓 **4 Theme Variants**: Light, Dark, Light (Colorblind), Dark (Colorblind)
- 🔄 **Real-time Switching**: Changes apply instantly without page reload
- 💾 **Persistent Selection**: Theme choice persists across story navigation
- 🎯 **Native Integration**: Uses Storybook's built-in toolbar system
- ♿ **Accessibility**: Includes colorblind-friendly theme options

## 🚀 Usage

### In Storybook UI

1. Open Storybook (`npm run storybook`)
2. Look for the **Theme** dropdown in the toolbar (top of the page)
3. Click the paintbrush icon or dropdown
4. Select your desired theme:
   - ☀️ **Light** - Standard light theme
   - 🌙 **Dark** - Standard dark theme
   - ♿ **Light (Colorblind)** - Accessibility-optimized light theme
   - ♿ **Dark (Colorblind)** - Accessibility-optimized dark theme

### In Story Files

The theme switcher works automatically with all stories. No additional configuration needed in individual story files.

However, if you want to test a specific theme in a story:

```typescript
export const MyStory: StoryFn<ComponentArgs> = (args) => ({
  components: { UBtn },
  setup() {
    return { args };
  },
  template: '<u-btn v-bind="args">Click Me</u-btn>',
});

// Optional: Set default theme for this specific story
MyStory.parameters = {
  globals: {
    theme: 'dark', // Forces this story to start with dark theme
  },
};
```

## 🏗️ Architecture

### Implementation Details

The theme switcher is implemented in `.storybook/preview.ts` with three key parts:

#### 1. **Vuetify Instance with Theme Configuration**

```typescript
const vuetify = createVuetify({
  components, 
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: { /* ... */ },
      dark: { /* ... */ },
      lightColorblind: { /* ... */ },
      darkColorblind: { /* ... */ },
    },
  },
});
```

#### 2. **Theme Decorator**

Watches for theme changes from the toolbar and updates Vuetify:

```typescript
const withVuetifyTheme: Decorator = (story, context) => {
  const theme = useTheme()
  
  watch(
    () => context.globals.theme,
    (newTheme) => {
      if (newTheme && theme.global.name.value !== newTheme) {
        theme.global.name.value = newTheme
      }
    },
    { immediate: true }
  )
  
  return story()
}
```

#### 3. **Global Types Configuration**

Defines the toolbar dropdown:

```typescript
globalTypes: {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme',
      icon: 'paintbrush',
      items: [/* theme options */],
      dynamicTitle: true,
    },
  },
}
```

## 🎨 Customizing Themes

### Adding Custom Colors

Edit the theme configuration in `.storybook/preview.ts`:

```typescript
const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
      // ... other themes
    },
  },
});
```

### Adding New Themes

1. **Add theme to Vuetify configuration:**

```typescript
const vuetify = createVuetify({
  theme: {
    themes: {
      // ... existing themes
      customTheme: {
        dark: false,
        colors: {
          // Your custom colors
        },
      },
    },
  },
});
```

2. **Add theme option to toolbar:**

```typescript
globalTypes: {
  theme: {
    toolbar: {
      items: [
        // ... existing items
        { value: 'customTheme', icon: 'star', title: 'Custom Theme' },
      ],
    },
  },
}
```

### Syncing with Main Theme Configuration

To use the same themes from your main plugin (`createUltimateCoreUI`), you can:

1. Export theme configuration from your plugin
2. Import and reuse in Storybook preview

**Example:**

```typescript
// src/plugins/themes.ts
export const ultimateThemes = {
  light: { /* ... */ },
  dark: { /* ... */ },
  // ...
};

// .storybook/preview.ts
import { ultimateThemes } from '../src/plugins/themes';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: ultimateThemes,
  },
});
```

## 🔧 Advanced Configuration

### Per-Story Theme Override

```typescript
export const DarkOnlyStory: StoryFn<ComponentArgs> = (args) => ({
  // ... story config
});

DarkOnlyStory.parameters = {
  globals: { theme: 'dark' },
};
```

### Disable Theme Switcher for Specific Story

```typescript
export const NoThemeSwitcher: StoryFn<ComponentArgs> = (args) => ({
  // ... story config
});

NoThemeSwitcher.parameters = {
  toolbar: {
    theme: { hidden: true },
  },
};
```

### Testing Theme Transitions

```typescript
export const ThemeTransition: StoryFn<ComponentArgs> = () => ({
  components: { UBtn },
  setup() {
    const theme = useTheme();
    
    const toggleTheme = () => {
      theme.global.name.value = 
        theme.global.name.value === 'light' ? 'dark' : 'light';
    };
    
    return { toggleTheme };
  },
  template: `
    <u-btn @click="toggleTheme">
      Toggle Theme Programmatically
    </u-btn>
  `,
});
```

## 📚 Best Practices

### 1. **Consistent Theme Testing**
- Test all components in both light and dark themes
- Verify accessibility with colorblind themes
- Check color contrast ratios

### 2. **Theme-Aware Stories**
- Don't hardcode colors in story templates
- Use Vuetify's theme colors: `color="primary"` instead of `color="#1976D2"`
- Test components that depend on theme colors

### 3. **Documentation**
- Document theme-specific behavior in story descriptions
- Include screenshots from different themes if needed

### 4. **Performance**
- Theme switching is reactive and performant
- No need to reload stories when switching themes
- Decorator runs only when theme changes

### 5. **Accessibility**
- Always test with colorblind themes
- Verify sufficient contrast in all themes
- Use semantic color names (primary, error, success)

## 🐛 Troubleshooting

### Theme not changing?

1. **Check console for errors**
2. **Verify Vuetify is installed**: `npm list vuetify`
3. **Clear Storybook cache**: `npm run build-storybook -- --no-cache`

### Colors not applying?

1. **Check theme configuration** in `.storybook/preview.ts`
2. **Verify component uses theme colors** (not hardcoded values)
3. **Check for CSS overrides** that might conflict

### Toolbar not showing?

1. **Verify `globalTypes` is configured** in preview
2. **Check decorator is applied**: `decorators: [withVuetifyTheme]`
3. **Restart Storybook**: Sometimes needed after config changes

## 📖 Additional Resources

- [Storybook Toolbars & Globals](https://storybook.js.org/docs/essentials/toolbars-and-globals)
- [Vuetify Theme Configuration](https://vuetifyjs.com/en/features/theme/)
- [Storybook Decorators](https://storybook.js.org/docs/writing-stories/decorators)

## 🎯 Related Files

- `.storybook/preview.ts` - Main configuration
- `src/plugins/createUltimateCoreUI.ts` - Theme definitions
- Individual story files - Component-specific implementations

---

**Last Updated**: November 3, 2025
