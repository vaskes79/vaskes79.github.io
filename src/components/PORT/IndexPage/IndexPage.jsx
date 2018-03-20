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

  filterProjects = (filter) => {
    return this.state.projects.filter( item => item.filter === filter);
  }
  showContent = () => {
    let {projects, filters, currentFilter, resumeOpen} = this.state;
    return (

        <div key={uniqueId('main_')} className="IndexPage__contentWrap">
          <Header
            openResume={this.openResume}
            isOpen={resumeOpen}  />
          <Main
            portfolioData={currentFilter !== 'all' ? this.filterProjects(currentFilter) : projects}
            filters={filters}
            currentFilter={currentFilter}
            onChangeFilter={this.changeFilter}/>
          <Footer />
        </div>
    )
  }

  render () {
    let {loading, resumeOpen} = this.state;
    let content = loading ?
      <Preloader key={uniqueId('Preloader_')} />
      :
      resumeOpen ?
      <Resume key={uniqueId('Preloader_')} closeHandler={this.openResume} />
      :
      this.showContent();

    return (
      <div className={`IndexPage`}>
        {content}
      </div>
    )
  }
}

export default IndexPage