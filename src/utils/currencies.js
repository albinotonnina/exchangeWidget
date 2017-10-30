export const currencies = [
  {
    isocode: 'GBP',
    sign: '£',
    flag: 'gb'
  },
  {
    isocode: 'EUR',
    sign: '€',
    flag: 'eu'
  },
  {
    isocode: 'USD',
    sign: '$',
    flag: 'us'
  }
]

export function convertMoney (amount = 0, from, to, rates) {
  return (parseFloat(amount) / rates[from]) * rates[to]
}

export function roundAmount (num, places = 2) {
  return +(Math.round(num + 'e+' + places) + 'e-' + places)
}
