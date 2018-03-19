import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import {COLORS} from '../Themes/default'
import Social from '../Social'


const Header = ({openResume, color, bgColor, titleColor, subTitleColor }) => {
  return (
    <header
      className="Header"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}>
      <div className="Header__container">
        <h1 className="Header__title" style={{color: titleColor}}>
          WebPortfolio
          <strong className="Header__titleName" style={{color:subTitleColor}}>
            Vasily Guzov
            <div className="Header__rightContainer">
              <Social />
            </div>
          </strong>
        </h1>

        <p className="Header__bio">Hi! My name is Vasily Guzov. I'm a profesional actor and amauter photographer. Here you will find my reflections aboute life, my photo works as well as some photos with me. Thanks for watching.</p>
        <i onClick={openResume} className="Header__resumeBtn">resume</i>
      </div>
    </header>
  )
}

Header.propTypes = {
  openResume: PropTypes.func.isRequired
}

const { bgDark, baseFont, accent, bgLight } = COLORS;

Header.defaultProps = {
  color: baseFont,
  bgColor: bgDark,
  titleColor: accent,
  subTitleColor: bgLight,
}

export default Header
