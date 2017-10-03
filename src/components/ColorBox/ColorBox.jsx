import React from 'react'
import './ColorBox.css'

const ColorBox = ({ colorValue, name }) => {
  let styles = {
    box: {
      backgroundColor: `#${colorValue}`,
    }
  }
  return (
    <div className="ColorBox" style={ styles.box }>
      <div className="ColorBox__info">
        <div className="ColorBox__name">{ name }</div>
        <div className="ColorBox__value" >{ colorValue }</div>
      </div>
      <div className="ColorBox__shades">
        <span className="ColorBox__shade ColorBox__shade--dark"></span>
        <span className="ColorBox__shade ColorBox__shade--light"></span>
      </div>

    </div>
  )
}

export default ColorBox
