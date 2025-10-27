/**
 * Converts a hexadecimal color string to RGB format.
 * Supports both shorthand (3-digit) and full (6-digit) hex formats, with or without '#' prefix.
 *
 * @param {string} hex - The hexadecimal color string to convert (e.g., "#FF5733", "03F", "#0033FF")
 * @returns {string | null} RGB values as a comma-separated string (e.g., "255,87,51"), or null if invalid
 *
 * @example
 * hexToRgb('#FF5733') // Returns: '255,87,51'
 * hexToRgb('03F') // Returns: '0,51,255'
 * hexToRgb('#0033FF') // Returns: '0,51,255'
 * hexToRgb('invalid') // Returns: null
 */
export const hexToRgb = (hex: string): string | null => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  hex = hex.replace(shorthandRegex, (m: string, r: string, g: string, b: string) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? `${Number.parseInt(result[1], 16)},${Number.parseInt(result[2], 16)},${Number.parseInt(result[3], 16)}`
    : null;
};

/**
 * Converts an RGB or RGBA color string to hexadecimal format.
 * Optionally removes the alpha channel to produce a 6-digit hex code.
 *
 * @param {string} rgba - The RGB or RGBA color string (e.g., "rgb(255, 87, 51)" or "rgba(255, 87, 51, 0.5)")
 * @param {boolean} [forceRemoveAlpha=false] - If true, removes the alpha channel from the output
 * @returns {string} The hexadecimal color string (e.g., "#FF5733" or "#FF573380")
 *
 * @example
 * rgbaToHex('rgb(255, 87, 51)') // Returns: '#ff5733'
 * rgbaToHex('rgba(255, 87, 51, 0.5)') // Returns: '#ff573380'
 * rgbaToHex('rgba(255, 87, 51, 0.5)', true) // Returns: '#ff5733'
 * rgbaToHex('rgba(0, 51, 255, 1)') // Returns: '#0033ffff'
 */
export const rgbaToHex = (rgba: string, forceRemoveAlpha = false): string => {
  return `#${rgba
    .replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
    .split(',') // splits them at ","
    .filter((string, index) => !forceRemoveAlpha || index !== 3)
    .map((string) => Number.parseFloat(string)) // Converts them to numbers
    .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
    .map((number) => number.toString(16)) // Converts numbers to hex
    .map((string) => (string.length === 1 ? `0${string}` : string)) // Adds 0 when length of one number is 1
    .join('')}`;
};
