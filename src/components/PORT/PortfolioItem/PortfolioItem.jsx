import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CloseBtn from '../CloseBtn'
import PortfolioArticle from './PortfolioArticle'
import {CSSTransitionGroup} from 'react-transition-group'
import {uniqueId} from 'lodash'
import './PortfolioItem.css'


class PortfolioItem extends Component {
  state = {
    isOpen: false
  }

  openCloseProject = (e) => {
    if (e) e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    let {title, img, content} = this.props
    let {isOpen} = this.state

    return(
      <div className="PortfolioItem">
        <img className="PortfolioItem__img"  alt={title} src={img} />
        <h1 className="PortfolioItem__title" onClick={this.openCloseProject} >{title}</h1>
        <CSSTransitionGroup
          transitionName="PortfolioArticle__animation"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {
            isOpen ?
              <div key={uniqueId('PortfolioArticle_')} className="PortfolioItem__content">
                <header className="PortfolioArticle__header">
                  <CloseBtn actionClose={this.openCloseProject} />
                </header>
                <PortfolioArticle isOpen={isOpen} {...content}/>
              </div> : null
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
}

export default PortfolioItem
