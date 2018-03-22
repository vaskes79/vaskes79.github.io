import React, {Component} from 'react'
import {CSSTransitionGroup} from 'react-transition-group'
import {uniqueId} from 'lodash'

// import modules
import Header from '../Header'
import Resume from '../Resume'
import Main from '../Main'
import Footer from '../Footer'
import Preloader from '../Preloader'
import './IndexPage.css'


// import db modules
import {DB as db} from '../../../data/firebase'


class IndexPage extends Component {
  state = {
    loading: true,
    currentFilter: 'all',
    projects: [],
    resumeOpen: false,
    mapOpen: false,
    pageOpen: false,
    filters: [],
  }


  componentWillMount() {
    this.setData('projects');
    this.setData('filters');
  }

  /**
   * send request to firebase
   * and add listener for observe changes
   * arg: string - name data what you whant to get
   * setState
   */
  setData = (dataName) => {
    let ref = db.child(dataName);
    ref.on('value', dataVal => {
        if (dataVal.exists()) {
          this.setState({
            [dataName]: dataVal.val(),
            loading: false
          })
        } else {
          console.log(`error set ${dataName} in CWM`);
          this.setState({
            loading: true
          })
        }
      }
    )
  }
  /**
   * handeler for lower components
   */
  changeFilter = (currentFilter) => {
    this.setState({ currentFilter })
  }
  /**
   * for view loader or resume page or portfolio page
   * maked becose I going add this functionality
   */
  openResume = () => {
    this.setState({
      resumeOpen: !this.state.resumeOpen
    })
  }
  openMap = () => {
    this.setState({
      mapOpen: !this.state.mapOpen
    })
  }

  filterProjects = (filter) => {
    return this.state.projects.filter( item => item.filter === filter);
  }
  showContent = () => {
    let {projects, filters, currentFilter, resumeOpen, pageOpen, mapOpen} = this.state;
    return (

        <div key={uniqueId('main_')} className="IndexPage__contentWrap">
          <Header
            openResume={this.openResume}
            isOpen={resumeOpen}  />
          { mapOpen ?
              ''
              :
            <Main
              portfolioData={currentFilter !== 'all' ? this.filterProjects(currentFilter) : projects}
              filters={filters}
              currentFilter={currentFilter}
              onChangeFilter={this.changeFilter}/>
          }
          <Footer mapIsOpen={mapOpen} handlerMapOpen={this.openMap} />
        </div>
    )
  }

  render () {
    let {loading, resumeOpen, mapOpen, pageOpen} = this.state;
    let content = loading ?
      <Preloader key={uniqueId('Preloader_')} />
      :
      this.showContent();

    return (
      <div className={`IndexPage`}>
          { resumeOpen ? '' : content}
        <CSSTransitionGroup
          transitionName="resumeAnimation"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          { resumeOpen ? <Resume key={uniqueId('Preloader_')} isOpen={true} closeHandler={this.openResume} /> : '' }
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default IndexPage
