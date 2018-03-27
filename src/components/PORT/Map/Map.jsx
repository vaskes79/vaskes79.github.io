import React from 'react'
import PropTypes from 'prop-types'
import CloseBtn from '../CloseBtn'
import { GoogleApiWrapper } from 'google-maps-react'
import MapContainer from './MapContainer'

import './Map.css'

const Map = ({coordinate, google, isOpen, handleMap}) => {
  return (
    <div className="FooterMap">
      <div className={`FooterMap__mapContainer ${isOpen ? 'FooterMap__mapContainer--open' : ''}`}>
        <div className="FooterMap__mapContainerHeader">
          <CloseBtn actionClose={handleMap} />
        </div>
        <MapContainer google={google} coordinate={coordinate} />
      </div>
    </div>
  )
}

Map.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleMap: PropTypes.func.isRequired,
  coordinate: PropTypes.object.isRequired,
}

export default GoogleApiWrapper({
  apiKey: process.env.VPORT_GOOGLE_MAPS_API_KEY
})(Map)
