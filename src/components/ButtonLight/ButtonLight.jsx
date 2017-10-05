import React from 'react'
import PropTypes from 'prop-types'
import './ButtonLight.css'

const ButtonLight = ({ size, color, bgColor, roundSize, text }) => {

  let styles = {
    color,
    borderRadius: roundSize,
  }

  switch (size) {
  case 'big':
    return <button className={`ButtonLight ButtonLight--${size} ButtonLight--${bgColor}`} style={styles} >{text}</button>
  case 'small':
    return <button className={`ButtonLight ButtonLight--${size} ButtonLight--${bgColor}`} style={styles} >{text}</button>
  default:
    return <button className={`ButtonLight ButtonLight--${size} ButtonLight--${bgColor}`} style={styles} >{text}</button>
  }
}

ButtonLight.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  roundSize: PropTypes.string,
}

ButtonLight.defaultProps = {
  roundSize: 0,
  size: 'normal',
  text: 'ButtonLight'
}

export default ButtonLight
