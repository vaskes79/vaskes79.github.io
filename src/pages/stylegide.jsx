import React from 'react'
//import Link from 'gatsby-link'
import Header from '../components/PORT/Header'
import Resume from '../components/PORT/Resume'
import Main from '../components/PORT/Main'

const StyleGide = () => {

  return (
    <div>
      <Header />
      <Main />
      <Resume />
    </div>
  )
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
