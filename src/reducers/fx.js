import { RATES_FETCH_DATA_SUCCESS, RATES_HAS_ERRORED, RATES_IS_LOADING } from '../actions'

export default function fx (state = {
  isFetching: false,
  hasErrored: false,
  rates: {},
  base: ''
}, action) {
  switch (action.type) {
    case RATES_IS_LOADING:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RATES_FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        rates: Object.assign({}, action.rates, {[action.base]: 1}),
        base: action.base
      })
    case RATES_HAS_ERRORED:
      return Object.assign({}, state, {
        hasErrored: true
      })
    default:
      return state
  }
}
