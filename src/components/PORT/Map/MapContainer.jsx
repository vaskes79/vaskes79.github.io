import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MapContainer = withGoogleMap((props) => (
  <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
    {props.isMarkerShown && <Marker position={props.center} />}
  </GoogleMap>
))

export default MapContainer
