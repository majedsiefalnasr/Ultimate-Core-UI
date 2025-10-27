/**
 * Checks if a value is empty (null, undefined, empty string, or empty array).
 *
 * @param {unknown} value - The value to check
 * @returns {boolean} True if the value is empty, false otherwise
 *
 * @example
 * isEmpty(null) // Returns: true
 * isEmpty(undefined) // Returns: true
 * isEmpty('') // Returns: true
 * isEmpty([]) // Returns: true
 * isEmpty('hello') // Returns: false
 * isEmpty([1, 2, 3]) // Returns: false
 * isEmpty(0) // Returns: false
 */
export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined || value === '') return true;

  return !!(Array.isArray(value) && value.length === 0);
};

/**
 * Type guard that checks if a value is null or undefined.
 * Narrows the type to `undefined | null` when true.
 *
 * @param {unknown} value - The value to check
 * @returns {boolean} True if the value is null or undefined, false otherwise
 *
 * @example
 * isNullOrUndefined(null) // Returns: true
 * isNullOrUndefined(undefined) // Returns: true
 * isNullOrUndefined(0) // Returns: false
 * isNullOrUndefined('') // Returns: false
 * isNullOrUndefined(false) // Returns: false
 */
export const isNullOrUndefined = (value: unknown): value is undefined | null => {
  return value === null || value === undefined;
};

/**
 * Checks if a value is an array and has no elements.
 *
 * @param {unknown} arr - The value to check
 * @returns {boolean} True if the value is an empty array, false otherwise
 *
 * @example
 * isEmptyArray([]) // Returns: true
 * isEmptyArray([1, 2, 3]) // Returns: false
 * isEmptyArray(null) // Returns: false
 * isEmptyArray('') // Returns: false
 * isEmptyArray({}) // Returns: false
 */
export const isEmptyArray = (arr: unknown): boolean => {
  return Array.isArray(arr) && arr.length === 0;
};

/**
 * Type guard that checks if a value is a plain object (not null, not an array).
 * Narrows the type to `Record<string, unknown>` when true.
 *
 * @param {unknown} obj - The value to check
 * @returns {boolean} True if the value is a plain object, false otherwise
 *
 * @example
 * isObject({}) // Returns: true
 * isObject({ key: 'value' }) // Returns: true
 * isObject([]) // Returns: false
 * isObject(null) // Returns: false
 * isObject('string') // Returns: false
 * isObject(123) // Returns: false
 */
export const isObject = (obj: unknown): obj is Record<string, unknown> =>
  obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj);

/**
 * Checks if a given date is today's date.
 * Compares day, month, and year to determine if the date matches the current date.
 *
 * @param {Date} date - The date to check
 * @returns {boolean} True if the date is today, false otherwise
 *
 * @example
 * // Assuming today is October 26, 2025
 * isToday(new Date('2025-10-26')) // Returns: true
 * isToday(new Date('2025-10-25')) // Returns: false
 * isToday(new Date('2024-10-26')) // Returns: false
 * isToday(new Date()) // Returns: true
 */
export const isToday = (date: Date): boolean => {
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};
