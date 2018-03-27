import React, {Component} from 'react'
import {CSSTransitionGroup} from 'react-transition-group'
import {uniqueId} from 'lodash'

// import modules
import Preloader from '../Preloader'
import Resume from '../Resume'
import {PortfolioArticle} from '../PortfolioItem'
import Header from '../Header'
import Main from '../Main'

import Footer from '../Footer'
import './IndexPage.css'


// import db modules
import {DB as db} from '../../../data/firebase'


class IndexPage extends Component {
  state = {
  }

  render () {
    let {loading, resumeOpen, portfoliArticleOpen} = this.state;
    return (
      <div className="IndexPage">
        {/* <Preloader /> */}
        {/* <Resume closeHandler={() => console.log('close handler resume is workign on resume')} isOpen={true}/> */}
        {/* <PortfolioArticle /> */}
        <div className="IndexPage__wrap">
          <Header title="web portfolio" subTitle="vasily Guzov" handleOpenResume={() => console.log('handle open resume is working on header')}/>
          <Main />
          <Footer />
        </div>
      </div>
    )
  }
}

export default IndexPage
