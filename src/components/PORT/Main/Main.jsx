import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import Pagination from '../Pagination'
import FilterPortfolio from '../FilterPortfolio'
import PortfolioItem from '../PortfolioItem'
import './Main.css'

import DEMO_FILTERS from '../../../data/filtersDemoData.json'

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
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
          <PortfolioItem title="Name project" img="https://placeimg.com/640/480/tech" handleOpenPortfolioArticle={() => console.log('handle portfolio article opne on main is working')} />
        </div>
        <footer className="Main__footer">
          <h1>footer</h1>
        </footer>
      </section>
    )
	}
}

Main.propTypes = {
}

export default Main
