import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './ProjectsTMP.css'

const ProjectsTMP = ({children}) => (
  <div className="ProjectsTMP">
    <Helmet
      title="style gide"
      meta={[
        {name: 'description', content: 'style gide'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <h1>Project</h1>
    {children()}
  </div>
)

ProjectsTMP.propTypes = {
  children: PropTypes.func,
}

export default ProjectsTMP
