import React from 'react'
import Link from 'gatsby-link'
import {Button} from '../../components/LIB'

const NAME_COMPONENT = 'CloseBtn'
const LibButton = ({data}) => {
  let {displayName, description} = data.allComponentMetadata.edges[0].node;
  return (
    <div>
      <h1>{displayName}</h1>
      <p>{description.text}</p>
      <Link to="/">Home page </Link>
    </div>
  )
}

export const query = graphql`
  query getData {
    allComponentMetadata(filter: {displayName: { regex: "/Button/" }}) {
      edges {
        node {
          description {
            text
          }
          displayName
          props {
            name
            type {
              name
            }
            required
          }
        }
      }
    }
  }
`

export default LibButton
