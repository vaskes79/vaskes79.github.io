import React from 'react'
import PropTypes from 'prop-types'
import './FooterTitle.css'


const FooterTitle = ({ text }) => {
  return (
    <h2 className="FooterTitle">
      {text}
    </h2>
  )
}


FooterTitle.propTypes = {
  text: PropTypes.string.isRequired,

}


export default FooterTitle
