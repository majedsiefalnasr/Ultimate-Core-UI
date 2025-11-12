# ✂️ VS Code Snippets Guidelines

> Guidelines for creating VS Code snippets for @UltimateCoreUI components

---

## Snippet Requirements

For each component, generate a snippet file that includes:

- [ ] Supports **both** PascalCase and kebab-case triggers
- [ ] Located in `src/snippets/<component-name>.code-snippets`
- [ ] Contains basic and advanced variants
- [ ] Uses proper tab stops for quick editing
- [ ] Includes helpful descriptions

---

## File Location & Naming

- **Location**: `src/snippets/`
- **Naming**: PascalCase matching component name
- **Extension**: `.code-snippets`
- **Example**: `UBtn.code-snippets`, `UTextField.code-snippets`

---

## Basic Snippet Template

Every component should have at least two snippets:

1. PascalCase version
2. kebab-case version

```json
{
  "UComponentName Component": {
    "prefix": "UComponentName",
    "body": ["<UComponentName $1>$2</UComponentName>"],
    "description": "Insert a UComponentName component"
  },
  "u-component-name Component": {
    "prefix": "u-component-name",
    "body": ["<u-component-name $1>$2</u-component-name>"],
    "description": "Insert a u-component-name component"
  }
}
```

---

## Tab Stop Guidelines

Use numbered tab stops to guide users through common props:

- `$1` - First tab stop (usually first important prop)
- `$2` - Second tab stop
- `$0` - Final cursor position (usually content area)

### Example with Tab Stops

```json
{
  "UBtn with props": {
    "prefix": "UBtnFull",
    "body": [
      "<UBtn",
      "  color=\"${1:primary}\"",
      "  variant=\"${2:elevated}\"",
      "  @click=\"${3:handleClick}\"",
      ">",
      "  ${0:Button Text}",
      "</UBtn>"
    ],
    "description": "Insert a UBtn with common props"
  }
}
```

---

## Complete Component Examples

### UBtn Snippets

```json
{
  "UBtn Component": {
    "prefix": "UBtn",
    "body": ["<UBtn $1>$0</UBtn>"],
    "description": "Insert a UBtn component"
  },
  "u-btn Component": {
    "prefix": "u-btn",
    "body": ["<u-btn $1>$0</u-btn>"],
    "description": "Insert a u-btn component"
  },
  "UBtn with Color": {
    "prefix": "UBtnColor",
    "body": ["<UBtn color=\"${1:primary}\">$0</UBtn>"],
    "description": "Insert a UBtn with color"
  },
  "UBtn with Icon": {
    "prefix": "UBtnIcon",
    "body": ["<UBtn prepend-icon=\"${1:hugeicons:add-01}\">", "  $0", "</UBtn>"],
    "description": "Insert a UBtn with icon"
  },
  "UBtn Full": {
    "prefix": "UBtnFull",
    "body": [
      "<UBtn",
      "  color=\"${1:primary}\"",
      "  variant=\"${2:elevated}\"",
      "  size=\"${3:default}\"",
      "  prepend-icon=\"${4:hugeicons:add-01}\"",
      "  @click=\"${5:handleClick}\"",
      ">",
      "  ${0:Button Text}",
      "</UBtn>"
    ],
    "description": "Insert a UBtn with all common props"
  }
}
```

### UTextField Snippets

```json
{
  "UTextField Component": {
    "prefix": "UTextField",
    "body": ["<UTextField $1 />"],
    "description": "Insert a UTextField component"
  },
  "u-text-field Component": {
    "prefix": "u-text-field",
    "body": ["<u-text-field $1 />"],
    "description": "Insert a u-text-field component"
  },
  "UTextField with Label": {
    "prefix": "UTextFieldLabel",
    "body": ["<UTextField label=\"${1:Label}\" $0 />"],
    "description": "Insert a UTextField with label"
  },
  "UTextField v-model": {
    "prefix": "UTextFieldModel",
    "body": ["<UTextField", "  v-model=\"${1:value}\"", "  label=\"${2:Label}\"", "  $0", "/>"],
    "description": "Insert a UTextField with v-model"
  },
  "UTextField Full": {
    "prefix": "UTextFieldFull",
    "body": [
      "<UTextField",
      "  v-model=\"${1:value}\"",
      "  label=\"${2:Label}\"",
      "  placeholder=\"${3:Enter text}\"",
      "  hint=\"${4:Helper text}\"",
      "  prepend-icon=\"${5:hugeicons:search-01}\"",
      "  $0",
      "/>"
    ],
    "description": "Insert a UTextField with common props"
  }
}
```

### UCard Snippets

```json
{
  "UCard Component": {
    "prefix": "UCard",
    "body": ["<UCard>", "  $0", "</UCard>"],
    "description": "Insert a UCard component"
  },
  "u-card Component": {
    "prefix": "u-card",
    "body": ["<u-card>", "  $0", "</u-card>"],
    "description": "Insert a u-card component"
  },
  "UCard with Title": {
    "prefix": "UCardTitle",
    "body": [
      "<UCard>",
      "  <UCardTitle>${1:Title}</UCardTitle>",
      "  <UCardText>$0</UCardText>",
      "</UCard>"
    ],
    "description": "Insert a UCard with title and text"
  },
  "UCard Full": {
    "prefix": "UCardFull",
    "body": [
      "<UCard>",
      "  <UCardTitle>${1:Title}</UCardTitle>",
      "  <UCardText>",
      "    ${2:Content}",
      "  </UCardText>",
      "  <UCardActions>",
      "    <UBtn>${3:Action}</UBtn>",
      "  </UCardActions>",
      "</UCard>"
    ],
    "description": "Insert a complete UCard structure"
  }
}
```

---

## Snippet Patterns

### Self-Closing Components

For components without children:

```json
{
  "UDivider": {
    "prefix": "UDivider",
    "body": ["<UDivider $0 />"],
    "description": "Insert a UDivider component"
  }
}
```

### Components with Slots

For components with named slots:

```json
{
  "UAlert with Icon": {
    "prefix": "UAlertIcon",
    "body": [
      "<UAlert>",
      "  <template #prepend>",
      "    <UIcon>${1:hugeicons:information-circle}</UIcon>",
      "  </template>",
      "  ${0:Alert message}",
      "</UAlert>"
    ],
    "description": "Insert a UAlert with icon slot"
  }
}
```

### Components with v-model

For form components:

```json
{
  "UCheckbox v-model": {
    "prefix": "UCheckboxModel",
    "body": ["<UCheckbox", "  v-model=\"${1:checked}\"", "  label=\"${2:Label}\"", "  $0", "/>"],
    "description": "Insert a UCheckbox with v-model"
  }
}
```

### Components with Events

For interactive components:

```json
{
  "UBtn with Click": {
    "prefix": "UBtnClick",
    "body": ["<UBtn @click=\"${1:handleClick}\">", "  ${0:Button Text}", "</UBtn>"],
    "description": "Insert a UBtn with click handler"
  }
}
```

---

## Advanced Snippet Features

### Choice Placeholders

Use `|` for dropdown choices:

```json
{
  "UBtn Variant": {
    "prefix": "UBtnVariant",
    "body": ["<UBtn variant=\"${1|elevated,flat,tonal,outlined,plain|}\">", "  $0", "</UBtn>"],
    "description": "Insert a UBtn with variant choice"
  }
}
```

### Multiple Lines

Use array for multi-line snippets:

```json
{
  "UContainer Grid": {
    "prefix": "UContainerGrid",
    "body": [
      "<UContainer>",
      "  <URow>",
      "    <UCol cols=\"${1:12}\" sm=\"${2:6}\" md=\"${3:4}\">",
      "      $0",
      "    </UCol>",
      "  </URow>",
      "</UContainer>"
    ],
    "description": "Insert a container with grid layout"
  }
}
```

### Mirrored Placeholders

Use same number for repeated values:

```json
{
  "UDialog v-model": {
    "prefix": "UDialogModel",
    "body": [
      "<UDialog v-model=\"${1:dialog}\">",
      "  <UCard>",
      "    <UCardTitle>${2:Title}</UCardTitle>",
      "    <UCardText>$0</UCardText>",
      "    <UCardActions>",
      "      <UBtn @click=\"${1:dialog} = false\">Close</UBtn>",
      "    </UCardActions>",
      "  </UCard>",
      "</UDialog>"
    ],
    "description": "Insert a UDialog with v-model"
  }
}
```

---

## Snippet Organization

### Group Related Snippets

Organize snippets by complexity:

1. **Basic** - Simple component tag
2. **With Props** - Common single prop
3. **Full** - All common props
4. **Special** - Specific use cases

### Example Structure

```json
{
  "// Basic": {},
  "UBtn Component": { ... },
  "u-btn Component": { ... },

  "// With Props": {},
  "UBtn with Color": { ... },
  "UBtn with Icon": { ... },

  "// Full": {},
  "UBtn Full": { ... },

  "// Special": {},
  "UBtn Icon Only": { ... }
}
```

---

## Common Props to Include

### All Components

- `class` - Custom CSS classes
- `style` - Inline styles

### Interactive Components

- `@click` - Click handler
- `@change` - Change handler
- `disabled` - Disabled state

### Form Components

- `v-model` - Two-way binding
- `label` - Input label
- `placeholder` - Placeholder text
- `hint` - Helper text
- `error` - Error state
- `error-messages` - Error messages

### Visual Components

- `color` - Color variant
- `variant` - Style variant
- `size` - Size variant
- `icon` - Icon name

---

## Testing Snippets

### VS Code Testing

1. Copy snippet file to `.vscode/snippets/`
2. Open a `.vue` file
3. Type the prefix
4. Verify tab stops work correctly
5. Check all variants render properly

### Snippet Checklist

- [ ] Both PascalCase and kebab-case versions
- [ ] Tab stops in logical order
- [ ] Final cursor position marked with `$0`
- [ ] Common props included
- [ ] Icons use Hugeicons format
- [ ] Description is clear and helpful
- [ ] Syntax is valid Vue template

---

## Snippet README

Create a `README.md` in the snippets folder:

```markdown
# @UltimateCoreUI Snippets

VS Code snippets for @UltimateCoreUI components.

## Installation

1. Copy snippets to `.vscode/snippets/` in your project
2. Or install the extension (when available)

## Usage

Type the component name and press Tab:

- `UBtn` - Basic button
- `u-btn` - Basic button (kebab-case)
- `UBtnFull` - Button with all props

## Available Snippets

### Buttons

- `UBtn`, `u-btn` - Basic button
- `UBtnColor` - Button with color
- `UBtnIcon` - Button with icon
- `UBtnFull` - Button with all props

### Text Fields

- `UTextField`, `u-text-field` - Basic text field
- `UTextFieldModel` - Text field with v-model
- `UTextFieldFull` - Text field with all props

[... more components ...]
```

---

## Example: Complete Component Snippet Set

```json
{
  "UAlert Component": {
    "prefix": "UAlert",
    "body": ["<UAlert>$0</UAlert>"],
    "description": "Insert a UAlert component"
  },
  "u-alert Component": {
    "prefix": "u-alert",
    "body": ["<u-alert>$0</u-alert>"],
    "description": "Insert a u-alert component"
  },
  "UAlert with Type": {
    "prefix": "UAlertType",
    "body": ["<UAlert type=\"${1|success,info,warning,error|}\">", "  $0", "</UAlert>"],
    "description": "Insert a UAlert with type"
  },
  "UAlert with Title": {
    "prefix": "UAlertTitle",
    "body": ["<UAlert title=\"${1:Title}\">", "  $0", "</UAlert>"],
    "description": "Insert a UAlert with title"
  },
  "UAlert Full": {
    "prefix": "UAlertFull",
    "body": [
      "<UAlert",
      "  type=\"${1|success,info,warning,error|}\"",
      "  title=\"${2:Title}\"",
      "  icon=\"${3:hugeicons:information-circle}\"",
      "  closable",
      "  @close=\"${4:handleClose}\"",
      ">",
      "  ${0:Alert message}",
      "</UAlert>"
    ],
    "description": "Insert a UAlert with all props"
  }
}
```

---

**End of Snippets Guidelines**
