import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
/**
 * The statless components for display button
 *
 * @param {string} text - isRequired props
 */
const Button = ({ size, color, bgColor, roundSize, text }) => {

  let styles = {
    color,
    borderRadius: roundSize,
  }

  switch (size) {
  case 'big':
    return <button className={`Button Button--${size} Button--${bgColor}`} style={styles} >{text}</button>
  case 'small':
    return <button className={`Button Button--${size} Button--${bgColor}`} style={styles} >{text}</button>
  default:
    return <button className={`Button Button--${size} Button--${bgColor}`} style={styles} >{text}</button>
  }
}

Button.propTypes = {
  /** text for button */
  text: PropTypes.string.isRequired,
  /** size button ['big' | 'small' | 'normal'] */
  size: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  roundSize: PropTypes.string,
}

Button.defaultProps = {
  roundSize: 0,
  size: 'normal',
  color: '#fff',
  bgColor: 'red'
}

export default Button
