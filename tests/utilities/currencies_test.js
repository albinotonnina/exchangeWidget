/* global describe, it, expect */
import { convertMoney, roundAmount } from '../../src/utils/currencies'

describe('Currencies', () => {
  const rates = {
    EUR: 0.8617,
    GBP: 0.76375,
    USD: 1
  }

  it('should calculate using base currency', () => {
    expect(convertMoney(1, 'USD', 'GBP', rates)).toEqual(0.76375)
    expect(convertMoney(1, 'USD', 'EUR', rates)).toEqual(0.8617)
    expect(convertMoney(469.23, 'USD', 'GBP', rates)).toEqual(358.3744125)
  })

  it('should calculate not using base currency', () => {
    expect(convertMoney(1, 'GBP', 'EUR', rates)).toEqual(1.1282487725040915)
    expect(convertMoney(2, 'GBP', 'EUR', rates)).toEqual(2.256497545008183)
    expect(convertMoney(999.99, 'GBP', 'EUR', rates)).toEqual(1128.2374900163666)
    expect(convertMoney(1, 'EUR', 'USD', rates)).toEqual(1.160496692584426)
    expect(convertMoney(2, 'EUR', 'USD', rates)).toEqual(2.320993385168852)
  })

  it('should round values', () => {
    expect(roundAmount(1.1282487725040915)).toEqual(1.13)
    expect(roundAmount(2.256497545008183)).toEqual(2.26)
    expect(roundAmount(1128.2374900163666)).toEqual(1128.24)
  })
})
