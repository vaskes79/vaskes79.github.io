import React from 'react'
import PropTypes from 'prop-types'
import CloseBtn from '../CloseBtn'
import { GoogleApiWrapper } from 'google-maps-react'
import {Fade} from '../../LIB/Transitions'
import MapContainer from './MapContainer'

import './Map.css'

const Map = ({coordinate, google, isOpen, closeHandler}) => {
  return (
    <Fade in={isOpen}>
      <div className="FooterMap">
        <div className={`FooterMap__mapContainer ${isOpen ? 'FooterMap__mapContainer--open' : ''}`}>
          <div className="FooterMap__mapContainerHeader">
            <CloseBtn actionClose={closeHandler} />
          </div>
          <MapContainer google={google} coordinate={coordinate} />
        </div>
      </div>
    </Fade>
  )
}

Map.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  coordinate: PropTypes.object,
  closeHandler: PropTypes.func.isRequired,
}

export default GoogleApiWrapper({
  apiKey: process.env.VPORT_GOOGLE_MAPS_API_KEY
})(Map)
