import React from 'react'
import './FooterMap.css'

const FooterMap = ({title, coordinate, img}) => {
  return (
    <div className="FooterMap">
      <h2 className="FooterMap__title">
        {title}
      </h2>
      <div className="FooterMap__mapContainer">
        <a href="#"><img src={img} alt={coordinate} /></a>
      </div>
    </div>
  )
}

export default FooterMap
