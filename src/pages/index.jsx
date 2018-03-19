import React, {Component} from 'react'
// import Link from 'gatsby-link'

// import modules
import Header from '../components/PORT/Header'
import Resume from '../components/PORT/Resume'
import Main from '../components/PORT/Main'
import Footer from '../components/PORT/Footer'

// import db modules
import {DB as db} from '../data/firebase'


class IndexPage extends Component {
  state = {
    loading: false,
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
            [dataName]: dataVal.val()
          })
        } else {
          console.log(`error set ${dataName} in CWM`);
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
  showContent = () => {
    let {projects, filters, currentFilter} = this.state;
    return (
      <div>
        <Header />
        <Main
          portfolioData={projects}
          filters={filters}
          currentFilter={currentFilter}
          onChangeFilter={this.changeFilter}/>
        <Footer />
      </div>
    )
  }

  render () {
    let {loading, resumeOpen} = this.state;
    const CONTENT = loading ? <div>loading...</div> : resumeOpen ? <Resume /> : this.showContent();
    return (
      <div>
        {CONTENT}
      </div>
    )
  }
}

export default IndexPage
