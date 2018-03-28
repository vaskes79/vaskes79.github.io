import React from 'react'
import PropTypes from 'prop-types'
import CloseBtn from '../CloseBtn'
import {uniqueId} from 'lodash'
import ResumePart from './ResumePart'
import './Resume.css'

import DEMO_DATA from '../../../data/demo_data_resume.json'

const Resume = ({closeHandler, isOpen=false}) => {
  return (
    <section className={`Resume ${ isOpen ? 'Resume--open' : ''}`}>
      <header className="Resume__header">
        <CloseBtn actionClose={closeHandler} />
      </header>
      <div className="Resume__container">
        { DEMO_DATA.map(data => <ResumePart key={uniqueId(`${data.title}_`)} {...data}/>)}
      </div>
      <footer className="Resume__footer">
        <CloseBtn actionClose={closeHandler} />
      </footer>
    </section>
  )
}

Resume.propTypes = {
  closeHandler: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default Resume
