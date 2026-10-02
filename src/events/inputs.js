/**
 * You should trigger an alert when the user hits Enter after entering text in the
 * input with id "write-some-text". The alert text should be the text typed in the input.
 * If the input is empty, you should not trigger the alert.
 */
export function displayInputContentInAlertOnEnterKey() {
  const element = document.getElementById('write-some-text')
  if (element) {
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && element.value.trim() !== '') {
        alert(element.value)
      }
    })
  }
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when they press Enter or leave the field,
 * the text should be added as a new item in the list with id "list".
 */
export function addElementsInListOnEnterKey() {
  const input = document.getElementById('list-input')
  const list = document.getElementById('list')
  if (input && list) {
    const addItem = () => {
      const text = input.value.trim() // Check that the input is not empty
      if (text !== '') {
        const newItem = document.createElement('li')
        newItem.textContent = text
        list.appendChild(newItem)
        input.value = '' // clears the input after adding
      }
    }
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addItem()
      }
    })
    input.addEventListener('blur', () => {
      addItem()
    })
  }
}

/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
  const list = document.getElementById('list')
  if (list) {
    list.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        e.target.remove()
      }
    })
  }
}
