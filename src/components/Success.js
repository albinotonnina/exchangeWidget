import React from 'react'
// import classNames from 'classnames'
import Button from './Button'
import Icon from './Icon'
import styles from './Success.scssm'
// import styles from './RoundFlag.scssm'

const Success = ({onClick}) => {
  // const classes = classNames(styles.RoundFlag, styles[size], className)

  return <div className={styles.container}>

    <div>
      <div className={styles.successIcon}>
        <Icon icon='checkLight' size='sm' />
      </div>

      <div className={styles.successMessage}>

        <h2>It's done!</h2>
        <div className={styles.successReminder}>We have sent you an email for confirmation</div>

      </div>
    </div>

    <div>
      <Button onClick={onClick}>Done</Button>
    </div>

  </div>
}

export default Success
