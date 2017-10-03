import React from 'react'
//import Link from 'gatsby-link'
import HeaderWithImg from '../components/HeaderWithImg'

const StyleGide = () => {
  return (
    <div>
      <HeaderWithImg />
      <div className="section group">
        <div className="col span_12_of_12">
          <h1 style={{textAlign: 'center', fontSize: '72px', padding: '50px 0'}}>Basic Elements</h1>
        </div>
      </div>
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
