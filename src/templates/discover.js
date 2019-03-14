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
        { active: true, text: `Todas` },
        { active: false, text: `Modifiers` },
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
            <Layout heroBody={HeroBody} tabs={tabs} navColor="white" modifiers={`is-medium has-text-centered is-primary`}>
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
        <h1 className="title is-spaced big-title has-text-white	">Colectas</h1>
        <h2 className="subtitle is-4-desktop is-5-mobile">Descubre causas asombrosas para apoyar</h2>
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
