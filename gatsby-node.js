exports.onCreatePage = ({page, boundActionCreators}) => {
  const {createPage} = boundActionCreators

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/stylegide/)) {
      page.layout = 'stylegide'
      createPage(page)
    } else {
      page.layout = 'index'
    }
    resolve()
  })
}
