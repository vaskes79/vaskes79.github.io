import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './FilterPortfolio.css'


class FilterPortfolio extends Component {
    state = {
      isOpen: false,
    }
    componentWillMount() {
      const {filters, currentFilter} = this.props;
      this.setState({
        filters,
        currentFilter
      })
    }

    componentWillReceiveProps(nextPropts) {
      let {filters} = nextPropts;

      if(filters && filters.length > 0 ) {
        this.setState({
          filters
        })
      }
    }
    openClose = (e) => {
      let currentFilter = e.target.getAttribute('data-value') || 'all';
      let isOpen = e.target.getAttribute('data-hover') === 'hover' ? false : !this.state.isOpen;
      this.setState({
        isOpen,
      })
      this.props.changeFilter(currentFilter);
    }
    render() {
        let {switchFitler, currentFilter} = this.props;
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
                        className={`FilterPortfolio__itemWrap ${currentFilter === name ? 'FilterPortfolio__itemWrap--active': ''}`}
                        data-name={name}
                        onClick={this.openClose}
                      >
                        <span
                          data-name={name}
                          data-value={val}
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
