import React, {Component} from 'react'
import {uniqueId} from 'lodash'
import 'babel-polyfill'
// import db modules
import {getDataOnce} from '../../../data/firebase'
// import compones
import Preloader from '../Preloader'
import {Fade} from '../../LIB/Transitions'
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
    resumeData: [],
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

  async getData() {
    let loaded = true;
    let portfolioItems = await getDataOnce('projects');
    let filters = await getDataOnce('filters');
    let resumeData = await getDataOnce('resume');
    let headerData = await getDataOnce('header');
    let footerData = await getDataOnce('footer');
    let loading = portfolioItems && filters && resumeData && headerData && footerData ? false : true;

    if (loaded) {
      this.setState({
        portfolioItems,
        filters,
        resumeData,
        headerData,
        footerData,
        mapData: footerData.map,
        loading,
      })
    } else {
      this.setState({
        loading: true,
      })
    }
  }

  handleOpenArticle = (articleId) => {
    let article = this.state.portfolioItems.filter( item => item._id === articleId)[0].content;
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
        <Resume {...RESUME_PROPS} isOpen={openResume} />
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
