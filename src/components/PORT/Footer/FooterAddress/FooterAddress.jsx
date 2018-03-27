import React from 'react'
import FooterTitle from '../FooterTitle'
import PropTypes from 'prop-types'
import './FooterAddress.css'

const FooterAddress = ({title, address}) => {
  return (
    <div className="FooterAddress">
      <FooterTitle text={title} />
      <p className="FooterAddress__address">
        {address}
      </p>
    </div>
  )
}

FooterAddress.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
}


export default FooterAddress
