import React from 'react'
import './ColorBox.css'

const ColorBox = ({ colorValue, name }) => {
  let styles = {
    box: {
      backgroundColor: `#${colorValue}`,
    },
    value: {
      color: (name === 'Light' || name === 'Grey') ? 'rgb(50, 77, 91)' : '#fff',
      opacity: (name === 'Light' || name === 'Grey') ? '.5' : '1',
    }
  }
  return (
    <div className="ColorBox" style={ styles.box }>
      <div className="ColorBox__info">
        <div className="ColorBox__name">{ name }</div>
        <div className="ColorBox__value" style={styles.value} >{ colorValue }</div>
      </div>
      <div className="ColorBox__shades">
        <span className="ColorBox__shade ColorBox__shade--dark"></span>
        <span className="ColorBox__shade ColorBox__shade--light"></span>
      </div>

    </div>
  )
}

export default ColorBox
