import React from 'react'
import PropTypes from 'prop-types'
import './PortfolioItem.css'

const PortfolioItem = ({ title, img, _id, handleOpenArticle }) => {
  return (
    <div className="PortfolioItem">
      <img className="PortfolioItem__img" alt={title} src={img}/>
      <h1 className="PortfolioItem__title" onClick={() => handleOpenArticle(_id) }>
        {title}
      </h1>
    </div>
  )
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  handleOpenArticle: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
}


export default PortfolioItem
