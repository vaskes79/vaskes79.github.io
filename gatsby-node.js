exports.onCreatePage = ({page, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/dashboard/)) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = 'dashboard';

      // Update the page.
      createPage(page);
    } else if (page.path.match(/^\/stylegide/)) {
      // It's assumed that `landingPage.js` exists in the `/layouts/` directory
      page.layout = 'stylegide';

      // Update the page.
      createPage(page);
    } else {
      page.layout = 'index';
    }

    resolve();
  });
};
