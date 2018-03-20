import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="WebDave Vasily Guzov"
      meta={[
        { name: 'description', content: 'portfolio frontend developer Vasily Guzov' },
        { name: 'keywords', content: 'web dev, coding, Reactjs, React, css, js, es2015, nodejs' },
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
