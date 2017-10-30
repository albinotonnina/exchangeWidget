import { MAKE_EXCHANGE, RECEIVE_BALANCES } from '../actions'
import { roundAmount } from '../utils/currencies'

export default function balances (state = [], action) {
  switch (action.type) {
    case MAKE_EXCHANGE:

      return state.map((balance) => {
        if (action.transaction.top.isocode === balance.isocode) {
          return Object.assign({}, balance, {
            amount: roundAmount(balance.amount - action.transaction.top.amount)
          })
        } else if (action.transaction.bottom.isocode === balance.isocode) {
          return Object.assign({}, balance, {
            amount: roundAmount(balance.amount + action.transaction.bottom.amount)
          })
        }

        return balance
      })

    case RECEIVE_BALANCES:
      return action.balances
    default:
      return state
  }
}
