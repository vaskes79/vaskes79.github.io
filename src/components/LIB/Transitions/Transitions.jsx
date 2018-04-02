import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import './Transitions.css'

const Transitions = ({ in: inProp, children, duration}) => (
  <Transition in={inProp} timeout={duration}>
    {(status) => (
      <div className={`Transitions Transitions--${status}`}>
        {children}
      </div>
    )}
  </Transition>
)

Transitions.propTypes = {
  in: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
}

export default Transitions
