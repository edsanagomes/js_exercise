/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

/**
 * You need to change the color of the html element with the id "change-my-color"
 */
export function getElementFromDomAndChangeColorToRed() {
  const element = document.getElementById('change-my-color')
  element.style.color = 'red'
}

/**
 * You need to add two paragraphs in the div with id "add-your-elements-in-this-element".
 * The first paragraph must contain "Bonjour", the second "Toto".
 */
export function addElementsInDOM() {
  const elements = document.getElementById('add-your-elements-in-this-element')
  const p1 = document.createElement('p') //it only exists in computer's memory
  p1.textContent = 'Bonjour'
  const p2 = document.createElement('p')
  p2.textContent = 'Toto'
  elements.appendChild(p1)
  elements.appendChild(p2) // only use it when I create a brand-new element from scratch using Js
}

/**
 * You get an array of elements, and you have to add them as an HTML list inside
 * the element with id "add-list-here".
 * Each item in the list should have the background color indicated in the "color" property.
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {
  // Write your code here
}
