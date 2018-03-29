import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {uniqueId} from 'lodash'

// import Pagination from '../Pagination'
import FilterPortfolio from '../FilterPortfolio'
import PortfolioItem from '../PortfolioItem'
import {PaginationBtn} from '../Pagination'
import './Main.css'


class Main extends Component {
	render() {
    let {filters, portfolioItems, handlePortfolioArticle, handleFilter} = this.props
    return (
      <section className="Main">
        <header className="Main__header">
          <FilterPortfolio
            isOpen={false}
            filters={filters}
            currentFilter={'all'}
            handleFilter={handleFilter}/>
        </header>
        <div className="Main__container">
          {
            portfolioItems.map( img => (
              <PortfolioItem
                key={uniqueId('PortfolioItemImg_')}
                title="Name project"
                img={`/static/demoImg/${img}`}
                handleOpenPortfolioArticle={handlePortfolioArticle} />
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
  filters: PropTypes.array.isRequired,
  portfolioItems: PropTypes.array.isRequired,
  handlePortfolioArticle: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
}

export default Main
