import React from 'react'
import './FooterAddress.css'

const FooterAddress = ({title, address}) => {
  return (
    <div className="FooterAddress">
      <h2 className="FooterAddress__title">
        {title}
      </h2>
      <p className="FooterAddress__address">
        {address}
      </p>
    </div>
  )
}

export default FooterAddress
