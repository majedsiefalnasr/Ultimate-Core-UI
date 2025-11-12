# 🧠 Copilot Instructions for @UltimateCoreUI

> **Version**: 3.0  
> **Last Updated**: November 2025  
> **Purpose**: Main entry point for @UltimateCoreUI development guidelines

---

## 📋 Overview

The `@UltimateCoreUI` library extends **Vuetify** components with a unified design system and enhanced functionality. Each U-component is a **wrapper** that:

- ✅ Inherits **all** Vuetify props, slots, emits, and attrs
- ✅ Supports both `<UComponent>` (PascalCase) and `<u-component>` (kebab-case)
- ✅ Maintains full Vuetify API compatibility
- ✅ Allows optional enhancements when needed

---

## 📚 Documentation Structure

This documentation is split into focused files for better maintainability:

<!-- Component Guidelines -->

file-service://./.github/copilot/components-guidelines.md

<!-- Storybook Guidelines -->

file-service://./.github/copilot/storybook-guidelines.md

<!-- TypeScript Guidelines -->

file-service://./.github/copilot/typescript-guidelines.md

<!-- Icon Guidelines -->

file-service://./.github/copilot/icon-guidelines.md

<!-- File Organization -->

file-service://./.github/copilot/file-organization.md

<!-- VS Code Snippets -->

file-service://./.github/copilot/snippets-guidelines.md

---

## 🎯 Core Principles

1. **Transparency**: Components pass through all Vuetify functionality
2. **Consistency**: Follow the canonical `UBtn` pattern for all components
3. **Documentation**: Every component includes JSDoc, stories, and snippets
4. **Type Safety**: Strict TypeScript without `any` types
5. **Icon Consistency**: Always use Iconify Hugeicons format

---

## ⚡ Quick Start

### Creating a New Component

1. **Generate Component File** → Follow component guidelines
2. **Generate Story File** → Follow storybook guidelines
3. **Generate Snippet File** → Follow snippet guidelines
4. **Add Type Definitions** → Follow TypeScript guidelines
5. **Update Exports** → Add to `index.ts` files

### Component Checklist

- [ ] Component extends Vuetify base with `v-bind="$attrs"`
- [ ] `inheritAttrs: false` is set
- [ ] All slots forwarded dynamically
- [ ] JSDoc with `@component`, `@extends`, `@example`
- [ ] Both PascalCase and kebab-case work
- [ ] Optional SCSS file imported if needed
- [ ] Story file created with multiple examples
- [ ] VS Code snippets created (both naming styles)
- [ ] No `any` types in TypeScript code
- [ ] All icons use Iconify Hugeicons format (`hugeicons:icon-name-##`)

---

## 🚀 Story Checklist

- [ ] Import `StoryFn` from `@storybook/vue3`
- [ ] Define `ComponentArgs` interface
- [ ] Create meta configuration with proper title
- [ ] Define argTypes with controls and descriptions
- [ ] Use U-components (not V-components) in templates
- [ ] Import needed U-components for layout
- [ ] Separate `.args` and `.parameters` definitions
- [ ] Include documentation source code
- [ ] Multiple story examples (Default, Variants, Interactive)
- [ ] All icons use Iconify Hugeicons format

---

## 📖 Key Rules Summary

1. ✅ Follow the canonical `UBtn` structure for all components
2. ✅ Always use Vuetify base components in Vue files
3. ✅ Always use U-components in story templates and docs
4. ✅ Use `StoryFn<ComponentArgs>` pattern (never `StoryObj`)
5. ✅ Support both `<UComponent>` and `<u-component>` naming
6. ✅ Generate snippets for both naming styles
7. ✅ No `any` types - use `unknown` with type guards
8. ✅ Separate story function, `.args`, and `.parameters`
9. ✅ Import U-components for story layouts
10. ✅ Include comprehensive JSDoc documentation
11. ✅ **ALWAYS use Iconify Hugeicons (`hugeicons:icon-name-##`) - NEVER use MDI or other icon libraries**

---

## 🔧 Common Commands

### Component Generation

```bash
# Generate new component
npm run generate:component UComponentName

# Generate with styles
npm run generate:component UComponentName --with-styles
```

### Story Generation

```bash
# Generate story file
npm run generate:story UComponentName
```

### Testing

```bash
# Run Storybook
npm run storybook

# Build Storybook
npm run build-storybook

# Type check
npm run type-check
```

---

## 🆘 Troubleshooting

### Common Issues

**Issue**: Slots not forwarding properly  
**Solution**: Ensure using `v-for="(_, name) in $slots"` with dynamic slot names

**Issue**: TypeScript errors with `any`  
**Solution**: Replace with `unknown` and add type guards

**Issue**: Stories using V-components  
**Solution**: Import and use U-components instead

**Issue**: Props not passing through  
**Solution**: Verify `v-bind="$attrs"` and `inheritAttrs: false`

**Issue**: Icons not displaying  
**Solution**: Ensure using `hugeicons:icon-name-##` format

---

## 📝 Version History

- **v3.0** (November 2025): Split instructions into focused files, improved organization
- **v2.1** (November 2025): Added mandatory Iconify Hugeicons guidelines
- **v2.0** (October 2025): Complete reorganization with enhanced guidelines
- **v1.5**: Added U-component requirement for stories
- **v1.0**: Initial copilot instructions

---

## 📞 Support

For questions or issues:

- Check the specific guideline files linked above
- Review example components like `UBtn` or `UAlert`
- Consult the project README.md

---

**End of Main Instructions**
