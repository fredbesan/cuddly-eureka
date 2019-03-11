import React from "react"
import { navigate, Link } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"
import hashmeOrgIsoLogo from '../../images/hashme-isologo.svg'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ``,
            password: ``,
        }
    }

    componentDidMount() {
        if (isLoggedIn()) {
            navigate(this.props.navigateTo)
        }
    }

    componentWillUnmount() {

    }

    handleUpdate = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        handleLogin(this.state)
    }

    render = () => (
        <div className="is-form-page">
            <section className="is-white has-text-centered">
                <div className="container">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-three-quarters">
                                <img className="avatar" src={hashmeOrgIsoLogo}/>
                                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Iniciar Sesión</h1>
                                <Link to="/app/registry">
                                    <h2 className="subtitle">Registrarme</h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="is-white">
                <div className="container">
                    <form method="post" onSubmit={(event) => {
                        this.handleSubmit(event); navigate(this.props.navigateTo)
                    }}>
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <div className="field">
                                    <label className="label">Usuario o email</label>
                                    <div className="control is-expanded">
                                        <input className="input is-large" type="text" name="username" placeholder="Usuario o email" onChange={this.handleUpdate} />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-half">
                                <div className="field">
                                    <label className="label">Contraseña</label>
                                    <div className="control is-expanded">
                                        <input className="input is-large" type="password" name="password" placeholder="Ingresá tu contraseña" onChange={this.handleUpdate}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-centered">
                            <div className="column is-one-third">
                                <div className="field">
                                    <div className="control">
                                        <button className="button is-primary is-outlined is-medium is-fullwidth is-rounded">Iniciar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Login
