import React  from 'react'
import PropTypes from 'prop-types'
import FooterContact from './FooterContact'
import FooterAddress from './FooterAddress'
import FooterImg from './FooterImg'

import './Footer.css'
// for dev
import {CONTACT, ADDRESS, MAP} from '../../../data/footerDemoData.json'


const Footer = ({ conatct, address, map, }) => {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <FooterContact {...conatct}/>
        <FooterAddress {...address}/>
        <FooterImg title="coordinate" img={map.img} handleImg={() => console.log('FooterImg handleImg is working')} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  conatct: PropTypes.object,
  address: PropTypes.object,
  map: PropTypes.object,
}

// for dev
Footer.defaultProps = {
  conatct: CONTACT,
  address: ADDRESS,
  map: MAP,
}


export default Footer
