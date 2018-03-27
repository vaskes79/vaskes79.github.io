import React from 'react'
import PropTypes from 'prop-types'
import FooterTitle from '../FooterTitle'
import './FooterImg.css'

const FooterImg = ({ title, img, handleImg }) => {
  return (
    <div className="FooterImg">
      <FooterTitle text={title}/>
      <a href="#" className="FooterImg__link" onClick={handleImg}>
        <img src={img} alt={title} />
      </a>
    </div>
  )
}

FooterImg.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  handleImg: PropTypes.func.isRequired,
}


export default FooterImg
