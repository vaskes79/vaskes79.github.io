// the fix for this error when I try deploy my application
// SyntaxError: Unexpected token operator «*», expected punc «(»
// https://github.com/gatsbyjs/gatsby/issues/3931#issuecomment-364414141
// https://github.com/gatsbyjs/gatsby/issues/3972
// don't forgen on top application
// import 'babel-polyfill'
// https://github.com/gatsbyjs/gatsby/issues/3314#issuecomment-355038591
exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(['transform-decorators-legacy', 'transform-regenerator']),
})
// end fix

exports.onCreatePage = ({page, boundActionCreators}) => {
  const {createPage} = boundActionCreators

  return new Promise((resolve) => {
    if (page.path.match(/^\/stylegide/)) {
      page.layout = 'stylegide'
      createPage(page)
    } else if(page.path.match(/^\/projects\//)) {
      page.layout = 'projects'
      createPage(page)
    } else {
      page.layout = 'default'
    }
    resolve()
  })
}
