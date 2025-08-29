// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(String(array1).replace(/,/g, '')) + Number(String(array2).replace(/,/g, ''));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return String(value).split('').reverse().join('') === String(value);
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (Number(input)) {
    return '';
  } else if (String(input) === '' || String(input) === null) {
    return 'Required field';
  } else if (Number(input) !== Number() || Number(input) !== 0 || Number(input) === 0) {
    return 'Must be a number besides 0';
  }
}
