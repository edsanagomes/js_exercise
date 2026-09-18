/**
 * @param {array<string>} array An array containing words and sentences
 * @return {array<string>} An array with all words isolated, and with empty strings removed
 */
export function splitAllStringsByWordAndFilterEmptyOnes(array) {
  if (!Array.isArray(array)) {
    throw new Error('Unsupported type')
  }
  return array
    .join(' ')
    .split(' ')
    .filter((word) => word !== '')
}

/**
 * @param {*[]} array1
 * @param {*[]} array2
 * @return {*[]} return an array containing all elements from the two given arrays
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
export function concatenateArrays(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error('Unsupported type')
  }
  return [...array1, ...array2]
}

/**
 * @param {array} array An array of arbitrary elements
 * @param {number} index The position at which to start replacing elements
 * @param {...*} newElements The new elements to insert at the given position
 * @return {array<*>} A new array with the replacements applied. The original array must not be modified.
 */
export function replaceElementsInArrayAtAGivenPlace(
  array,
  index,
  ...newElements
) {
  if (
    typeof index !== 'number' ||
    !Array.isArray(array) ||
    index < 0 ||
    index >= array.length
  ) {
    throw new Error('Unsupported type')
  }
  const result = [...array]
  result.splice(index, newElements.length , ...newElements)
  return result
}
