/**
 * In JavaScript we can use the fetch function to make HTTP calls over the network.
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * When the user clicks on the button with id "click-to-fetch",
 * you have to call this url : https://api.github.com/octocat
 * Then, display the text content returned by the API in the "pre" element with id "display-here".
 * Handle potential network errors gracefully.
 */
export function fetchDataOnClick() {
  const user = document.getElementById('click-to-fetch')
  const url = 'https://api.github.com/octocat'
  user.addEventListener('click', async () => {
    try {
      const response = await fetch(url)
      const result = await response.text()
      document.getElementById('display-here').textContent = result
    } catch (e) {
      console.error(e)
    }
  })
}
