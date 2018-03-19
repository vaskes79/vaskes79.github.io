import React from 'react'
// import Link from 'gatsby-link'

// import modules
import Header from '../components/PORT/Header'
import Resume from '../components/PORT/Resume'
import Main from '../components/PORT/Main'
import Footer from '../components/PORT/Footer'


const IndexPage = ({data}) => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <Resume />
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default IndexPage
