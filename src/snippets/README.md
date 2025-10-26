# Ultimate Core UI - Code Snippets

Modern, organized VS Code snippets for Ultimate Core UI components. These snippets follow Vuetify 3 patterns with Composition API and TypeScript support.

## 📦 Snippet Files

The snippets are organized into logical categories for better organization and maintainability:

### Core Files

| File                           | Description                   | Component Count                                      |
| ------------------------------ | ----------------------------- | ---------------------------------------------------- |
| **layout.code-snippets**       | Layout & structure components | App, Main, Container, Grid, Footer                   |
| **buttons.code-snippets**      | Button & action components    | Btn, BtnGroup, BtnToggle, Fab, SpeedDial             |
| **forms.code-snippets**        | Form input components         | TextField, Select, Checkbox, Radio, Switch, etc.     |
| **navigation.code-snippets**   | Navigation components         | AppBar, NavigationDrawer, Tabs, Menu, Breadcrumbs    |
| **data-display.code-snippets** | Data & content display        | Card, List, Table, DataTable, Chip, Badge, Avatar    |
| **feedback.code-snippets**     | Feedback & overlays           | Alert, Dialog, Snackbar, Progress, Skeleton          |
| **advanced.code-snippets**     | Advanced components           | Timeline, Carousel, Stepper, VirtualScroll, Treeview |
| **transitions.code-snippets**  | Transition components         | Expand, Fade, Scale, SlideX, SlideY transitions      |

### Legacy File

- **vuetify.json.old** - Archived legacy snippets (Vuetify 2.x) - kept for reference only

## 🚀 Usage

### In VS Code

1. **Auto-installed**: Snippets are automatically available when you install the package
2. **Trigger**: Type the component name (e.g., `UBtn` or `u-btn`)
3. **Select**: Choose from IntelliSense suggestions
4. **Tab**: Use Tab to navigate through placeholders

### Snippet Naming Convention

All snippets support **both** PascalCase and kebab-case prefixes:

```vue
<!-- Type "UBtn" or "u-btn" -->
<UBtn>Click Me</UBtn>

<!-- Type "UTextField" or "u-text-field" -->
<UTextField v-model="value" label="Name" />
```

## 📝 Examples

### Quick Start

```vue
<!-- Complete App Layout -->
uAppLayout →
<UApp>
    <UAppBar>...</UAppBar>
    <UMain>
      <UContainer>...</UContainer>
    </UMain>
  </UApp>

<!-- Form with Validation -->
UFormValidation →
<UForm ref="form" v-model="valid" @submit.prevent="handleSubmit">
    ...
  </UForm>

<!-- Data Table -->
UDataTable →
<UDataTable :items="items" :headers="headers" :loading="loading" />
```

### Common Patterns

```vue
<!-- Button with all props -->
UBtnProps →
<UBtn color="primary" variant="elevated" :loading="loading">...</UBtn>

<!-- Text Field with validation -->
UTextFieldValidation →
<UTextField v-model="value" :rules="rules" :error-messages="errors" />

<!-- Dialog with card -->
UDialogCard →
<UDialog v-model="dialog">
                <UCard>...</UCard>
              </UDialog>

<!-- Navigation Layout -->
uNavLayout → Complete app layout with drawer and navigation
```

## 🎯 Features

### Modern Syntax

- ✅ Vue 3 Composition API
- ✅ TypeScript support
- ✅ Vuetify 3 components
- ✅ Modern prop names and patterns

### Organized Structure

- 📁 Categorized by functionality
- 🔍 Easy to find and maintain
- 📚 Logical grouping
- 🎨 Consistent naming

### Developer Experience

- 🚀 Fast autocomplete
- 💡 IntelliSense support
- 📝 Descriptive snippets
- ⚡ Tab stop navigation

## 🔧 Integration

### For Package Consumers

The snippet files are automatically included when you install `@ultimate/core-ui`:

```bash
npm install @ultimate/core-ui
```

Snippets are available immediately in VS Code without additional configuration.

### For VS Code Extension

To manually install snippets:

1. Copy desired `.code-snippets` files from `src/snippets/`
2. Paste into your workspace `.vscode/` folder
3. Reload VS Code

### For Other Editors

Most modern editors support VS Code snippet format:

- **WebStorm/IntelliJ**: Import via Settings → Live Templates
- **Sublime Text**: Convert using package managers
- **Atom**: Use snippet converter packages

## 📖 Component Reference

### Complete Component List

Each category contains snippets for:

**Layout**: UApp, UMain, UContainer, ULayout, USheet, UFooter, UDivider, Grid system

**Buttons**: UBtn, UBtnGroup, UBtnToggle, UFab, USpeedDial + variants and props

**Forms**: UTextField, UTextarea, USelect, UCombobox, UAutocomplete, UCheckbox, URadio, URadioGroup, USwitch, USlider, URangeSlider, UFileInput, UColorPicker, UDatePicker, UTimePicker, UOtpInput, UNumberInput, URating, UForm

**Navigation**: UAppBar, UNavigationDrawer, UBottomNavigation, UBottomSheet, UBreadcrumbs, UTabs, UMenu, UToolbar, USystemBar

**Data Display**: UCard, UList, UListItem, UTable, UDataTable, UChip, UChipGroup, UBadge, UAvatar, UIcon, UImg, UCode, UKbd, UEmptyState, UExpansionPanels, UPagination

**Feedback**: UAlert, UDialog, USnackbar, USnackbarQueue, UProgressLinear, UProgressCircular, USkeletonLoader, UOverlay, UTooltip, UBanner

**Advanced**: UTimeline, UCarousel, UParallax, UDataIterator, UVirtualScroll, UInfiniteScroll, UStepper, UWindow, USlideGroup, USparkline, UTreeview, UHover, ULazy, UNoSsr, UConfirmEdit, UCounter, UValidation, UDefaultsProvider, ULocaleProvider, UThemeProvider

**Transitions**: UExpandTransition, UFadeTransition, UScaleTransition, USlideXTransition, USlideYTransition + reverse variants and scroll transitions

## 🤝 Contributing

When adding new components:

1. Add snippets to the appropriate category file
2. Use both PascalCase and kebab-case prefixes
3. Include common prop variations
4. Add complete examples where helpful
5. Update this README with new components

## 📄 Notes

- All snippet files are valid JSON (no code fences)
- Snippets support tab stops for quick navigation
- Use `$0` for final cursor position
- Use `${1:placeholder}` for named tab stops
- Use `${1|option1,option2|}` for choice selections

## 🔗 Resources

- [Ultimate Core UI Documentation](https://github.com/majedsiefalnasr/Ultimate-Core-UI)
- [Vuetify 3 Documentation](https://vuetifyjs.com/)
- [VS Code Snippets Guide](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
