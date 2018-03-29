// for dev
import {DEMO_FOOTER_DATA, DEMO_HEADER_DATA, DEMO_RESUME_DATA, DEMO_FILTERS, DEMO_PORTFOLIO_ITEMS} from '../../../data'
// end dev
import React, {Component} from 'react'
import {uniqueId} from 'lodash'
// import db modules
// import {DB as db} from '../../../data/firebase'
// import compones
import Preloader from '../Preloader'
import Resume from '../Resume'
import {PortfolioArticle} from '../PortfolioItem'
import Map from '../Map'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

import '../Themes'
import './IndexPage.css'


class IndexPage extends Component {
  state = {
    portfolioItems: [],
    filteredItems: [],
    filters: [],
    mapData: {},
    resumeData: {},
    headerData: {},
    currentFilter: 'all',
    article: false,
    loading: true,
    openResume: false,
    openMap: false,
  }

  componentWillMount() {
    this.getData()
  }

  getData = () => {
    // let portfolioItemsCheck = DEMO_PORTFOLIO_ITEMS.length && DEMO_PORTFOLIO_ITEMS.length > 0;
    // let filtersCheck = DEMO_FILTERS.length && DEMO_FILTERS.length > 0;
    // let footerCheck = DEMO_FOOTER_DATA.contact && DEMO_FOOTER_DATA.address && DEMO_FOOTER_DATA.map;
    // let resumeCheck = DEMO_RESUME_DATA.length && DEMO_RESUME_DATA.length > 4;
    // let headerCheck = DEMO_HEADER_DATA.textIntro && DEMO_HEADER_DATA.title && DEMO_HEADER_DATA.subTutle;
    // let loaded = portfolioItemsCheck && filtersCheck && footerCheck && resumeCheck && headerCheck;
    let loaded = true;

    if (loaded) {
      this.setState({
        portfolioItems: DEMO_PORTFOLIO_ITEMS,
        filters: DEMO_FILTERS,
        resumeData: DEMO_RESUME_DATA,
        headerData: DEMO_HEADER_DATA,
        footerData: DEMO_FOOTER_DATA,
        mapData: DEMO_FOOTER_DATA.map,
        loading: false
      })
    } else {
      this.setState({
        loading: true,
      })
    }

  }

  handleOpenArticle = (articleId) => {
    console.log(`article id: ${articleId}`);
    let article = DEMO_PORTFOLIO_ITEMS.filter( item => item._id === articleId)[0].content;
    this.setState({article});
  }

  handleOpenClose = (element) => {
    this.setState({
      [element]: !this.state[element]
    })
  }

  filteringItems = () => {
    let {portfolioItems, currentFilter} = this.state;
    return portfolioItems.filter( item => item.filter === currentFilter);
  }

  changeFilter = (filter) => {
    this.setState({currentFilter: filter})
  }

  render () {
    let {article, loading, openResume, openMap, portfolioItems, filters, resumeData, headerData, footerData, mapData, filteredItems, currentFilter} = this.state;
    const RESUME_PROPS = {
      content: resumeData,
      isOpen: openResume,
      closeHandler: () => this.handleOpenClose('openResume')
    }
    const MAP_PROPS = {
      ...mapData,
      isOpen: openMap,
      closeHandler: () => this.handleOpenClose('openMap'),
    }
    const ARTICLE_PROPS ={
      ...article,
      closeHandler: () => this.handleOpenClose('article'),
    }
    const HEADE_PROPS = {
      ...headerData,
      handleOpenResume: () => this.handleOpenClose('openResume')
    }
    let MAIN_PROPS = {
      filters,
      currentFilter,
      portfolioItems: currentFilter !== 'all' ? this.filteringItems() : portfolioItems,
      handleOpenArticle: this.handleOpenArticle,
      handleFilter: this.changeFilter
    }
    const FOOTER_DATA = {
      ...footerData,
      handleOpenMap: () => this.handleOpenClose('openMap')
    }
    return (
      <div className="IndexPage">
        {loading    ? <Preloader /> : ''}
        {openResume ? <Resume {...RESUME_PROPS} /> : '' }
        {openMap    ? <Map {...MAP_PROPS} /> : ''}
        {article    ? <PortfolioArticle {...ARTICLE_PROPS} /> : '' }

        {
          loading || openResume || openMap || article ?
            null
          :
            <div className="IndexPage__wrap">
              <Header {...HEADE_PROPS} />
              <Main {...MAIN_PROPS} />
              <Footer {...FOOTER_DATA}/>
            </div>
        }
      </div>
    )
  }
}


export default IndexPage
