import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Pagination from '../Pagination'
import FilterPortfolio from '../FilterPortfolio'
import PortfolioItem from '../PortfolioItem'
import FILTERS_DEMO from '../../../data/filtersDemoData.json'
import './Main.css'
// demo data import
import PORTFOLIO_DEMO_DATA from '../../../data/demoPortfolioGenerate.json'


class Main extends Component {
  state = {
    currentFilter: 'all',
    filters: FILTERS_DEMO,
    portfolioData: [],
    pageOfItems: [],
  }

  componentWillMount(){
    this.setState({
      portfolioData: PORTFOLIO_DEMO_DATA
    })
  }

  createPortfolioNodes = (PORTFOLIO_DATA) =>{
    return PORTFOLIO_DATA.map(portfolioItem => {
      const {title, img, content, _id} = portfolioItem
      return <PortfolioItem key={_id} title={title} img={img} content={content} />
    })
  }

  filterPortfolio = (filter, PORTFOLIO_DATA) => {
    if (filter !== 'all') {
      return PORTFOLIO_DATA.filter(item => item.filter === filter)
    } else {
      return PORTFOLIO_DATA
    }
  }

  changeFilter = (e) => {
    if(e.target.id) {
      let currentFilter = e.target.id;
      this.setState({ currentFilter })
    }
  }

  onChangePage = (pageOfItems) => {
    this.setState({pageOfItems})
  }

  render() {
    let {filters, currentFilter, pageOfItems, portfolioData} = this.state;

    return (
      <section className='Main'>
        <header className="Main__header">
          <FilterPortfolio
            filters={filters}
            currentFilter={currentFilter}
            changeFilter={this.changeFilter}
            />
        </header>
        <div className="Main__container">
          { this.createPortfolioNodes( pageOfItems  ) }
        </div>
        <footer className="Main__footer">
          <Pagination items={portfolioData} onChangePage={this.onChangePage} />
        </footer>
      </section>
    )
  }
}

Main.propTypes = {
  children: PropTypes.array,
}

export default Main
