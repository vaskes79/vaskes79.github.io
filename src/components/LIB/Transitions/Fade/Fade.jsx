import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import './Fade.css'

const Fade = ({ in: inProp, children, duration}) => (
  <Transition in={inProp} timeout={duration}>
    {(status) => (
      <div className={`Fade Fade--${status}`}>
        {children}
      </div>
    )}
  </Transition>
)

Fade.propTypes = {
  in: PropTypes.bool.isRequired,
  duration: PropTypes.number,
  children: PropTypes.node
}

Fade.defaultProps ={
  duration: 500
}

export default Fade
