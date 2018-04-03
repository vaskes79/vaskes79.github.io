import React from 'react'
import PropTypes from 'prop-types'
import CloseBtn from '../CloseBtn'
import {Fade} from '../../LIB/Transitions'
import MapContainer from './MapContainer'

import './Map.css'

const Map = ({coordinate, isOpen, closeHandler}) => {
  return (
    <Fade in={isOpen}>
      <div className="FooterMap">
        <div className={`FooterMap__mapContainer ${isOpen ? 'FooterMap__mapContainer--open' : ''}`}>
          <div className="FooterMap__mapContainerHeader">
            <CloseBtn actionClose={closeHandler} />
          </div>
          <MapContainer
            {...coordinate}
            isMarkerShown={true}
            containerElement={<div className="FooterMap__mapWrap" style={{ height: `80vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
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

export default Map
