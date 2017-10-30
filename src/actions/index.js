/* global fetch */
export const RATES_HAS_ERRORED = 'RATES_HAS_ERRORED'
export const RATES_IS_LOADING = 'RATES_IS_LOADING'
export const RATES_FETCH_DATA_SUCCESS = 'RATES_FETCH_DATA_SUCCESS'
export const RECEIVE_BALANCES = 'RECEIVE_BALANCES'
export const MAKE_EXCHANGE = 'MAKE_EXCHANGE'
export const RESET_EXCHANGE = 'RESET_EXCHANGE'

const API_ENDPOINT = 'http://api.fixer.io/latest?symbols=USD,GBP,EUR&base=USD'

function ratesHasErrored (bool) {
  return {
    type: RATES_HAS_ERRORED,
    hasErrored: bool
  }
}

function ratesIsLoading (bool) {
  return {
    type: RATES_IS_LOADING,
    isLoading: bool
  }
}

function ratesFetchDataSuccess (items) {
  return {
    type: RATES_FETCH_DATA_SUCCESS,
    rates: items.rates,
    base: items.base
  }
}

export function fetchRates () {
  return (dispatch) => {
    dispatch(ratesIsLoading(true))

    fetch(API_ENDPOINT)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(ratesIsLoading(false))

        return response
      })
      .then((response) => response.json())
      .then((items) => dispatch(ratesFetchDataSuccess(items)))
      .catch(() => dispatch(ratesHasErrored(true)))
  }
}

export function makeExchange (transaction) {
  return {
    type: MAKE_EXCHANGE,
    transaction
  }
}

export function fetchBalances () {
  return {
    type: RECEIVE_BALANCES,
    balances: [
      {
        isocode: 'GBP',
        amount: 14
      },
      {
        isocode: 'USD',
        amount: 2
      },
      {
        isocode: 'EUR',
        amount: 99
      }
    ]
  }
}
