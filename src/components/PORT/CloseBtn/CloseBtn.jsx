import React  from 'react'
import PropTypes from 'prop-types'
import './CloseBtn.css'


const CloseBtn = ({actionClose, text}) => {
  return <a href="#" className="CloseBtn" onClick={actionClose}>→ {text} </a>
}

CloseBtn.propTypes = {
  actionClose: PropTypes.func.isRequired,
  text: PropTypes.string
}
CloseBtn.defaultProps = {
  text: 'close'
}


export default CloseBtn;
