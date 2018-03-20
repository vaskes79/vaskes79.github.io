import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import Pagination from '../Pagination'
import FilterPortfolio from '../FilterPortfolio'
import PortfolioItem from '../PortfolioItem'
import './Main.css'


class Main extends Component {
  state = {
    portfolioData: [],
    pageOfItems: [],
  }

  componentWillMount(){
    let {portfolioData, filters} = this.props;
    this.setState({
      portfolioData,
      filters,
    })
  }

  componentWillReceiveProps(nextPropts) {
    let {portfolioData, filters} = nextPropts;

    if(portfolioData && portfolioData.length > 0 ) {
      this.setState({
        portfolioData
      })
    }
  }

  getRandomArbitrary = (min, max) =>{
    return Math.random() * (max - min) + min;
  }

  createPortfolioNodes = (PORTFOLIO_DATA) =>{
    return PORTFOLIO_DATA.map((portfolioItem, i) => {
      const {title, img, content, _id} = portfolioItem
      return (
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={this.getRandomArbitrary(500, 1000)}
          transitionLeaveTimeout={this.getRandomArbitrary(200, 500)}
          >
          <PortfolioItem key={_id} title={title} img={img} content={content} />
        </CSSTransitionGroup>
      )
    })
  }

  onChangePage = (pageOfItems) => {
    this.setState({pageOfItems})
  }

  render() {
    let {pageOfItems, portfolioData} = this.state;
    let {filters, currentFilter, onChangeFilter} = this.props;

    return (
      <section className='Main'>
        <header className="Main__header">
          <FilterPortfolio
            filters={filters}
            currentFilter={currentFilter}
            changeFilter={onChangeFilter}
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
  portfolioData: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
}

export default Main
