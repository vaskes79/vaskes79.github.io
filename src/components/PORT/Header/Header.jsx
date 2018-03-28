import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import Social from '../Social'


const Header = ({title, subTitle, handleOpenResume}) => {
  return (
    <header className="Header">
      <div className="Header__container">
        <h1 className="Header__title">
          {title}
          <strong className="Header__titleName">
            {subTitle}
            <div className="Header__rightContainer">
              <Social />
            </div>
          </strong>
        </h1>

        <p className="Header__bio">Hi! My name is Vasily Guzov. I'm a profesional actor and amauter photographer. Here you will find my reflections aboute life, my photo works as well as some photos with me. Thanks for watching.</p>
        <i onClick={handleOpenResume} className="Header__resumeBtn">resume →</i>
      </div>
    </header>
  )
}

Header.propTypes = {
  handleOpenResume: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export default Header
