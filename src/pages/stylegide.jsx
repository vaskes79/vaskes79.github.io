import React, {Component} from 'react'
//import Link from 'gatsby-link'
import TestComonent from '../components/LIB/TestComponent'
import {Fade} from '../components/LIB/Transitions'
// import TestStatelessComponent from '../components/LIB/TestStatelessComponent'

class StyleGide extends Component {
  state={
    tr: false
  }

  render() {
    return (
      <div style={{width: '100%', height: '100vh'}}>
        <div style={{width: '960px', background: 'gray', margin: '100px auto', padding: '2rem 2.5rem'}}>
          <h1>Name Component</h1>
          <button onClick={() => this.setState({tr: !this.state.tr})}>вкл. комп</button>
          <Fade in={this.state.tr} duration={500} appear={true}>
            <TestComonent />
          </Fade>
        </div>
      </div>
    )
  }
}

//export const query = graphql`
//  query PageQuery {
//    site{
//      siteMetadata{
//        page2 {
//          title,
//          description
//        }
//      }
//    }
//  }
//`
export default StyleGide
