import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './FilterPortfolio.css'

const DEMO_FILTERS = [
 { val: 'pro', name: 'projects'},
 { val: 'reCom', name: 'reactComponents'},
 { val: 'landing', name: 'landing'},
 { val: 'css', name: 'css'},
 { val: 'anim', name: 'animation'},
 { val: 'js', name: 'js'},
 { val: 'svg', name: 'svg'},
]

class FilterPortfolio extends Component {
    state = {
      filters: DEMO_FILTERS,
      isOpen: false,
      currentFilter: null,
    }

    openClose = (e) => {
      let currentFilter = e.target.id;
      this.setState({
        isOpen: !this.state.isOpen,
        currentFilter
      })
    }
    render() {
        return (
            <div className="FilterPortfolio">
              <h2 className="FilterPortfolio__title" onClick={this.openClose}>filter by →</h2>
              <ul className={`FilterPortfolio__itemContainer ${this.state.isOpen ? 'FilterPortfolio__itemContainer--open':''}`}>
                {
                  this.state.filters.map( ({name, val}) => {
                    return (<li
                      key={val}
                      id={val}
                      className={`FilterPortfolio__item ${this.state.isOpen ? 'FilterPortfolio__item--open':''}`}
                      onClick={this.openClose}
                      >{name}</li>
                    )
                  })
                }
              </ul>
            </div>
        );
    }
}

FilterPortfolio.propTypes = {
  filters: PropTypes.array
}

export default FilterPortfolio;
