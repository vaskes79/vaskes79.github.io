import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import './PortfolioArticle.css'


class PortfolioArticle extends Component {
  state = {
    isOpen: false
  }
  componentWillMount(){
    setTimeout(
      () => {
        this.setState({
          isOpen: this.props.isOpen
        })
      },
      1
    )
  }
  render() {
    let {img, title, description} = this.props
    let {isOpen} = this.state

    return (
      <article className={`PortfolioArticle ${isOpen ? 'PortfolioArticle--open' : ''}`}>
        <div className="PortfolioArticle__img" style={{backgroundImage: `url(${img})` }}></div>
        <div className="PortfolioArticle__descriptionConatiner">
          <h1 className="PortfolioArticle__title">
            {title}
            <Link className="PortfolioArticle__link" to="/projects/DemoProject1">→ open project</Link>
          </h1>
          <div className="PortfolioArticle__description">{description}</div>
        </div>
      </article>
    )
  }
}

PortfolioArticle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default PortfolioArticle
