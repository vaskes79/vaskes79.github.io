import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './IndexTMP.css'

const IndexTMP = ({ children }) => (
  <div>
    <Helmet
      title="WebDev Vasily Guzov"
      meta={[
        { name: 'description', content: 'portfolio frontend developer Vasily Guzov' },
        { name: 'keywords', content: 'web dev, coding, Reactjs, React, css, js, es2015, nodejs' },
      ]}
    />
    {children()}
  </div>
)

IndexTMP.propTypes = {
  children: PropTypes.func,
}

export default IndexTMP
