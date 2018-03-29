import React, {Component} from 'react'
import {uniqueId} from 'lodash'

import '../Themes'

// import compones

import Preloader from '../Preloader'
import Resume from '../Resume'
import {PortfolioArticle} from '../PortfolioItem'
import Map from '../Map'

import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

import './IndexPage.css'

// import db modules
import {DB as db} from '../../../data/firebase'

// for dev
import DEMO_FOOTER_DATA, {map} from '../../../data/demo_footer_data.json'
import DEMO_HEADER_DATA from '../../../data/demo_header_data.json'
import DEMO_RESUME_DATA from '../../../data/demo_data_resume.json'
import DEMO_FILTERS from '../../../data/demo_filter_portfolio_items.json'
// don't forget reformate for portfolioItems shape this date
import DEMO_PORTFOLIO_ITEMS from '../../../data/demo_portfolio_items.json'

class IndexPage extends Component {
  state = {
    article: false,
    loading: false,
    openResume: false,
    openMap: false,
  }

  handleOpenArticle = (articleId) => {
    console.log(`article id: ${articleId}`);
  }

  render () {
    let {article, loading, openResume, openMap} = this.state;
    return (
      <div className="IndexPage">
        {loading ? <Preloader /> : ''}
        {openResume ? <Resume content={DEMO_RESUME_DATA} closeHandler={() => console.log('close handler resume is workign on resume')} isOpen={true}/> : '' }

        {openMap ? <Map {...map} isOpen={true} handleMap={() => console.log("handleMap is working")} /> : ''}
        {article ? <PortfolioArticle {...article} /> : '' }

        {
          loading || openResume || openMap || article ?
            null
          :
            <div className="IndexPage__wrap">
              <Header {...DEMO_HEADER_DATA} handleOpenResume={() => console.log('handle open resume is working on header')}/>
              <Main
                filters={DEMO_FILTERS}
                portfolioItems={DEMO_PORTFOLIO_ITEMS}
                handleOpenArticle={this.handleOpenArticle}
                handleFilter={() => console.log(`handleFilter on IndexPage is working`)}/>
              <Footer {...DEMO_FOOTER_DATA}/>
            </div>
        }
      </div>
    )
  }
}

export default IndexPage
