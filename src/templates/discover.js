import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, IssueCard } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Main index page
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Discover = ({ data, location }) => {
    const posts = data.allGhostPost.edges
    const tabs = [
        { active: true, text: `Overview` },
        { active: true, text: `Modifiers` },
        { active: false, text: `Grid` },
        { active: false, text: `Elements` },
        { active: false, text: `Components` },
        { active: false, text: `Layout` },
    ]

    return (
        <>
            <MetaData
                data={data}
                location={location}/>
            <Layout heroBody={HeroBody} tabs={tabs} modifiers={'is-medium has-text-centered'}>
                <div className="section">
                    <div className="container">
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
            </Layout>
        </>
    )
}

const HeroBody = () => (
    <>
        <h1 className="title is-spaced is-size-2-desktop is-size-3-mobile">Descubre colectas asombrosas para apoyar</h1>
        <h2 className="subtitle is-size-3-desktop is-size-5-mobile">Hagamos grandes cosas juntos.</h2>
    </>
)

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
