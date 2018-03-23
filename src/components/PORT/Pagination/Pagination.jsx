import React, { Component } from 'react'
import {range} from 'lodash'
import PropTypes from 'prop-types'
import './Pagination.css'


class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pager: {}
    }
  }

  componentWillMount() {
    let {items, initPage} = this.props;

    if(items && items.length) {
      this.setPage(initPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let {items, initPage} = this.props;

    if(items !== prevProps.items) {
      this.setPage(initPage)
    }
  }

  setPage = (page) => {
    let {items, onChangePage} = this.props;
    let {pager} = this.state;

    if(page < 1 || page > pager.totalPages) return;

    pager = this.getPage(items.length, page, 20);

    let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    this.setState({pager});
    onChangePage(pageOfItems);
  }

  getPage = (totalItems, currentPage = 1, pageSize = 10) => {
    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if(totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    let pages = range(startIndex, endPage + 1);

    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    }
  }

  render() {
    let {pager} = this.state;
    let {currentPage, totalPages} = pager;
    if (!pager.pages || pager.pages.length <= 1) return null;
    return (
      <div className="Pagination">
        <a href="prev"
          className={`Pagination__handler Pagination__handlerPrev ${currentPage === 1 ? 'Pagination__handler--disable': ''}`}
          onClick={(e) => {e.preventDefault(); return this.setPage(currentPage - 1)}}
          >prev</a>
        <b className="Pagination__handlerSeparate"> | </b>
        <a href="next"
          className={`Pagination__handler Pagination__handlerNext ${currentPage === totalPages ? 'Pagination__handler--disable': ''}`}
          onClick={(e) => {e.preventDefault(); return this.setPage(currentPage + 1)}}
          >next</a>
      </div>
    )
  }
}

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initPage: PropTypes.number,
}

Pagination.defaultProps = {
  initPage: 1,
}

export default Pagination
