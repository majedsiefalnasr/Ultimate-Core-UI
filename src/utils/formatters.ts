import { isToday } from './helpers';

/**
 * Extracts and returns initials from a full name.
 * Takes the first character of each word and converts it to uppercase.
 *
 * @param {string} value - The full name to extract initials from
 * @returns {string} The initials in uppercase (e.g., "John Doe" -> "JD")
 *
 * @example
 * avatarText('John Doe') // Returns: 'JD'
 * avatarText('Mary Jane Watson') // Returns: 'MJW'
 * avatarText('') // Returns: ''
 */
export const avatarText = (value: string): string => {
  if (!value) return '';
  const nameArray = value.split(' ');

  return nameArray.map((word) => word.charAt(0).toUpperCase()).join('');
};

/**
 * Formats large numbers into a more readable format.
 * Numbers above 9999 are abbreviated with 'k' suffix.
 * Numbers below 10000 are formatted with comma separators.
 *
 * @param {number} num - The number to format
 * @returns {string} The formatted number string
 *
 * @example
 * kFormatter(1234) // Returns: '1,234'
 * kFormatter(12345) // Returns: '12.3k'
 * kFormatter(1234567) // Returns: '1234.6k'
 * kFormatter(-5000) // Returns: '-5k'
 *
 * @see {@link https://twitter.com/fireship_dev/status/1565424801216311297|Intl Number Formatting}
 */
export const kFormatter = (num: number): string => {
  const regex = /\B(?=(\d{3})+(?!\d))/g;

  return Math.abs(num) > 9999
    ? `${Math.sign(num) * +(Math.abs(num) / 1000).toFixed(1)}k`
    : Math.abs(num).toFixed(0).replace(regex, ',');
};

/**
 * Formats a date string into a human-readable format using Intl.DateTimeFormat.
 * By default, formats as "Month Day, Year" (e.g., "Jan 15, 2024").
 *
 * @param {string} value - The date string to format (ISO format recommended)
 * @param {Intl.DateTimeFormatOptions} [formatting={ month: 'short', day: 'numeric', year: 'numeric' }] - Intl formatting options
 * @returns {string} The formatted date string, or the original value if empty
 *
 * @example
 * formatDate('2024-01-15') // Returns: 'Jan 15, 2024'
 * formatDate('2024-01-15', { month: 'long', day: 'numeric' }) // Returns: 'January 15'
 * formatDate('') // Returns: ''
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format|Intl.DateTimeFormat.format}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat|Intl.DateTimeFormat Constructor}
 */
export const formatDate = (
  value: string,
  formatting: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }
): string => {
  if (!value) return value;

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};

/**
 * Formats a date into a short, human-friendly representation.
 * If the date is today and `toTimeForCurrentDay` is true, returns time instead of date.
 * This provides better UX by showing "10:30 AM" for today instead of "Jan 15".
 *
 * @param {string} value - The date string to format (ISO format recommended)
 * @param {boolean} [toTimeForCurrentDay=true] - Whether to show time format for current day dates
 * @returns {string} The formatted date/time string
 *
 * @example
 * // If today is Jan 15, 2024
 * formatDateToMonthShort('2024-01-15T10:30:00') // Returns: '10:30 AM'
 * formatDateToMonthShort('2024-01-15T10:30:00', false) // Returns: 'Jan 15'
 * formatDateToMonthShort('2024-02-20') // Returns: 'Feb 20'
 */
export const formatDateToMonthShort = (value: string, toTimeForCurrentDay = true): string => {
  const date = new Date(value);
  let formatting: Record<string, string> = { month: 'short', day: 'numeric' };

  if (toTimeForCurrentDay && isToday(date)) formatting = { hour: 'numeric', minute: 'numeric' };

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};

/**
 * Prefixes positive numbers with a plus sign (+).
 * Negative numbers and zero remain unchanged.
 * Useful for displaying changes, deltas, or differences.
 *
 * @param {number} value - The number to format
 * @returns {string | number} The number prefixed with '+' if positive, otherwise the original number
 *
 * @example
 * prefixWithPlus(5) // Returns: '+5'
 * prefixWithPlus(-3) // Returns: -3
 * prefixWithPlus(0) // Returns: 0
 * prefixWithPlus(42.5) // Returns: '+42.5'
 */
export const prefixWithPlus = (value: number): string | number => (value > 0 ? `+${value}` : value);
