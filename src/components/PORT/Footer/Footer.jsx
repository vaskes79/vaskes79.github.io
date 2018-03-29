import React  from 'react'
import PropTypes from 'prop-types'
import FooterContact from './FooterContact'
import FooterAddress from './FooterAddress'
import FooterImg from './FooterImg'

import './Footer.css'


const Footer = ({ contact, address, map, handleOpenMap }) => {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <FooterContact {...contact}/>
        <FooterAddress {...address}/>
        <FooterImg title="coordinate" img={map.img} handleImg={handleOpenMap} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  contact: PropTypes.object,
  address: PropTypes.object,
  map: PropTypes.object,
  handleOpenMap: PropTypes.func.isRequired,
}


export default Footer
