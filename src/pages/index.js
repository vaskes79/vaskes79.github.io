import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {

  let { title, description } = data.site.siteMetadata
  return <div>
    <h1>{ title }</h1>
    <p>{ description }</p>
    <Link to="/page-2/">page 2</Link>
    <br />
    <Link to="/dashboard/">dashboard</Link>
  </div>
}

export const query = graphql`
query IndexQuery {
  site{
    siteMetadata{
      title,
      description
    }
  }
}
`

export default IndexPage
