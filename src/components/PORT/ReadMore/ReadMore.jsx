import React from 'react'
import PropTypes from 'prop-types'

import './ReadMore.css'

const ReadMore = ({text}) => {
  return (
    <div className="ReadMore">
      <p className="ReadMore__text">{text} →</p>
    </div>
  )
}

ReadMore.propTypes = {
  text: PropTypes.string.isRequired
}

export default ReadMore
