/**
 * You should trigger an alert when the user hits Enter after entering text in the
 * input with id "write-some-text". The alert text should be the text typed in the input.
 * If the input is empty, you should not trigger the alert.
 */
export function displayInputContentInAlertOnEnterKey() {
  const element = document.getElementById('write-some-text')
  element.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      alert('Enter')
    }
  })
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when they press Enter or leave the field,
 * the text should be added as a new item in the list with id "list".
 */
export function addElementsInListOnEnterKey() {
  const input = document.getElementById('list-input')
  const list = document.getElementById('list')
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const newItem = document.createElement('li')
      newItem.textContent = input.value
      list.appendChild(newItem)
    }
  })
}

/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
  // Write your code here
}
