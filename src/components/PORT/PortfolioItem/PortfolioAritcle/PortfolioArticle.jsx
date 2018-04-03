import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import CloseBtn from '../../CloseBtn'
import {Fade} from '../../../LIB/Transitions'
import './PortfolioArticle.css'

const PortfolioArticle = ({img, title, description, url, closeHandler}) => {
  let isOpen = (img && title && description) ? true : false
  return (
    <Fade in={isOpen}>
      <article className="PortfolioArticle PortfolioArticle--open">
        <header className="PortfolioArticle__header">
          <CloseBtn actionClose={closeHandler} />
        </header>
        <div className="PortfolioArticle__img" style={{backgroundImage: `url(${img})` }}></div>
        <div className="PortfolioArticle__descriptionConatiner">
          <h1 className="PortfolioArticle__title">
            {title}
            <Link className="PortfolioArticle__link" to={`/projects/${url}`}>→ open project</Link>
          </h1>
          <div className="PortfolioArticle__description">{description}</div>
        </div>
      </article>
    </Fade>
  )
}

PortfolioArticle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string,
  closeHandler: PropTypes.func.isRequired,
}

export default PortfolioArticle
