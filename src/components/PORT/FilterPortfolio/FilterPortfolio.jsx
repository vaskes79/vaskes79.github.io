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
    openClose = (e) => {
      this.setState({
        isOpen: !this.state.isOpen,
      })
      this.props.changeFilter(e);
    }
    render() {
        let {switchFitler} = this.props;
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
  filters: PropTypes.array.isRequired
}

export default FilterPortfolio;
