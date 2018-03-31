import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './fonts.css'
import './StyleGideTMP.css'

const StyleGideTMP = ({children}) => (
  <div className="StyleGideTMP">
    <Helmet
      title="style gide"
      meta={[
        {name: 'description', content: 'style gide'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <h1>Style Gide</h1>
    {children()}
  </div>
)

StyleGideTMP.propTypes = {
  children: PropTypes.func,
}

export default StyleGideTMP
