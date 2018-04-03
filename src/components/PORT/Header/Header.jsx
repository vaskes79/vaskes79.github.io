import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import Social from '../Social'


const Header = ({title, subTitle, textIntro, handleOpenResume}) => {
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

        <p className="Header__bio">{textIntro}</p>
        <i onClick={handleOpenResume} className="Header__resumeBtn">resume →</i>
      </div>
    </header>
  )
}

Header.propTypes = {
  handleOpenResume: PropTypes.func.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  textIntro: PropTypes.string,
}

export default Header
