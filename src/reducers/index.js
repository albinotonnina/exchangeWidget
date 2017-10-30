import { combineReducers } from 'redux'
import fx from './fx'
import balances from './balances'

const rootReducer = combineReducers({
  fx,
  balances
})

export default rootReducer
