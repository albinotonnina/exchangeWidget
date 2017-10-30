import React from 'react'
import RoundFlag from './RoundFlag'
import styles from './Exchange.scssm'

const ExchangeSelectItem = ({isocode, flag}) => {
  return <div className={styles.selectItem}>
    <div>{isocode}</div>
    <div className={styles.flag}>
      <RoundFlag className={styles.flag} size='xs' flag={flag} />
    </div>
  </div>
}

export default ExchangeSelectItem
