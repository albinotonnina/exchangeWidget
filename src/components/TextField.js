import React from 'react'
import PropTypes from 'prop-types'
import styles from './TextField.scssm'

const TextField = ({type, onInput, value}) => {
  const calcFOntSize = 7 - (value.toString().length * 0.26)

  const fontSize = {
    fontSize: `${calcFOntSize}rem`
  }

  return <div className={styles.TextField}>
    <div className={styles.inputContainer}>
      <input type={type} onInput={onInput} value={value} className={styles.input} style={fontSize} />
    </div>
  </div>
}

TextField.propTypes = {
  exchange: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  onInput: PropTypes.func
}

TextField.defaultProps = {
  value: '',
  type: 'text',
  onInput: () => {}
}

export default TextField
