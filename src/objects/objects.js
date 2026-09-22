/**
 * In JavaScript, objects are really different from Java or other object-based languages.
 * The syntax looks more like declaring structs, but they can also carry methods.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects
 */

/**
 * @return {Object} you should return a new object containing two properties, first_name and last_name.
 * The values of the properties should be "Toto", "Tutu"
 */
export function createUserObject() {
  const objects = {
    first_name: 'Toto',
    last_name: 'Tutu',
  }
  return objects
}

/**
 * @param {{first_name: string, last_name: string}} object A user object
 * @return {string} A concatenation of the first and last name, separated with a space
 */
export function accessPropertiesInObjects(object) {
  return object.first_name + ' ' + object.last_name
}

/**
 * @param {Object} object
 * @return {{keys: Array<string>, values: Array<string>}} A new object containing two properties: "keys" and "values".
 * "keys" should contain all original object keys mapped to uppercase,
 * "values" should contain all original object values mapped to lowercase
 */
export function iteratesThroughObjectValuesAndProperties(object) {
  const newObject = {
    keys: Object.keys(object).map((key) => key.toUpperCase()),
    values: Object.values(object).map((value) => value.toLowerCase()),
  }
  return newObject
}

/**
 * Return the name of the youngest and the oldest user in the array.
 * The original array must not be modified.
 * @param {Array<{name: string, age: number}>} users
 * @return {{younger: string, older: string}}
 */
export function retrieveMaximumMinimumUserAges(users) {
  let younger = users[0]
  let older = users[0]
  for (const user of users) {
    if (user.age < younger.age) {
      younger = user
    }
    if (user.age >= older.age) {
      older = user
    }
  }
  return { younger: younger.name, older: older.name }
}

/**
 * In JavaScript, objects can be represented as strings using JSON (JavaScript Object Notation).
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
 * @param {string} string A valid JSON string
 * @return {Object} An object retrieved by parsing the string
 */
export function parseJavaScriptObjectNotation(string) {
  return JSON.parse(string)
}

/**
 * @param {Object} object
 * @return {string} A string representing the given object
 */
export function stringifyJavaScriptObjectNotation(object) {
  // Write your code here
}
