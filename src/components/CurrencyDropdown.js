import React from 'react'
import Exchange from './Exchange'
import Icon from './Icon'
import styles from './CurrencyDropdown.scssm'
import classNames from 'classnames'

// import PropTypes from 'prop-types'

class Dropdown extends React.Component {
  constructor () {
    super()

    this.state = {
      open: false
    }
  }

  toggleDropdown () {
    this.setState({
      open: !this.state.open
    })
  }

  hideDropdown () {
    this.setState({
      open: false
    })
  }

  onChange (item) {
    this.props.onChange(item)
  }

  onBlur () {
    // TODO: change this, very lame :)
    setTimeout(() => {
      this.hideDropdown()
    }, 200)
  }

  getSelectedEl () {
    const selectedItem = this.props.items.find(item => item.isocode === this.props.selected)
    return <Exchange {...selectedItem} />
  }

  getOtherItems () {
    const {items, selected} = this.props

    const el = items
      .filter((item) => item.isocode !== selected)
      .map(item => (
        <button className={styles.DropdownItem} key={item.isocode}
          onClick={this.onChange.bind(this, item)}>
          <Exchange {...item} />
        </button>
      ))

    return <span className={styles.Transition}>
      <div className={styles.DropdownWrapper}>
        <div className={styles.itemsWrapper}>
          {el}
        </div>
      </div>
    </span>
  }

  render () {
    return <div className={classNames(styles.DropdownBox, {[styles.focused]: this.state.open})}>

      <div className={classNames(styles.DropdownField, styles.typeField, styles.bumpedLabel)}>

        <div className={styles.inputContainer}>

          <Icon className={styles.dropdownIcon} icon='chevron' />

          <label className={styles.label}>{this.props.label}</label>

          <button className={styles.inputBtn} onClick={this.toggleDropdown.bind(this)} onBlur={this.onBlur.bind(this)}>
            {this.getSelectedEl()}
          </button>

          <div className={styles.border} />
          <div className={styles.borderFocus} />
        </div>
      </div>

      {this.state.open && this.getOtherItems()}

    </div>
  }
}

Dropdown.propTypes = {}

export default Dropdown
