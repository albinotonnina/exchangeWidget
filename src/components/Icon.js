import React from 'react'
import classNames from 'classnames'
import styles from './Icon.scssm'

const Icon = ({icon, className, size = 'xs'}) => {
  // https://webpack.js.org/guides/dependency-management/#require-with-expression
  const rawSvgContent = (require(`../assets/icons/${icon}.js`).default)()

  return <div className={classNames(className, styles.Icon, styles[size])}>
    {rawSvgContent}
  </div>
}

export default Icon
