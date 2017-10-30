import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import Balance from '../../components/Balance'
import CurrencyDropdown from '../../components/CurrencyDropdown'
import Label from '../../components/Label'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { currencies } from '../../utils/currencies'

import styles from './Converter.scssm'

class Converter extends React.Component {
  onChangeAmount (side, event) {
    if ((event.target.value || '0').match(/^\d+(\.\d{1,2})?$/) === null) {
      return false
    } else {
      this.props.onChangeAmount(side, parseFloat(event.target.value) || 0)
    }
  }

  onChangeCurrency (side, item) {
    this.props.onChangeCurrency(side, item)
  }

  render () {
    const {top, bottom, currentRate, onTransferBalance} = this.props
    const invalidAmount = !top.amount || top.amount > top.balance.amount || top.amount === 0

    return <div>

      <h1>Exchange</h1>

      <div className={styles.container}>

        <div>

          <CurrencyDropdown items={currencies}
            onChange={this.onChangeCurrency.bind(this, 'top')}
            selected={top.isocode}
            label='from' />

          <TextField type='number' onInput={this.onChangeAmount.bind(this, 'top')} value={top.amount || 0} />

          <Balance balance={top.balance.amount} symbol={top.sign} uiStatus={top.amount > top.balance.amount ? 'error' : 'default'} />

        </div>

        <div>

          <CurrencyDropdown items={currencies}
            onChange={this.onChangeCurrency.bind(this, 'bottom')}
            selected={bottom.isocode}
            label='to' />

          <TextField type='number' onInput={this.onChangeAmount.bind(this, 'bottom')} value={bottom.amount || 0} />

          <Balance balance={bottom.balance.amount} symbol={bottom.sign} />

        </div>

      </div>

      <div className={styles.footer}>

        <div>
          <Label name={'Current rate'} text={currentRate} />
        </div>

        <div>
          <Button onClick={onTransferBalance} uiStatus={invalidAmount ? 'disabled' : 'default'} className='makeTransfer'>Exchange</Button>
        </div>

      </div>

    </div>
  }
}

Converter.propTypes = {
  top: PropTypes.shape({
    balance: PropTypes.shape({
      balance: PropTypes.number,
      isocode: PropTypes.string
    }),
    isocode: PropTypes.string,
    rate: PropTypes.number,
    sign: PropTypes.string,
    amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  bottom: PropTypes.shape({
    balance: PropTypes.shape({
      balance: PropTypes.number,
      isocode: PropTypes.string
    }),
    isocode: PropTypes.string,
    rate: PropTypes.number,
    sign: PropTypes.string,
    amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  onChangeAmount: PropTypes.func.isRequired,
  onChangeCurrency: PropTypes.func.isRequired,
  onTransferBalance: PropTypes.func.isRequired,
  currentRate: PropTypes.number

}

export default Converter
