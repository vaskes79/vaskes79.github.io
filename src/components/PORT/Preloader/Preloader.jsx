import React  from 'react'
import PropTypes from 'prop-types'
import {uniqueId} from 'lodash'
import {Fade} from '../../LIB/Transitions'
import './Preloader.css'


const Preloader = ({colors, sizeCircle, widthPreloader, isLoading}) => {
  let dots = colors.map((color) => (
    <div
      key={uniqueId('PreloaderDot_')}
      className="Preloader__dot"
      style={{
        backgroundColor: `${color}`,
        width: `${sizeCircle}px`,
        height: `${sizeCircle}px`,
      }}></div>
  ))
  return (
    <Fade in={isLoading}>
      <div className="Preloader" style={{width: `${widthPreloader}px`, height: `${sizeCircle}px`}}>
        { dots }
        <div className="Preloader__text"></div>
      </div>
    </Fade>
  )
}

Preloader.propTypes = {
  isLoading: PropTypes.bool,
  colors: PropTypes.array,
  sizeCircle: PropTypes.number,
  widthPreloader: PropTypes.number
}

Preloader.defaultProps = {
  isLoading: true,
  colors: ['rgb(255, 30, 70)', 'rgb(29, 29, 29)', 'rgb(234, 233, 153)', 'rgb(32, 32, 32)', 'rgb(153, 152, 99)', 'rgb(61, 111, 160)' ],
  sizeCircle: 15,
  widthPreloader: 250,
}


export default Preloader
