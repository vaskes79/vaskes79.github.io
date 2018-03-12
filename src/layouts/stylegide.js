import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import './fonts/stylegide.css'
import './stylegide.css'

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="style gide"
      meta={[
        {name: 'description', content: 'style gide'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
