import React from 'react'
import PropTypes from 'prop-types'
import Converter from '../components/Converter'
import Success from '../../components/Success'

import { convertMoney, currencies, roundAmount } from '../../utils/currencies'

class ConverterContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      top: {isocode: currencies[0].isocode, value: 0},
      bottom: {isocode: currencies[1].isocode, value: 0},
      uiStatus: 'default'
    }
  }

  onChangeAmount (active, amount) {
    const {top, bottom} = this.state
    const topValue = active === 'top' ? amount : this.calculateChange(amount, bottom.isocode, top.isocode)
    const bottomValue = active === 'top' ? this.calculateChange(amount, top.isocode, bottom.isocode) : amount

    this.setCurrency(top.isocode, bottom.isocode, topValue, bottomValue)
  }

  onChangeCurrency (active, currency) {
    const {top, bottom} = this.state
    const newCurrency = currency.isocode

    let topCurrency, bottomCurrency, topValue, bottomValue

    // TODO: refactor this one a bit
    if (active === 'top') {
      topCurrency = newCurrency
      bottomCurrency = newCurrency === bottom.isocode ? top.isocode : bottom.isocode
      topValue = top.amount
      bottomValue = this.calculateChange(topValue, topCurrency, bottomCurrency)
    } else {
      topCurrency = newCurrency === top.isocode ? bottom.isocode : top.isocode
      bottomCurrency = newCurrency
      bottomValue = bottom.amount
      topValue = this.calculateChange(bottomValue, bottomCurrency, topCurrency)
    }

    this.setCurrency(topCurrency, bottomCurrency, topValue, bottomValue)
  }

  onTransferBalance () {
    this.props.onTransferBalance(this.state)
    this.resetState()
    this.setUiStatus('success')
  }

  setUiStatus (status) {
    this.setState({
      uiStatus: status
    })
  }

  resetState () {
    const {top, bottom} = this.state
    this.setCurrency(top.isocode, bottom.isocode, 0, 0)
  }

  calculateChange (amount, from, to) {
    const {rates} = this.props.fx
    return roundAmount(convertMoney(amount, from, to, rates))
  }

  setCurrency (top, bottom, fromValue, toValue) {
    this.setState({
      top: {amount: fromValue, isocode: top},
      bottom: {amount: toValue, isocode: bottom}
    })
  }

  generateProps (currency) {
    const {balances, fx} = this.props

    return {
      isocode: currency.isocode,
      balance: balances.find(balance => balance.isocode === currency.isocode) || {},
      sign: currencies.find(curr => curr.isocode === currency.isocode).sign,
      amount: currency.amount,
      rate: fx.rates[currency.isocode] || 0
    }
  }

  renderConverter () {
    const {top, bottom} = this.state
    const currentRate = this.calculateChange(1, top.isocode, bottom.isocode) || 0

    return <Converter
      top={this.generateProps(top)}
      bottom={this.generateProps(bottom)}
      onChangeAmount={this.onChangeAmount.bind(this)}
      onChangeCurrency={this.onChangeCurrency.bind(this)}
      onTransferBalance={this.onTransferBalance.bind(this)}
      currentRate={currentRate}
    />
  }

  renderSuccess () {
    return <Success onClick={this.setUiStatus.bind(this, 'default')} />
  }

  render () {
    if (this.state.uiStatus === 'default') {
      return this.renderConverter()
    } else if (this.state.uiStatus === 'success') {
      return this.renderSuccess()
    }
  }
}

ConverterContainer.propTypes = {
  fx: PropTypes.object.isRequired,
  balances: PropTypes.array.isRequired,
  onTransferBalance: PropTypes.func.isRequired
}

export default ConverterContainer
