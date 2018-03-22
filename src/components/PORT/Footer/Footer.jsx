import React  from 'react'
import PropTypes from 'prop-types'
import FooterContact from './FooterContact'
import FooterAddress from './FooterAddress'
import FooterMap from './FooterMap'
import {CONTACT, ADDRESS, MAP} from '../../../data/footerDemoData.json'

import './Footer.css'

const Footer = ({ conatct, address, map, mapIsOpen, handlerMapOpen }) => {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <FooterContact {...conatct}/>
        <FooterAddress {...address}/>
        <FooterMap isOpen={mapIsOpen} handlerMapOpen={handlerMapOpen} {...map}/>
      </div>
    </div>
  )
}

Footer.propTypes = {
  conatct: PropTypes.object,
  address: PropTypes.object,
  map: PropTypes.object,
  mapIsOpen: PropTypes.bool.isRequired,
  handlerMapOpen: PropTypes.func.isRequired,
}

Footer.defaultProps = {
  conatct: CONTACT,
  address: ADDRESS,
  map: MAP,
}


export default Footer;
