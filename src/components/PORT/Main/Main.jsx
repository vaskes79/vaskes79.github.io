import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {uniqueId} from 'lodash'

// import Pagination from '../Pagination'
import FilterPortfolio from '../FilterPortfolio'
import PortfolioItem from '../PortfolioItem'
import Pagination from '../Pagination'
import Preloader from '../Preloader'
import './Main.css'


class Main extends Component {
  state = {
    pageOfItems: [],
  }

  handlepageOfItems = (pageOfItems) => {
    this.setState({pageOfItems})
  }

	render() {
    let {filters, portfolioItems, handlePortfolioArticle, handleFilter} = this.props
    let {pageOfItems} = this.state
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
            pageOfItems && pageOfItems.length > 0 ?
            pageOfItems.map( img => (
              <PortfolioItem
                key={uniqueId('PortfolioItemImg_')}
                title="Name project"
                img={`/static/demoImg/${img}`}
                handleOpenPortfolioArticle={handlePortfolioArticle} />
            ))
            :
            <Preloader />
          }
        </div>
        <footer className="Main__footer">
          <Pagination items={portfolioItems} onChangePage={this.handlepageOfItems}  />
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
