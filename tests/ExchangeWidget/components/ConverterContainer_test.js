/* global describe, it, expect, jest */

import React from 'react'
import { mount } from 'enzyme'

import ConverterContainer from '../../../src/ExchangeWidget/containers/ConverterContainer'
import Converter from '../../../src/ExchangeWidget/components/Converter'

describe('ConverterContainer', () => {
  const fx = {
    rates: {
      EUR: 0.8617,
      GBP: 0.76375,
      USD: 1
    }
  }

  const balances = [
    {isocode: 'GBP', balance: 10},
    {isocode: 'USD', balance: 680},
    {isocode: 'EUR', balance: 1}
  ]

  const mockTransferBalance = jest.fn()

  it(`should render a Converter`, () => {
    const wrapper = mount(<ConverterContainer fx={fx} balances={balances} onTransferBalance={mockTransferBalance} />)

    expect(wrapper.find(Converter).length).toBe(1)
  })

  it(`should render a Converter with the right amount of props`, () => {
    const wrapper = mount(<ConverterContainer fx={fx} balances={balances} onTransferBalance={mockTransferBalance} />)
    const ConverterInstance = wrapper.find(Converter)
    expect(Object.keys(ConverterInstance.props()).length).toBe(6)
  })

  it(`should render a Converter with the right props`, () => {
    const wrapper = mount(<ConverterContainer fx={fx} balances={balances} onTransferBalance={mockTransferBalance} />)
    const ConverterProps = wrapper.find(Converter).props()

    expect(ConverterProps.top).toEqual({
      isocode: 'GBP',
      balance: {isocode: 'GBP', balance: 10},
      sign: '£',
      amount: undefined,
      rate: 0.76375
    }
    )
  })

  // TODO: Add tests, in case I get hired.
})
