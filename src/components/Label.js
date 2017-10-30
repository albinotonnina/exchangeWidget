import React from 'react'
import PropTypes from 'prop-types'
import styles from './Label.scssm'

const Label = ({name, text}) => {
  return <div>
    <div className={styles.title}>{name}</div>
    <span>{text}</span>
  </div>
}

Label.propTypes = {
  name: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Label
