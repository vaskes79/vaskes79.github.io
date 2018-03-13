import React from 'react'
import PropTypes from 'prop-types'
import './Main.css'

const Main = ({children}) => {
  return (
    <section className='Main'>
      <div className="Main__container">
        {children}
      </div>
    </section>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main
