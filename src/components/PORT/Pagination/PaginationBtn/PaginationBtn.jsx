import React  from 'react'
import PropTypes from 'prop-types'
import './PaginationBtn.css'


const PaginationBtn = ({type, text, disable=false}) => {
  switch (type) {
  case 'next':
    return (
      <div className={`PaginationBtn PaginationBtn--next ${disable ? 'PaginationBtn--disable' : ''}`}>
        <p className="PaginationBtn__text">{text} →</p>
      </div>
    )
  case 'prev':
    return (
      <div className={`PaginationBtnPrev ${disable ? 'PaginationBtnPrev--disable' : ''}`}>
        <p className="PaginationBtnPrev__text">← {text}</p>
      </div>
    )
  default:
    return (
      <div className={`PaginationBtn PaginationBtn--readMore ${disable ? 'PaginationBtn--disable' : ''}`}>
        <p className="PaginationBtn__text">{text} →</p>
      </div>
    )
  }
}

PaginationBtn.propTypes = {
  type: PropTypes.oneOf(['next', 'prev', 'readMore']),
  text: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
}

PaginationBtn.defaultProps = {
}


export default PaginationBtn;
