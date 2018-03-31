import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'
import './Fade.css'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0, color: 'red' },
  entered:  { opacity: 1, color: 'green'},
}

const Fade = ({ in: inProp, children, timeOut=duration }) => (
  <Transition in={inProp} timeout={timeOut}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
)


Fade.propTypes = {
  in: PropTypes.bool.isRequired,
  timeOut: PropTypes.number,
  children: PropTypes.node.isRequired,
}


export default Fade
