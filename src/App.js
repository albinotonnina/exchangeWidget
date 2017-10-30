import React from 'react'

import withBalances from './hoc/withBalances'
import withRates from './ExchangeWidget/hoc/withRates'
import ConverterContainer from './ExchangeWidget/containers/ConverterContainer'
import styles from './styles/App.scssm'
var WebFont = require('webfontloader')

const App = () => {
  WebFont.load({
    google: {
      families: ['Roboto:300,400,700']
    }
  })

  const Converter = withBalances(withRates(ConverterContainer))

  return <div className={styles.container}>
    <Converter />
  </div>
}

export default App
