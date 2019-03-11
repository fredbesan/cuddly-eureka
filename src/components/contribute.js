import React from "react"
import { graphql, navigate, Link } from "gatsby"
import { isLoggedIn } from "../services/auth"
import { Login, Layout } from "./common"
import AdoptaUnHincha from '../images/adopta-un-hincha-logo.svg'

class Contribute extends React.Component {
    constructor(props){
        super(props)
        this.issue = this.props.data.ghostPost
        this.url = `/${this.issue.slug}/contribute/tier/${this.issue.ghostId}-backers`
    }

    componentDidMount = () => {
        // if (isLoggedIn()) {
        //     navigate(this.issue.url)
        // }
    }

    render = () => (
        <>
            <Layout>
                {!isLoggedIn() ?
                    <Login navigateTo={this.url}/>
                    : <>
                        <section className="hero is-medium">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <figure className="image is-64x64" style={{ margin: `0 auto` }}>
                                        <img className="is-issue-icon" src={AdoptaUnHincha}/>
                                    </figure>
                                    <h1 className="title is-spaced is-size-2-desktop is-size-3-mobile">{this.issue.title}</h1>
                                    <h2 className="subtitle is-size-5-desktop is-size-5-mobile">{this.issue.excerpt}</h2>
                                    <hr className="hr" style={{ backgroundColor: `transparent`, marginBottom: `1.5rem` }}/>
                                </div>
                            </div>
                            <div className="hero-foot">
                                <div className="container">
                                    <nav className="pagination is-rounded is-large" role="navigation" aria-label="pagination">
                                        <ul className="pagination-list contribute-timeline">
                                            <li>
                                                <a className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
                                                <h3 className="subtitle is-size-6-desktop is-size-7-mobile">Contribuir como</h3>
                                            </li>
                                            <li>
                                                <a className="pagination-link" aria-label="Goto page 2">2</a>
                                                <h3 className="subtitle is-size-6-desktop is-size-7-mobile">Contribución</h3>
                                            </li>
                                            <li>
                                                <a className="pagination-link" aria-label="Goto page 3">3</a>
                                                <h3 className="subtitle is-size-6-desktop is-size-7-mobile">Pago</h3>
                                            </li>
                                            <li>
                                                <a className="pagination-link" aria-label="Goto page 4">4</a>
                                                <h3 className="subtitle is-size-6-desktop is-size-7-mobile">Resumen</h3>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </section>
                    </>
                }
            </Layout>
        </>
    )
}

export default Contribute

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostIssueFields
        }
    }
`
