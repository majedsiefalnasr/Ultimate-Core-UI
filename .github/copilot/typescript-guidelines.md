# 🔷 TypeScript Guidelines

> Strict TypeScript guidelines for @UltimateCoreUI

---

## Core Principles

**CRITICAL**: This project enforces strict TypeScript rules:

- ❌ **NEVER use `any`**
- ✅ Use `unknown` when type is unclear
- ✅ Use union types for multiple possible types
- ✅ Use `Record<string, unknown>` for object types
- ✅ Create specific interfaces/types instead of `any`

---

## Type Safety Rules

### ❌ Bad (Forbidden)

```ts
const component = comp as any;
const handler = (data: any) => {};
const result: any = getValue();
const items: any[] = getItems();
```

### ✅ Good (Required)

```ts
type InstallableComponent = Component & {
  install?: (app: App) => void;
  name?: string;
};

const component = comp as unknown as InstallableComponent;

const handler = (data: Record<string, unknown>) => {
  // Type guard to narrow
  if ('value' in data && typeof data.value === 'string') {
    console.log(data.value);
  }
};

const result: string | number | undefined = getValue();

interface Item {
  id: string;
  name: string;
}
const items: Item[] = getItems();
```

---

## Common Patterns

### Type Guards

Use type guards to narrow `unknown` types:

```ts
function isValidComponent(comp: unknown): comp is Component {
  return typeof comp === 'object' && comp !== null && 'render' in comp;
}

if (isValidComponent(component)) {
  // TypeScript knows component is Component here
  app.component('MyComp', component);
}
```

### String Validation

```ts
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: unknown): void {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }
}
```

### Object Validation

```ts
interface User {
  id: string;
  name: string;
  email: string;
}

function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value &&
    'email' in value &&
    typeof (value as Record<string, unknown>).id === 'string' &&
    typeof (value as Record<string, unknown>).name === 'string' &&
    typeof (value as Record<string, unknown>).email === 'string'
  );
}

function processUser(data: unknown): void {
  if (isUser(data)) {
    console.log(data.name); // TypeScript knows data is User
  }
}
```

---

## Generic Constraints

Use proper generic constraints instead of `any`:

```ts
// ❌ Bad
function processValue<T = any>(value: T): T {
  return value;
}

// ✅ Good
function processValue<T extends string | number>(value: T): T {
  return value;
}

// ✅ Good with constraint
function processArray<T extends Record<string, unknown>>(items: T[]): T[] {
  return items.filter((item) => 'id' in item);
}
```

---

## Unknown with Narrowing

Always narrow `unknown` types before using them:

```ts
function handleData(data: unknown): void {
  // String check
  if (typeof data === 'string') {
    console.log(data.toUpperCase());
    return;
  }

  // Number check
  if (typeof data === 'number') {
    console.log(data.toFixed(2));
    return;
  }

  // Object check
  if (typeof data === 'object' && data !== null) {
    console.log(Object.keys(data));
    return;
  }

  // Array check
  if (Array.isArray(data)) {
    console.log(data.length);
    return;
  }
}
```

---

## Component Props Types

### Basic Props

```ts
interface Props {
  label?: string;
  value?: string | number;
  disabled?: boolean;
  variant?: 'elevated' | 'flat' | 'outlined';
}

const props = defineProps<Props>();
```

### Props with Defaults

```ts
interface Props {
  label?: string;
  variant?: 'elevated' | 'flat' | 'outlined';
  size?: 'small' | 'default' | 'large';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'elevated',
  size: 'default',
});
```

### Complex Props

```ts
interface Item {
  id: string;
  name: string;
  icon?: string;
}

interface Props {
  items: Item[];
  selectedId?: string;
  onSelect?: (item: Item) => void;
}

const props = defineProps<Props>();
```

---

## Slot Types

### Basic Slots

```ts
defineSlots<{
  default?: () => unknown;
  header?: () => unknown;
  footer?: () => unknown;
}>();
```

### Slots with Props

```ts
defineSlots<{
  default?: (props: { item: string; index: number }) => unknown;
  header?: (props: { title: string }) => unknown;
  [key: string]: (props: Record<string, unknown>) => unknown;
}>();
```

### Dynamic Slots

```ts
defineSlots<{
  [key: string]: (props: Record<string, unknown>) => unknown;
}>();
```

---

## Event Handler Types

### Basic Emits

```ts
interface Emits {
  (e: 'update:modelValue', value: string): void;
  (e: 'click', event: MouseEvent): void;
}

const emit = defineEmits<Emits>();
```

### Complex Emits

```ts
interface ChangePayload {
  value: string;
  index: number;
  source: 'user' | 'programmatic';
}

interface Emits {
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', payload: ChangePayload): void;
  (e: 'error', error: Error): void;
}

const emit = defineEmits<Emits>();

// Usage
emit('change', {
  value: 'test',
  index: 0,
  source: 'user',
});
```

---

## Utility Types

### Record Types

Use `Record<string, unknown>` for generic objects:

```ts
function processObject(obj: Record<string, unknown>): void {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}
```

### Union Types

```ts
type Status = 'idle' | 'loading' | 'success' | 'error';
type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

interface ComponentState {
  status: Status;
  size: Size;
  color: Color;
}
```

### Intersection Types

```ts
interface BaseProps {
  id: string;
  className?: string;
}

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

type EnhancedButtonProps = BaseProps & ButtonProps;

const button: EnhancedButtonProps = {
  id: 'my-button',
  onClick: () => console.log('clicked'),
  disabled: false,
};
```

---

## Ref Types

### Basic Refs

```ts
const count = ref<number>(0);
const name = ref<string>('');
const isActive = ref<boolean>(false);
```

### Object Refs

```ts
interface User {
  id: string;
  name: string;
  email: string;
}

const user = ref<User | null>(null);
const users = ref<User[]>([]);
```

### Template Refs

```ts
import { ref } from 'vue';
import type { ComponentPublicInstance } from 'vue';

const inputRef = ref<HTMLInputElement | null>(null);
const componentRef = ref<ComponentPublicInstance | null>(null);
```

---

## Computed Types

### Basic Computed

```ts
const count = ref(0);
const doubled = computed<number>(() => count.value * 2);
```

### Complex Computed

```ts
interface User {
  firstName: string;
  lastName: string;
}

const user = ref<User>({
  firstName: 'John',
  lastName: 'Doe',
});

const fullName = computed<string>(() => {
  return `${user.value.firstName} ${user.value.lastName}`;
});
```

---

## Function Types

### Event Handlers

```ts
type ClickHandler = (event: MouseEvent) => void;
type ChangeHandler = (value: string) => void;
type SubmitHandler = (data: Record<string, unknown>) => Promise<void>;

const handleClick: ClickHandler = (event) => {
  console.log('Clicked', event);
};

const handleChange: ChangeHandler = (value) => {
  console.log('Changed', value);
};

const handleSubmit: SubmitHandler = async (data) => {
  await submitForm(data);
};
```

### Generic Functions

```ts
function identity<T>(value: T): T {
  return value;
}

function mapArray<T, U>(array: T[], mapper: (item: T) => U): U[] {
  return array.map(mapper);
}

function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
  return array.filter(predicate);
}
```

---

## Async Types

### Promises

```ts
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  const data: unknown = await response.json();

  if (isUser(data)) {
    return data;
  }

  throw new Error('Invalid user data');
}
```

### Async Event Handlers

```ts
const handleSubmit = async (event: Event): Promise<void> => {
  event.preventDefault();

  try {
    await saveData();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
```

---

## Error Handling

### Type-Safe Error Handling

```ts
function handleError(error: unknown): void {
  if (error instanceof Error) {
    console.error('Error message:', error.message);
    console.error('Stack trace:', error.stack);
  } else if (typeof error === 'string') {
    console.error('Error string:', error);
  } else {
    console.error('Unknown error:', error);
  }
}

// Usage
try {
  riskyOperation();
} catch (error) {
  handleError(error);
}
```

### Custom Error Types

```ts
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateInput(value: string): void {
  if (!value) {
    throw new ValidationError('Value is required', 'input');
  }
}

try {
  validateInput('');
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Validation error in ${error.field}: ${error.message}`);
  } else {
    handleError(error);
  }
}
```

---

## Array and Object Typing

### Arrays

```ts
// ❌ Bad
const items: any[] = [];

// ✅ Good
interface Item {
  id: string;
  name: string;
}
const items: Item[] = [];

// ✅ Good with union
const values: (string | number)[] = [];

// ✅ Good with readonly
const constants: readonly string[] = ['a', 'b', 'c'];
```

### Objects

```ts
// ❌ Bad
const config: any = {};

// ✅ Good
interface Config {
  apiUrl: string;
  timeout: number;
  debug: boolean;
}
const config: Config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  debug: false,
};

// ✅ Good with Record
const translations: Record<string, string> = {
  hello: 'Hello',
  goodbye: 'Goodbye',
};

// ✅ Good with partial
const partialConfig: Partial<Config> = {
  debug: true,
};
```

---

## Best Practices Checklist

- [ ] Never use `any` - use `unknown` with type guards
- [ ] Define interfaces for complex types
- [ ] Use union types for multiple possible types
- [ ] Use generic constraints when appropriate
- [ ] Type all function parameters and return values
- [ ] Use type guards to narrow `unknown` types
- [ ] Define proper emit interfaces
- [ ] Type all refs with explicit types
- [ ] Use `Record<string, unknown>` for generic objects
- [ ] Handle errors with proper type checking

---

**End of TypeScript Guidelines**
