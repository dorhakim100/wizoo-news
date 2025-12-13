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

export function makeId(length = 5) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let id = ''

  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return id
}
