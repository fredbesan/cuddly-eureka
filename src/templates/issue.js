import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import { Layout } from '../components/common'
import AdoptaUnHincha from '../images/adopta-un-hincha-logo.svg'
import BackerPig from '../images/backer-pig.svg'
import BackerCat from '../images/backer-cat.svg'
import BackerKoala from '../images/backer-koala.svg'

/**
* Single issue view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Issue = ({ data }) => {
    const post = data.ghostPost

    return (
            <>
                <Layout>
                    <section className="hero is-success is-medium is-bold">
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
                                        <a className="button is-warning is-medium" href="https://twitter.com/farleymatters" target="_blank">
                                            <span className="icon is-large">
                                                <figure className="image" style={{ marginLeft: `2px` }}>🐱</figure>
                                            </span>
                                        </a>
                                        <a className="button is-danger is-medium" href="https://twitter.com/farleymatters" target="_blank">
                                            <span className="icon is-large">
                                                <figure className="image" style={{ marginLeft: `2px` }}>🐷</figure>
                                            </span>
                                        </a>
                                        <a className="button is-success is-medium" href="https://twitter.com/farleymatters" target="_blank">
                                            <span className="icon is-large">
                                                <figure className="image" style={{ marginLeft: `2px` }}>🐨</figure>
                                            </span>
                                        </a>
                                    </p>
                                </div>
                                <hr className="hr" style={{ backgroundColor: `transparent`, marginBottom: `1.5rem` }}/>
                                <h2 className="subtitle is-size-6-desktop is-size-5-mobile">Gracias a sus contribuciones financieras, estamos operando con un presupuesto anual de marketing estimado de <strong>ARS $68.732</strong></h2>
                                <progress className="progress is-small is-primary" value="54.94" max="100">54.94%</progress>
                                <a className="button is-large is-primary is-rounded">Apoyar</a>
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
