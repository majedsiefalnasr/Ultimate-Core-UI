/**
 * Composable for generating truly unique IDs for form components
 * Combines Vue's useId with a random component to ensure uniqueness across stories
 */
import { useAttrs, useId } from 'vue';

let idCounter = 0;

/**
 * Generate a unique ID for a component
 * Falls back to provided id attribute if available
 *
 * @returns A unique ID string
 */
export function useUniqueId(): string {
  const attrs = useAttrs();
  const vueId = useId();

  // If an explicit id is provided, use it
  const explicitId = attrs.id as string | undefined;
  if (explicitId && explicitId.trim() !== '') {
    return explicitId;
  }

  // Generate a unique ID combining Vue's useId with additional uniqueness
  // This prevents conflicts when multiple stories render on the same page
  idCounter++;
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);

  return `${vueId}-${timestamp}-${random}-${idCounter}`;
}
