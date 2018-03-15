import React from 'react'
import PropTypes from 'prop-types'
import ReadMore from '../ReadMore'
import FilterPortfolio from '../FilterPortfolio'
import './Main.css'

const Main = ({children}) => {
  return (
    <section className='Main'>
      <header className="Main__header">
        <FilterPortfolio />
      </header>
      <div className="Main__container">
        {children}
      </div>
      <footer className="Main__footer">
        <ReadMore />
      </footer>
    </section>
  )
}

Main.propTypes = {
  children: PropTypes.array
}

export default Main
