# 🎨 Icon Guidelines

> CRITICAL: Always use Iconify Hugeicons for all icons

---

## Icon Usage Rules

**ALWAYS use Iconify Hugeicons for all icons** - Never use Material Design Icons (MDI) or any other icon library.

### Format Requirements

1. **Format**: All icons MUST use the Iconify Hugeicons format: `hugeicons:icon-name-##`
2. **Finding Icons**: Search the Iconify Hugeicons library at [Iconify - Hugeicons](https://icon-sets.iconify.design/hugeicons/)
3. **Naming Pattern**: Follow the pattern `hugeicons:icon-name-##` where `##` is typically `01`, `02`, etc.

---

## Common Icon Mappings

### Navigation Icons

| Purpose       | Icon                       | Usage                 |
| ------------- | -------------------------- | --------------------- |
| Previous/Back | `hugeicons:arrow-left-01`  | Previous/back buttons |
| Next/Forward  | `hugeicons:arrow-right-01` | Next/forward buttons  |
| Expand        | `hugeicons:arrow-up-01`    | Scroll up/expand      |
| Collapse      | `hugeicons:arrow-down-01`  | Scroll down/collapse  |
| Up            | `hugeicons:arrow-up-01`    | Move up               |
| Down          | `hugeicons:arrow-down-01`  | Move down             |
| Left          | `hugeicons:arrow-left-01`  | Move left             |
| Right         | `hugeicons:arrow-right-01` | Move right            |

### Action Icons

| Purpose    | Icon                     | Usage           |
| ---------- | ------------------------ | --------------- |
| Search     | `hugeicons:search-01`    | Search fields   |
| Add/Create | `hugeicons:add-01`       | Add/create      |
| Delete     | `hugeicons:delete-02`    | Delete actions  |
| Edit       | `hugeicons:edit-02`      | Edit actions    |
| Save       | `hugeicons:save-01`      | Save actions    |
| Cancel     | `hugeicons:cancel-01`    | Cancel/close    |
| Close      | `hugeicons:cancel-01`    | Close dialogs   |
| Refresh    | `hugeicons:refresh`      | Refresh data    |
| Download   | `hugeicons:download-01`  | Download files  |
| Upload     | `hugeicons:upload-01`    | Upload files    |
| Copy       | `hugeicons:copy-01`      | Copy content    |
| Paste      | `hugeicons:clipboard-01` | Paste content   |
| Print      | `hugeicons:printer-01`   | Print documents |
| Share      | `hugeicons:share-01`     | Share content   |

### UI Element Icons

| Purpose       | Icon                           | Usage                |
| ------------- | ------------------------------ | -------------------- |
| Menu          | `hugeicons:menu-01`            | Menu/hamburger       |
| Home          | `hugeicons:home-01`            | Home navigation      |
| Settings      | `hugeicons:settings-01`        | Settings/config      |
| Notifications | `hugeicons:notification-01`    | Notifications/alerts |
| User/Profile  | `hugeicons:user-01`            | User/profile         |
| Calendar      | `hugeicons:calendar-01`        | Date pickers         |
| Clock/Time    | `hugeicons:clock-01`           | Time/duration        |
| Filter        | `hugeicons:filter-01`          | Filter options       |
| Sort          | `hugeicons:sort-01`            | Sort options         |
| View Grid     | `hugeicons:grid-01`            | Grid view            |
| View List     | `hugeicons:list-01`            | List view            |
| Maximize      | `hugeicons:maximize-01`        | Expand full          |
| Minimize      | `hugeicons:minimize-01`        | Minimize window      |
| More Options  | `hugeicons:more-horizontal-01` | More menu            |

### Status Icons

| Purpose | Icon                           | Usage            |
| ------- | ------------------------------ | ---------------- |
| Success | `hugeicons:tick-01`            | Success/complete |
| Warning | `hugeicons:alert-02`           | Warning/caution  |
| Info    | `hugeicons:information-circle` | Info/help        |
| Error   | `hugeicons:cancel-circle`      | Error/failure    |
| Help    | `hugeicons:help-circle`        | Help/support     |
| Loading | `hugeicons:loading-01`         | Loading state    |

### File & Document Icons

| Purpose    | Icon                      | Usage            |
| ---------- | ------------------------- | ---------------- |
| File       | `hugeicons:file-01`       | Generic file     |
| Folder     | `hugeicons:folder-01`     | Folder/directory |
| Document   | `hugeicons:document-01`   | Document file    |
| Image      | `hugeicons:image-01`      | Image file       |
| Video      | `hugeicons:video-01`      | Video file       |
| Audio      | `hugeicons:music-01`      | Audio file       |
| Attachment | `hugeicons:attachment-01` | File attachment  |

### Communication Icons

| Purpose | Icon                   | Usage          |
| ------- | ---------------------- | -------------- |
| Email   | `hugeicons:mail-01`    | Email/message  |
| Chat    | `hugeicons:message-01` | Chat/messaging |
| Phone   | `hugeicons:call-01`    | Phone call     |
| Send    | `hugeicons:sent-01`    | Send message   |
| Inbox   | `hugeicons:inbox-01`   | Inbox          |
| Comment | `hugeicons:comment-01` | Comments       |

### Media Icons

| Purpose      | Icon                       | Usage          |
| ------------ | -------------------------- | -------------- |
| Play         | `hugeicons:play-01`        | Play media     |
| Pause        | `hugeicons:pause-01`       | Pause media    |
| Stop         | `hugeicons:stop-01`        | Stop media     |
| Skip Back    | `hugeicons:previous-01`    | Previous track |
| Skip Forward | `hugeicons:next-01`        | Next track     |
| Volume       | `hugeicons:volume-01`      | Volume control |
| Mute         | `hugeicons:volume-mute-01` | Mute audio     |
| Camera       | `hugeicons:camera-01`      | Camera/photo   |

---

## Icon Replacement Process

When migrating existing icons or creating new components:

1. **Search for MDI icons**: Look for any `mdi-*` patterns
2. **Find Hugeicons equivalent**: Search Iconify Hugeicons library
3. **Replace with proper format**: Use `hugeicons:icon-name-##` format
4. **Update documentation**: Ensure code examples use Hugeicons

### Example Migrations

```ts
// ❌ Wrong (MDI)
icon: 'mdi-arrow-left';
icon: 'mdi-magnify';
icon: 'mdi-account';
icon: 'mdi-home';
icon: 'mdi-cog';
icon: 'mdi-bell';
icon: 'mdi-calendar';
icon: 'mdi-check';
icon: 'mdi-alert';
icon: 'mdi-information';

// ✅ Correct (Hugeicons)
icon: 'hugeicons:arrow-left-01';
icon: 'hugeicons:search-01';
icon: 'hugeicons:user-01';
icon: 'hugeicons:home-01';
icon: 'hugeicons:settings-01';
icon: 'hugeicons:notification-01';
icon: 'hugeicons:calendar-01';
icon: 'hugeicons:tick-01';
icon: 'hugeicons:alert-02';
icon: 'hugeicons:information-circle';
```

---

## Usage in Components

### Vue Component Props

```vue
<script setup lang="ts">
  interface Props {
    icon?: string;
    prependIcon?: string;
    appendIcon?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    icon: 'hugeicons:information-circle',
  });
</script>

<template>
  <v-component :icon="icon" />
</template>
```

### Story Examples

```ts
export const WithIcon: StoryFn<ComponentArgs> = (args) => ({
  components: { UBtn },
  setup() {
    return { args };
  },
  template: '<u-btn v-bind="args">Button</u-btn>',
});

WithIcon.args = {
  prependIcon: 'hugeicons:add-01',
  appendIcon: 'hugeicons:arrow-right-01',
};
```

### Data Arrays with Icons

```ts
const navigationItems = [
  {
    title: 'Home',
    icon: 'hugeicons:home-01',
    to: '/',
  },
  {
    title: 'Search',
    icon: 'hugeicons:search-01',
    to: '/search',
  },
  {
    title: 'Settings',
    icon: 'hugeicons:settings-01',
    to: '/settings',
  },
  {
    title: 'Profile',
    icon: 'hugeicons:user-01',
    to: '/profile',
  },
];
```

---

## In Storybook Stories

Always use Hugeicons in:

- Component templates
- Story examples
- Documentation code blocks
- Data arrays with icon properties
- ArgTypes default values

### Story Template Example

```ts
export const IconVariants: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UContainer, URow, UCol },
  setup() {
    return {};
  },
  template: `
    <u-container>
      <u-row>
        <u-col>
          <u-btn prepend-icon="hugeicons:home-01">Home</u-btn>
        </u-col>
        <u-col>
          <u-btn prepend-icon="hugeicons:search-01">Search</u-btn>
        </u-col>
        <u-col>
          <u-btn prepend-icon="hugeicons:settings-01">Settings</u-btn>
        </u-col>
      </u-row>
    </u-container>
  `,
});
```

### ArgTypes with Icons

```ts
argTypes: {
  icon: {
    control: 'text',
    description: 'Icon to display',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'hugeicons:information-circle' },
    },
  },
  prependIcon: {
    control: 'text',
    description: 'Icon before content',
  },
  appendIcon: {
    control: 'text',
    description: 'Icon after content',
  },
}
```

---

## Finding the Right Icon

### Search Strategy

1. **Go to Iconify**: https://icon-sets.iconify.design/hugeicons/
2. **Search by keyword**: Use simple, descriptive terms
3. **Check variants**: Many icons have multiple versions (01, 02, etc.)
4. **Verify format**: Ensure it starts with `hugeicons:`

### Common Search Terms

| Need          | Search For     | Result                      |
| ------------- | -------------- | --------------------------- |
| Add button    | "add"          | `hugeicons:add-01`          |
| Delete button | "delete"       | `hugeicons:delete-02`       |
| Edit button   | "edit"         | `hugeicons:edit-02`         |
| Save button   | "save"         | `hugeicons:save-01`         |
| Search field  | "search"       | `hugeicons:search-01`       |
| User profile  | "user"         | `hugeicons:user-01`         |
| Settings      | "settings"     | `hugeicons:settings-01`     |
| Home          | "home"         | `hugeicons:home-01`         |
| Calendar      | "calendar"     | `hugeicons:calendar-01`     |
| Notifications | "notification" | `hugeicons:notification-01` |

---

## Icon Checklist

- [ ] All icons use `hugeicons:` prefix
- [ ] No `mdi-` or other icon library references
- [ ] Icons are searchable on Iconify
- [ ] Component props have correct icon defaults
- [ ] Story examples use Hugeicons
- [ ] Documentation shows Hugeicons usage
- [ ] Data arrays use Hugeicons format

---

## Common Mistakes to Avoid

### ❌ Wrong

```ts
// Using MDI
icon: 'mdi-home';
icon: 'mdi-account';

// Missing prefix
icon: 'home-01';
icon: 'user-01';

// Wrong prefix
icon: 'mdi:home';
icon: 'material:home';

// Incomplete format
icon: 'hugeicons:home'; // Missing variant number
```

### ✅ Correct

```ts
// Proper Hugeicons format
icon: 'hugeicons:home-01';
icon: 'hugeicons:user-01';
icon: 'hugeicons:search-01';
icon: 'hugeicons:settings-01';
```

---

**End of Icon Guidelines**
