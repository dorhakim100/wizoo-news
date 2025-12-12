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

export function getColorNameFromType(type) {
  switch (type) {
    case 'urban-renewal':
      return 'green'

    case 'industry-news':
      return 'orange'
    case 'income-producing':
      return 'blue'

    case 'architecture':
      return 'pink'

    case 'residential-real-estate':
      return 'gold'

    case 'opinions-analysis':
      return 'bottle-green'

    case 'faces-behind':
      return 'scarlet'

    default:
      return 'gray'
  }
}
