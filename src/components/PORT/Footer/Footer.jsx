import React  from 'react'
import PropTypes from 'prop-types'
import FooterContact from './FooterContact'
import FooterAddress from './FooterAddress'
import FooterImg from './FooterImg'

import './Footer.css'


const Footer = ({ contact, address, map, }) => {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <FooterContact {...contact}/>
        <FooterAddress {...address}/>
        <FooterImg title="coordinate" img={map.img} handleImg={() => console.log('FooterImg handleImg is working')} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  contact: PropTypes.object,
  address: PropTypes.object,
  map: PropTypes.object,
}


export default Footer
