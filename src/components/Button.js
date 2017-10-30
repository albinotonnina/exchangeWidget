import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Button.scssm'

const Button = ({onClick, children, uiStatus, className}) => {
  return <button onClick={onClick}
    disabled={uiStatus === 'disabled'}
    className={classNames(styles.button, className)}>{children}</button>
}

Button.propTypes = {
  uiStatus: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: () => {
    // console.log('click')
  }
}

export default Button
