import React from "react"
import { navigate, Link } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import { Layout, Hero } from "./common"
import hashmeOrgIsoLogo from '../images/hashme-isologo.svg'

class Registry extends React.Component {
  state = {
      username: ``,
      password: ``,
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

  render() {
      if (isLoggedIn()) {
          navigate(`/app/profile`)
      }

      return (
          <div className="is-form-page">
              <section className="is-white has-text-centered">
                  <div className="container">
                      <div className="container">
                          <div className="columns is-centered">
                              <div className="column is-three-quarters">
                                  <img className="avatar" src={hashmeOrgIsoLogo}/>
                                  <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Crea una cuenta en Hashme.org</h1>
                                  <h2 className="subtitle">Tienes ya una cuenta?{` `}
                                      <Link to="/app/login">
                                            Inicia sesión
                                      </Link>
                                  </h2>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="is-white">
                  <div className="container">
                      <form method="post" onSubmit={(event) => {
                          this.handleSubmit(event); navigate(`/app/profile`)
                      }}>
                          <div className="columns is-centered">
                              <div className="column is-half">
                                  <div className="field">
                                      <label className="label">Usuario</label>
                                      <div className="control is-expanded">
                                          <input className="input is-large" type="text" name="username" placeholder="Usuario o email" onChange={this.handleUpdate} />
                                      </div>
                                  </div>
                              </div>
                              <div className="column is-half">
                                  <div className="field">
                                      <label className="label">Email</label>
                                      <div className="control is-expanded">
                                          <input className="input is-large" type="password" name="password" placeholder="Ingresá tu contraseña" onChange={this.handleUpdate}/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="columns is-centered">
                              <div className="column is-half">
                                  <div className="field">
                                      <label className="label">Contraseña</label>
                                      <div className="control is-expanded">
                                          <input className="input is-large" type="password" name="password" placeholder="Ingresá tu contraseña" onChange={this.handleUpdate}/>
                                      </div>
                                  </div>
                              </div>
                              <div className="column is-half">
                                  <div className="field">
                                      <label className="label">Repetir contraseña</label>
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
                                          <button className="button is-primary is-outlined is-medium is-fullwidth is-rounded">Empezar</button>
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
}

export default Registry
