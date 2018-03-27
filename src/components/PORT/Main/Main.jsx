import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {uniqueId} from 'lodash'

// import Pagination from '../Pagination'
import FilterPortfolio from '../FilterPortfolio'
import PortfolioItem from '../PortfolioItem'
import {PaginationBtn} from '../Pagination'
import './Main.css'

import DEMO_FILTERS from '../../../data/filtersDemoData.json'
import DEMO_IMAGES from '../../../data/demoImages.json'

class Main extends Component {

	render() {
    return (
      <section className="Main">
        <header className="Main__header">
          <FilterPortfolio
            isOpen={false}
            filters={DEMO_FILTERS}
            currentFilter={'all'}
            handleFilter={() => console.log('handle filters on main is working')}/>
        </header>
        <div className="Main__container">
          {
            DEMO_IMAGES.map( img => (
              <PortfolioItem
                key={uniqueId('PortfolioItemImg_')}
                title="Name project"
                img={`/static/demoImg/${img}`}
                handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
            ))
          }
        </div>
        <footer className="Main__footer">
          <PaginationBtn text="previos" type="prev" disable={true} />
          <PaginationBtn text="next" type="next" disable={false} />
        </footer>
      </section>
    )
	}
}

Main.propTypes = {
}

export default Main
