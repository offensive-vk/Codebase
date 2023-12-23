export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Clicked  ${counter} times `
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
