import React  from 'react'
import PropTypes from 'prop-types'
import FooterContact from './FooterContact'
import FooterAddress from './FooterAddress'
import FooterMap from './FooterMap'

import './Footer.css'

// Demo data
const CONTACT = {
  title: 'stay in touch',
  mesanger: 'skype: vaskes79',
  email: 'kinev1979@gmail.com',
  phone: '+79112124127',
}

const ADDRESS = {
  title: 'you can find me',
  address: 'my location addres and differen info'
}

const MAP = {
  title: 'location direction on google maps',
  coordinate: {
    center: {lat: 59.940896, lng: 30.204649},
    zoom: 15,
    mapTypeId: 'roadmap'
  },
  img: 'https://downloader.disk.yandex.ru/preview/0c01f1b7f910b30987857d1f63c9d7b0e9e2dbc4378ad97e1368ef0230c4ace3/inf/Hosfs0mUHOxL8OlXmcDfwJ4dsXr-BlYPQsaDpvAeL0jWit1-F763rXDVNtgtaXzXqDbLn_ARS4jVoQMiDR4VoQ%3D%3D?uid=0&filename=2018-03-13_13-57-07.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&size=1280x893'
}
//

const Footer = ({ conatct, address, map }) => {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <FooterContact {...conatct}/>
        <FooterAddress {...address}/>
        <FooterMap {...map}/>
      </div>
    </div>
  )
}

Footer.propTypes = {
  conatct: PropTypes.object,
  address: PropTypes.object,
  map: PropTypes.object,
}

Footer.defaultProps = {
  conatct: CONTACT,
  address: ADDRESS,
  map: MAP,
}


export default Footer;
