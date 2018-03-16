import React, {Component} from 'react'
//import Link from 'gatsby-link'
import Header from '../components/PORT/Header'
import Resume from '../components/PORT/Resume'
import Main from '../components/PORT/Main'
import PortfolioItem from '../components/PORT/PortfolioItem'
import ReadMore from '../components/PORT/ReadMore'
import Footer from '../components/PORT/Footer'


class StyleGide extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <Resume />
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
