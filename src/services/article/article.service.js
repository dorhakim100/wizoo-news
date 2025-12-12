export const articleService = {
  getHebrewType,
}

function getHebrewType(type) {
  console.log(type)

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
