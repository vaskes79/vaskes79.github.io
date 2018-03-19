import React from 'react'
import PropTypes from 'prop-types'
import './PortfolioArticle.css'

const PortfolioArticle = ({img, title, description}) => {
  return (
    <article className="PortfolioArticle">
      <div className="PortfolioArticle__img" style={{backgroundImage: `url(${img})` }}></div>
      <div className="PortfolioArticle__descriptionConatiner">
        <h1 className="PortfolioArticle__title">{title}</h1>
        <div className="PortfolioArticle__description">{description}</div>
      </div>
    </article>
  )
}

PortfolioArticle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default PortfolioArticle
