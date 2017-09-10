import React from 'react'
import Link from 'gatsby-link'

const SecondPage = ({ data }) => {
  let { title, description } = data.site.siteMetadata.page2;
  return <div>
    <h1>{ title }</h1>
    <p>{ description }</p>
    <Link to="/">Go back to the homepage</Link>
  </div>

}

export const query = graphql`
  query PageQuery {
    site{
      siteMetadata{
        page2 {
          title,
          description
        }
      }
    }
  }
`
export default SecondPage
