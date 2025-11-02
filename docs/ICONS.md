# Using Hugeicons with Ultimate Core UI

Ultimate Core UI now uses [Hugeicons](https://hugeicons.com/) from Iconify as the default icon set instead of Material Design Icons.

## Installation

The required packages are already included as dependencies:

- `@iconify/vue` - Iconify Vue integration
- `@iconify-json/hugeicons` - Hugeicons icon set

## Default Configuration

The library automatically configures Hugeicons as the default icon set. No additional setup is required.

```typescript
import { createUltimateCoreUI } from '@ultimate/core-ui';

const ultimateCoreUI = createUltimateCoreUI();
app.use(ultimateCoreUI);
```

## Using Icons in Components

### In Vuetify/Ultimate Components

Simply use the icon name without the `hugeicons:` prefix:

```vue
<template>
  <u-btn icon="home-01" />
  <u-icon icon="user-circle" />
  <u-text-field prepend-icon="search-01" />
</template>
```

### Direct Iconify Component

You can also use the Iconify component directly for more control:

```vue
<template>
  <Icon icon="hugeicons:home-01" :width="24" :height="24" />
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue';
</script>
```

## Available Icons

Browse all available Hugeicons at:

- [Hugeicons on Iconify](https://icon-sets.iconify.design/hugeicons/)
- [Hugeicons Official](https://hugeicons.com/)

## Custom Icon Sets

You can override the default icon set or add additional sets:

```typescript
import { createUltimateCoreUI } from '@ultimate/core-ui';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const ultimateCoreUI = createUltimateCoreUI({
  icons: {
    defaultSet: 'hugeicons', // or 'mdi', 'fa', etc.
    sets: {
      mdi, // Add Material Design Icons
    },
    aliases, // Add MDI aliases
  },
});
```

## Benefits of Hugeicons + Iconify

- **No font loading**: Icons are loaded on-demand as SVGs
- **Smaller bundle size**: Only the icons you use are included
- **Better performance**: SVG icons render faster than icon fonts
- **Consistent rendering**: No FOUT (Flash of Unstyled Text)
- **Easy switching**: Change icon sets without rebuilding
- **Modern design**: Clean, consistent iconography

## Migration from MDI

If you were using MDI icons, you'll need to update icon names. Common mappings:

| MDI           | Hugeicons        |
| ------------- | ---------------- |
| `mdi-home`    | `home-01`        |
| `mdi-account` | `user-circle`    |
| `mdi-magnify` | `search-01`      |
| `mdi-plus`    | `plus-sign`      |
| `mdi-delete`  | `delete-02`      |
| `mdi-pencil`  | `pencil-edit-01` |
| `mdi-check`   | `checkmark-01`   |
| `mdi-close`   | `cancel-01`      |

Use the [Iconify search](https://icon-sets.iconify.design/hugeicons/) to find equivalents.
