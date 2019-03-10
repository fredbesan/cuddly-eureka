import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, IssueCard } from '../components/common'
// import { MetaData } from '../components/common/meta'

/**
* Main index page
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Discover = ({ data, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <>
            <Layout isHome={true}>
                <section className="hero is-primary is-medium is-long-ish is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Hi, I’m Matt. Nice to meet you.</h1>
                            <h2 className="subtitle is-size-5-desktop">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</h2>
                        </div>
                    </div>
                </section>
                <section className="section issue-feed has-text-centered">
                    <div className="container is-narrow">
                        <div className="content">
                            <div className="columns is-multiline">
                                {posts.map(({ node }) => (
                                    // The tag below includes the markup for each post - components/common/PostCard.js
                                    <div key={node.id} className="column is-one-third">
                                        <IssueCard key={node.id} post={node} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

Discover.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default Discover

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
query GhostIssueQuery{
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        filter: {
            slug: {ne: "data-schema"}
            primary_tag: {name: {eq: "issue"}}
        }
    ) {
      edges {
        node {
          id
          slug
          title
          excerpt
          url
          primary_tag {
            id
            name
          }
          primary_author {
            id
            name
          }
        }
      }
    }
  }
`
