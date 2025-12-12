export function navigateToLink(link) {
  window.open(link)
}

export function getArrayOfNumbers(min, max) {
  const array = Array.from({ length: max - min + 1 }, (_, i) => min + i)
  return array.map((num) => num + '')
}

export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
