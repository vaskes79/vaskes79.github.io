import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './FilterPortfolio.css'


class FilterPortfolio extends Component {
    state = {
      isOpen: false,
      currentFilter: 'all'
    }
    componentWillMount() {
      const {filters, currentFilter} = this.props;
      this.setState({
        filters,
        currentFilter
      })
    }
    openClose = (e) => {
      let currentFilter = e.target.getAttribute('data-name') || 'all';
      let isOpen = e.target.getAttribute('data-hover') === 'hover' ? false : !this.state.isOpen;
      this.setState({
        isOpen,
        currentFilter,
      })
      this.props.changeFilter(e);
    }
    render() {
        let {switchFitler} = this.props;
        let {currentFilter, isOpen} = this.state;
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
                        className={`FilterPortfolio__itemWrap ${currentFilter === name ? 'FilterPortfolio__itemWrap--active': ''}`}
                        data-name={name}
                        onClick={this.openClose}
                      >
                        <span
                          data-name={name}
                          data-hover="hover"
                          className={`FilterPortfolio__item ${currentFilter === name ? 'FilterPortfolio__item--active': ''}`}
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
  filters: PropTypes.array.isRequired
}

export default FilterPortfolio;
