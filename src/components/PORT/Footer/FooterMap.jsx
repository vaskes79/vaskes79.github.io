import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CloseBtn from '../CloseBtn'
import { GoogleApiWrapper } from 'google-maps-react'
import MapContainer from './MapContainer'

import './FooterMap.css'

class FooterMap extends Component {
  state = {
    mapIsOpen: false
  }

  handlerOpenCloseMap = (e) => {
    e.preventDefault();
    this.setState({
      mapIsOpen: !this.state.mapIsOpen
    })
    this.stopScroll();
  }
  stopScroll = () => {
    let html = document.querySelector('html');
    if(!this.state.mapIsOpen) {
      html.style.overflowY = 'hidden'
    } else {
      html.style.overflowY = 'auto'
    }
  }

  render () {
    let {title, coordinate, img, google} = this.props;
    return (
      <div className="FooterMap">
        <div className={`FooterMap__mapContainer ${this.state.mapIsOpen ? 'FooterMap__mapContainer--open' : ''}`} style={{top: `${this.state.mapIsOpen ? window.scrollY + 'px': '-150vh'}`}}>
          <div className="FooterMap__mapContainerHeader">
            <CloseBtn actionClose={this.handlerOpenCloseMap} />
          </div>
          <MapContainer google={google} coordinate={coordinate} />
        </div>
        <h2 className="FooterMap__title">
          {title}
        </h2>
        <div className="FooterMap__mapLink">
          <a href="#" onClick={this.handlerOpenCloseMap}><img src={img} alt={coordinate} /></a>
        </div>
      </div>
    )
  }
}

FooterMap.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

// fix problem with this wrapper warning setState in console
export default GoogleApiWrapper({
  apiKey: process.env.VPORT_GOOGLE_MAPS_API_KEY
})(FooterMap)
