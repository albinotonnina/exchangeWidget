import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactInterval from 'react-interval'

import { fetchRates } from '../../actions'

export default function withRates (WrappedComponent) {
  const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }

  const Wrapper = class extends React.Component {
    constructor () {
      super()
      this.fetchRates = this.fetchRates.bind(this)
    }

    componentDidMount () {
      this.fetchRates()
    }

    fetchRates () {
      const {dispatch} = this.props
      dispatch(fetchRates())
    }

    render () {
      return <div>
        <ReactInterval timeout={10000} enabled={false} callback={this.fetchRates} />
        <WrappedComponent {...this.props}
        />
      </div>
    }
  }

  Wrapper.propTypes = {
    fx: PropTypes.shape({
      isFetching: PropTypes.bool.isRequired,
      hasErrored: PropTypes.bool.isRequired,
      rates: PropTypes.object
    }).isRequired,
    balances: PropTypes.array
  }

  const mapStateToProps = (state) => ({fx: state.fx, balances: state.balances})

  Wrapper.displayName = `WithRates(${getDisplayName(WrappedComponent)})`

  return connect(mapStateToProps)(Wrapper)
}
