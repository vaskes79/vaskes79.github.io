import React  from 'react'
import PropTypes from 'prop-types'
import './CloseBtn.css'


const CloseBtn = ({actionClose}) => {
  return <a href="#" className="CloseBtn" onClick={actionClose}>→ close </a>
}

CloseBtn.propTypes = {
}

CloseBtn.defaultProps = {
}


export default CloseBtn;
