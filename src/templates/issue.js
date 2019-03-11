import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/common'
import AdoptaUnHincha from '../images/adopta-un-hincha-logo.svg'
import { MetaData } from '../components/common/meta'

/**
* Single issue view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Issue = ({ data, location }) => {
    const post = data.ghostPost
    const url = `${post.slug}/contribute/tier/${post.ghostId}-backers`
    return (
            <>
                <MetaData
                    data={data}
                    location={location}
                    type="article"
                />
                <Layout>
                    <section className="hero is-medium">
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <figure className="image is-64x64" style={{ margin: `0 auto` }}>
                                    <img className="is-issue-icon" src={AdoptaUnHincha}/>
                                </figure>
                                <h1 className="title is-spaced is-size-2-desktop is-size-3-mobile">{post.title}</h1>
                                <h2 className="subtitle is-size-5-desktop is-size-5-mobile">{post.primary_author.bio}</h2>
                                <h2 className="subtitle is-size-6-desktop is-size-5-mobile">Hosted by <strong>{post.primary_author.name}</strong></h2>
                                <div className="backers-icons">
                                    <p className="field">
                                        <a className="button is-warning is-medium" href="">
                                            <span className="icon is-large">
                                                <figure className="image" style={{ marginLeft: `2px` }}>🐱</figure>
                                            </span>
                                        </a>
                                        <a className="button is-danger is-medium" href="">
                                            <span className="icon is-large">
                                                <figure className="image" style={{ marginLeft: `2px` }}>🐷</figure>
                                            </span>
                                        </a>
                                        <a className="button is-success is-medium" href="">
                                            <span className="icon is-large">
                                                <figure className="image" style={{ marginLeft: `2px` }}>🐨</figure>
                                            </span>
                                        </a>
                                    </p>
                                </div>
                                <hr className="hr" style={{ backgroundColor: `transparent`, marginBottom: `1.5rem` }}/>
                                <h2 className="subtitle is-size-6-desktop is-size-5-mobile">Gracias a sus contribuciones financieras, estamos operando con un presupuesto anual de marketing estimado de <strong>ARS $68.732</strong></h2>
                                <progress className="progress is-small is-primary" value="54.94" max="100">54.94%</progress>
                                <Link to={url} className="button is-large is-primary is-rounded">Apoyar</Link>
                            </div>
                        </div>
                        {/* <!-- Hero footer: will stick at the bottom --> */}
                        <div className="hero-foot">
                            <nav className="tabs">
                                <div className="container">
                                    <ul>
                                        <li className="is-active"><a>Overview</a></li>
                                        <li><a>Modifiers</a></li>
                                        <li><a>Grid</a></li>
                                        <li><a>Elements</a></li>
                                        <li><a>Components</a></li>
                                        <li><a>Layout</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <section className="box issue-body">
                                <div className="container is-narrow">
                                    <div className="content" dangerouslySetInnerHTML={{ __html: post.html }}>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </Layout>
            </>
    )
}

Issue.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Issue

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostIssueFields
        }
    }
`
