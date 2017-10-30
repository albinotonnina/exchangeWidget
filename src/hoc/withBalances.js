import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchBalances, makeExchange } from '../actions'

export default function withBalances (WrappedComponent) {
  const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }

  const Wrapper = class extends React.Component {
    componentDidMount () {
      this.props.dispatch(fetchBalances())
    }

    transferBalance (transaction) {
      this.props.dispatch(makeExchange(transaction))
    }

    render () {
      return <WrappedComponent onTransferBalance={this.transferBalance.bind(this)} />
    }
  }

  Wrapper.propTypes = {
    balances: PropTypes.array
  }

  Wrapper.displayName = `WithBalances(${getDisplayName(WrappedComponent)})`

  return connect()(Wrapper)
}
