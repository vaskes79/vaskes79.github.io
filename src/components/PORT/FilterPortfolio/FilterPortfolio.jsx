import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './FilterPortfolio.css'


class FilterPortfolio extends Component {
    state = {
      isOpen: false,
      filters: this.props.filters,
      currentFilter: this.props.currentFilter
    }
    openClose = () => {
      this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        let {switchFitler, currentFilter, changeFilter} = this.props;
        let {isOpen} = this.state;
        return (
            <div className="FilterPortfolio">
              <h2 className="FilterPortfolio__title" onClick={this.openClose}>filter by → </h2>
              <ul className={`FilterPortfolio__itemContainer ${isOpen ? 'FilterPortfolio__itemContainer--open':''}`}>
                {
                  this.state.filters.map( ({name, val}) => {
                    return (
                      <li
                        id={val}
                        key={val}
                        className={`FilterPortfolio__itemWrap ${currentFilter === val ? 'FilterPortfolio__itemWrap--active': ''}`}
                        onClick={() => changeFilter(val)}
                      >
                        <span
                          onClick={() => changeFilter(val)}
                          className={`FilterPortfolio__item ${currentFilter === val ? 'FilterPortfolio__item--active': ''}`}
                          >{name}
                        </span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
        );
    }
}

FilterPortfolio.propTypes = {
  filters: PropTypes.array.isRequired,
  changeFilter: PropTypes.func.isRequired,
}

export default FilterPortfolio;
