import React from 'react'
import classNames from 'classnames'
import styles from './RoundFlag.scssm'

const RoundFlag = ({className, flag, size}) => {
  const classes = classNames(styles.RoundFlag, styles[size], className)

  return <div className={classes}>
    <div className={classNames(styles.Flag, styles[flag])} />
  </div>
}

export default RoundFlag
