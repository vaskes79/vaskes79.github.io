import React from 'react'
import Link from 'gatsby-link'
import {Button} from '../../components/LIB'

const LibButton = () => {
  return (
    <div>
      <h1>Button </h1>
      <Link to="/">Home page </Link>
      <Button text="demo"/>
    </div>
  )
}

export default LibButton
