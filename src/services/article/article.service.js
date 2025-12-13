export const articleService = {
  getHebrewType,
  getColorNameFromType,
}

function getHebrewType(type) {
  switch (type) {
    case 'urban-renewal':
      return 'התחדשות עירונית'

    case 'industry-news':
      return 'חדשות הענף'

    case 'income-producing':
    case 'income-producing-real-estate-and-investments':
      return 'נדלן מניב השקעות'

    case 'architecture':
    case 'design-and-architecture':
      return 'עיצוב ואדריכלות'

    case 'residential-real-estate':
      return 'נדלן למגורים'

    case 'opinions-analysis':
    case 'opinions-and-analysis':
      return 'דעות וניתוחים'

    case 'faces-behind':
    case 'the-faces-behind':
      return 'הפנים מאחורי'

    default:
      return type
  }
}

function getColorNameFromType(type) {
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
