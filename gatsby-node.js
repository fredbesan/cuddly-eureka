const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const config = require(`./src/utils/siteConfig`)
const { paginate } = require(`gatsby-awesome-pagination`)

/**
* Here is the place where Gatsby creates the URLs for all the
* posts, tags, pages and authors that we fetched from the Ghost site.
*/
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    /**
    * Issues
    */
    const createIssues = new Promise((resolve, reject) => {
        const issueTemplate = path.resolve(`./src/templates/issue.js`)
        const discoverTemplate = path.resolve(`./src/templates/discover.js`)
        const ContributeComponent = path.resolve(`./src/components/contribute.js`)
        resolve(
            graphql(`
            {
                allGhostPost(
                    sort: {order: ASC, fields: published_at},
                    filter: {
                        slug: {ne: "data-schema"}
                        primary_tag: {name: {eq: "issue"}}
                    }
                ) {
                    edges {
                        node {
                            slug
                            ghostId
                        }
                    }
                }
            }`
            ).then((result) => {
                if (result.errors) {
                    return reject(result.errors)
                }

                if (!result.data.allGhostPost) {
                    return resolve()
                }

                const items = result.data.allGhostPost.edges

                _.forEach(items, ({ node }) => {
                    // This part here defines, that our posts will use
                    // a `/:slug/` permalink.
                    node.url = `/${node.slug}/`

                    createPage({
                        path: node.url,
                        component: path.resolve(issueTemplate),
                        isHome: false,
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            slug: node.slug,
                        },
                    })
                    createPage({
                        path: `${node.url}contribute/tier/${node.ghostId}-backers`,
                        component: path.resolve(ContributeComponent),
                        isHome: false,
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            slug: node.slug,
                        },
                    })
                    // createPage({
                    //     path: `${node.url}donate`,
                    //     component: path.resolve(issueTemplate),
                    //     isHome: false,
                    //     context: {
                    //         // Data passed to context is available
                    //         // in page queries as GraphQL variables.
                    //         slug: node.slug,
                    //     },
                    // })
                })
                // Pagination for posts, e.g., /, /page/2, /page/3
                paginate({
                    createPage,
                    items: items,
                    itemsPerPage: config.postsPerPage,
                    component: discoverTemplate,
                    pathPrefix: `/discover`,
                })

                return resolve()
            })
        )
    })

    return Promise.all([createIssues])
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    console.log(page.path)
    const AppMatchs = page.path.match(/^\/app\//)
    const ContributeMatchs = page.path.match(/^\/.*\/contribute/)
    // const DonateMatchs = page.path.match(/^\/.*\/donate/)
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (AppMatchs){
        if (AppMatchs.input){
            page.matchPath = `/app/*`
            // Update the page.
            createPage(page)
        }
    }

    if (ContributeMatchs){
        if (ContributeMatchs.input){
            page.matchPath = `${page.path}*`
            // Update the page.
            createPage(page)
        }
    }
}
