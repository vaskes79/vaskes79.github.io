import React from 'react'
import PropTypes from 'prop-types'
import {uniqueId} from 'lodash'
import './FilterPortfolio.css'

/**
 * The stateles component for filtering items
 *
 * @param {func} handleFilter
 * @param {array} filters - array filter items
 * @param {string} currentFilter - value current filter
 * @param {boolean} isOpen - status menu
 *
 */
const FilterPortfolio = ({handleFilter, filters, currentFilter, isOpen}) => {
  return (
    <div className={`FilterPortfolio ${isOpen ? 'FilterPortfolio--open':''}`}>
      <h2 className="FilterPortfolio__title" onClick={handleFilter}>filter by → </h2>
      <ul className="FilterPortfolio__itemContainer">
        {
          filters.map( ({name, val}, i) => (
            <li
              key={uniqueId(val + '_')}
              style={{transitionDelay: `${500 * i}px`}}
              className={`FilterPortfolio__itemWrap ${currentFilter === val ? 'FilterPortfolio__itemWrap--active': ''}`} >
              <span
                onClick={() => handleFilter(val)}
                style={{transitionDelay: `${500 * i}px`}}
                className={`FilterPortfolio__item ${currentFilter === val ? 'FilterPortfolio__item--active': ''}`} >
                {name}
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

FilterPortfolio.propTypes = {
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default FilterPortfolio
