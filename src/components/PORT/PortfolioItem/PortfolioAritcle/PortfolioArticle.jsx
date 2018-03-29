import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import CloseBtn from '../../CloseBtn'
import './PortfolioArticle.css'

const PortfolioArticle = ({img, title, description}) => {

  return (
    <article className="PortfolioArticle PortfolioArticle--open">
      <header className="PortfolioArticle__header">
        <CloseBtn actionClose={() => console.log('PoftfolioArtilcle handler is working')} />
      </header>
      <div className="PortfolioArticle__img" style={{backgroundImage: `url(${img})` }}></div>
      <div className="PortfolioArticle__descriptionConatiner">
        <h1 className="PortfolioArticle__title">
          {title}
          <Link className="PortfolioArticle__link" to="/projects/DemoProject1">→ open project</Link>
        </h1>
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
