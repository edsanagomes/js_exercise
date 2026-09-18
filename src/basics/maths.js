/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  if (typeof diameter !== 'number' || Number.isNaN(diameter) || diameter < 0) {
    //Sphere can't have negative size
    throw new Error('Unsupported type')
  }
  const radius = diameter / 2
  return (4 / 3) * Math.PI * radius ** 3
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    throw new Error('Unsupported type')
  }
  return Math.round(n * 10) / 10
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  if (
    !Array.isArray(grades) ||
    grades.length === 0 ||
    grades.some((grade) => typeof grade !== 'number' || Number.isNaN(grade))
  ) {
    throw new Error('Unsupported type')
  }
  let total = 0
  for (const grade of grades) {
    total = total + grade
  }
  return total / grades.length
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  if (!Array.isArray(grades) || grades.length === 0 || grades.some((grade) => typeof grade !== 'number' || Number.isNaN(grade))
  ) {
    throw new Error('Unsupported type')
  }
  let total = 0;
  for (const grade of grades) {
    total = total + grade
  }
  const average = total / grades.length;
  return Math.round(average * 10) / 10;
}
