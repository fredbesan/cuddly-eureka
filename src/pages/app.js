import React from "react"
import { Router } from "@reach/router"
import { Layout, PrivateRoute } from '../components/common'
import { Login } from "../components/common"
import Registry from "../components/registry"
import Profile from "../components/profile"
import Wallet from "../components/wallet"
import Donate from "../components/Donate"
import Contribute from "../components/contribute"
import { graphql } from 'gatsby'

const App = ({ data, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <>
            <Layout>
                <Router>
                    <PrivateRoute path="/app/profile" component={Profile} />
                    <PrivateRoute path="/app/wallet" component={Wallet} />
                    <Login path="/app/login" navigateTo="/app/profile" />
                    <Registry path="/app/registry" />
                </Router>
            </Layout>
        </>
    )
}

export default App

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
query GhostIssueAppQuery{
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
