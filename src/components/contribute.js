import React from "react"
import { graphql, navigate, Link } from "gatsby"
import { isLoggedIn, getUser } from "../services/auth"
import { Login, Layout } from "./common"
import AdoptaUnHincha from '../images/adopta-un-hincha-logo.svg'
import { FaCreditCard } from 'react-icons/fa'
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
            <Layout bodyClass="is-form-page" >
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
                                                <h3 className="subtitle is-size-6-desktop is-size-7-mobile">Perfil</h3>
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

                        <section>
                            <div className="container">
                                <form method="post" onSubmit={(event) => {
                                    this.handleSubmit(event); navigate(this.props.navigateTo)
                                }}>
                                    <h2 className="title is-spaced is-size-5-desktop is-size-5-mobile">Contribuir como:</h2>
                                    <div className="box">
                                        <div className="columns is-centered">
                                            <div className="column is-fullwidth">
                                                <article className="media">
                                                    <div className="media-left">
                                                        <label className="radio">
                                                            <input checked type="radio" name="contribute_as"/>
                                                        </label>
                                                    </div>
                                                    <div className="media-content">
                                                        <div className="content is-small">
                                                            <div className="columns">
                                                                <div className="column is-one-fifth">
                                                                    <figure>
                                                                        <p className="image is-64x64">
                                                                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                                                                        </p>
                                                                    </figure>
                                                                </div>
                                                                <div className="column">
                                                                    <p className="title is-5 is-spaced">{getUser().name} {getUser().lastName}</p>
                                                                    <p className="subtitle is-6">Cuenta personal - {getUser().email}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="columns is-centered">
                                            <div className="column is-fullwidth">
                                                <article className="media">
                                                    <div className="media-left">
                                                        <label className="radio">
                                                            <input type="radio" name="contribute_as"/>
                                                        </label>
                                                    </div>
                                                    <div className="media-content">
                                                        <div className="content is-small">
                                                            <div className="columns">
                                                                {/* <div className="column is-one-fifth">
                                                                    <figure>
                                                                        <p className="image is-64x64">
                                                                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                                                                        </p>
                                                                    </figure>
                                                                </div> */}
                                                                <div className="column">
                                                                    <p className="subtitle is-5 is-spaced">Una nueva Organización</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns is-centered">
                                        <div className="column is-one-third">
                                            <div className="field">
                                                <div className="control">
                                                    <button className="button is-primary is-outlined is-medium is-fullwidth is-rounded">Siguiente</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                        <section>
                            <div className="container">
                                <form method="post" onSubmit={(event) => {
                                    this.handleSubmit(event); navigate(this.props.navigateTo)
                                }}>
                                    <h2 className="title is-spaced is-size-5-desktop is-size-5-mobile">Detalles de la contribución:</h2>
                                    <div className="box">
                                        <label className="label is-large">Cantidad ($ARS)</label>
                                        <div className="field has-addons">
                                            <div className="control">
                                                <a className="button is-large">
                                                $150
                                                </a>
                                            </div>
                                            <div className="control">
                                                <a className="button is-large">
                                                $1000
                                                </a>
                                            </div>
                                            <div className="control">
                                                <a className="button is-large">
                                                $2500
                                                </a>
                                            </div>
                                            <div className="control">
                                                <a className="button is-large">
                                                $5000
                                                </a>
                                            </div>
                                            <div className="control">
                                                <input className="input is-large" type="text" placeholder="$500"/>
                                            </div>
                                        </div>

                                        <label className="label is-large">Frecuencia</label>
                                        <div className="control">
                                            <div className="select is-large">
                                                <select>
                                                    <option>Mensual</option>
                                                    <option>Trimestral</option>
                                                    <option>Anual</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns is-centered">
                                        <div className="column is-half">
                                            <div className="field">
                                                <div className="control">
                                                    <button className="button is-primary is-outlined is-medium is-fullwidth is-rounded">Anterior</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-half">
                                            <div className="field">
                                                <div className="control">
                                                    <button className="button is-disabled is-medium is-fullwidth is-rounded">Siguiente</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>

                        <section>
                            <div className="container">
                                <form method="post" onSubmit={(event) => {
                                    this.handleSubmit(event); navigate(this.props.navigateTo)
                                }}>
                                    <h2 className="title is-spaced is-size-5-desktop is-size-5-mobile">Contribuir como:</h2>
                                    <div className="box">
                                        <div className="columns is-centered">
                                            <div className="column is-fullwidth">
                                                <article className="media">
                                                    <div className="media-left">
                                                        <label className="radio">
                                                            <input checked type="radio" name="contribute_as"/>
                                                        </label>
                                                    </div>
                                                    <div className="media-content">
                                                        <div className="content is-large">
                                                            <div className="columns">
                                                                <div className="column is-one-fifth">
                                                                    <span className="icon is-large">
                                                                        <FaCreditCard/>
                                                                    </span>
                                                                </div>
                                                                <div className="column">
                                                                    <p className="subtitle is-5">Nueva tarjeta de crédito/débito</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="columns is-centered">
                                            <div className="column is-fullwidth">
                                                <article className="media">
                                                    <div className="media-left">
                                                        <label className="radio">
                                                            <input type="radio" name="contribute_as"/>
                                                        </label>
                                                    </div>
                                                    <div className="media-content">
                                                        <div className="content is-small">
                                                            <div className="columns">
                                                                {/* <div className="column is-one-fifth">
                                                                    <figure>
                                                                        <p className="image is-64x64">
                                                                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                                                                        </p>
                                                                    </figure>
                                                                </div> */}
                                                                <div className="column">
                                                                    <p className="subtitle is-5 is-spaced">Una nueva Organización</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns is-centered">
                                        <div className="column is-one-third">
                                            <div className="field">
                                                <div className="control">
                                                    <button className="button is-primary is-outlined is-medium is-fullwidth is-rounded">Siguiente</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
