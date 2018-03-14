import React, {Component} from 'react'
import ReactDom from 'react-dom'

class MapContainer extends Component {
  componentDidUpdate() {
    this.loadMap()
  }

  loadMap = () => {
    if(this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDom.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, this.props.coordinate)

      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {

    return (
      <div ref="map" className="FooterMap__mapWrap">
        loading map...
      </div>
    )
  }
}

export default MapContainer
