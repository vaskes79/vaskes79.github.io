import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PortfolioItem.css'

const PortfolioItem = ({ title, img, content, handleOpenPortfolioArticle }) => {
  return (
    <div className="PortfolioItem">
      <img className="PortfolioItem__img" alt={title} src={img}/>
      <h1 className="PortfolioItem__title" onClick={handleOpenPortfolioArticle}>
        {title}
      </h1>
    </div>
  )
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  handleOpenPortfolioArticle: PropTypes.func.isRequired,
  // content: PropTypes.shape({
  // 	title: PropTypes.string.isRequired,
  // 	description: PropTypes.string.isRequired,
  // 	img: PropTypes.string.isRequired
  // })
}

export default PortfolioItem
