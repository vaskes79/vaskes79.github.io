exports.onCreatePage = ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators

    return new Promise((resolve, reject) => {
        if (page.path.match(/^\/dashboard/)) {
            // It's assumed that `landingPage.js` exists in the `/layouts/` directory
            page.layout = "dashboard"

            // Update the page.
            createPage(page)
        }

        resolve()
    })
}