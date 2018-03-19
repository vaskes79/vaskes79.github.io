require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Vasily Guzov`,
    description: `web developer and frontend engienras`,
  },
  plugins: [`gatsby-plugin-react-helmet`],
}
