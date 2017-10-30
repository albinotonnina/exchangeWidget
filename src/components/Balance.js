import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Balance.scssm'

const Balance = ({symbol, balance, uiStatus}) => (
  <div className={styles.container}>
    <div className={styles.title}>
      Current Balance
    </div>
    <div className={classNames(styles.balance, styles[uiStatus])}>
      {symbol} {balance}
    </div>
  </div>
)

Balance.propTypes = {
  uiStatus: PropTypes.oneOf(['default', 'error']),
  symbol: PropTypes.string,
  balance: PropTypes.number
}

Balance.defaultProps = {
  uiStatus: 'default',
  symbol: '€',
  balance: 0
}

export default Balance
