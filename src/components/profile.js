import React from "react"
import { getUser } from "../services/auth"
import { FaWallet, FaBroadcastTower, FaBookOpen, FaUserCircle } from 'react-icons/fa'
import hashmeOrgIsoLogo from '../images/hashme-isologo.svg'

const Profile = () => (
    <>
              <section className="section call-to-action">
                  <div className="container is-narrow">
                      <div className="columns">
                          <div className="column is-half">
                              <div className="box">
                                  <div className="columns">
                                      <div className="column is-one-fifth">
                                          <p className="field">
                                              <a className="button is-large" href="" target="_blank">
                                                  <span className="icon is-large">
                                                      <figure className="image" style={{ marginLeft: `2px` }}>
                                                          <img className="avatar" src={hashmeOrgIsoLogo}/>
                                                      </figure>
                                                  </span>
                                              </a>
                                          </p>
                                      </div>
                                      <div className="column">
                                          <h2 className="subtitle is-6 is-spaced">PAGOS PENDIENTES</h2>
                                          <h1 className="title is-3 is-spaced">5.40 HASHP</h1>
                                          <h2 className="subtitle is-6">~ 0.00 ARS</h2>
                                          <h2 className="subtitle is-7">
                                              <span>Fecha de próxima Donación: </span><span>Abril 8</span>
                                          </h2>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="column is-half">
                              <div className="box is-primary">
                                  <div className="columns">
                                      <div className="column is-one-fifth">
                                          <p className="field">
                                              <a className="button is-warning is-medium" href="https://twitter.com/farleymatters" target="_blank">
                                                  <span className="icon is-large">
                                                      <figure className="image" style={{ marginLeft: `2px` }}>🐨</figure>
                                                  </span>
                                              </a>
                                          </p>
                                      </div>
                                      <div className="column">
                                          <h1 className="title">{getUser().name}</h1>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="is-white">
                  <div className="container">
                      <div className="columns">
                          <div className="column is-half">
                              <div className="box">
                                  <div className="columns">
                                      <div className="column is-one-fifth">
                                          <p className="field">
                                              <a className="button is-large is-success is-inverted" href="" target="_blank">
                                                  <span className="icon is-large">
                                                      <FaWallet/>
                                                  </span>
                                              </a>
                                          </p>
                                      </div>
                                      <div className="column">
                                          <h2 className="title is-4">Tu Billetera</h2>
                                      </div>
                                  </div>
                                  <div className="columns">
                                      <div className="column is-one-fifth">
                                          <p className="field">
                                              <a className="button is-large is-danger is-inverted" href="" target="_blank">
                                                  <span className="icon is-large">
                                                      <FaBroadcastTower/>
                                                  </span>
                                              </a>
                                          </p>
                                      </div>
                                      <div className="column">
                                          <h2 className="subtitle is-7">
                                              <span>Para recibir el saldo de su contribución, deberá verificar completamente su identidad en Uphold.</span>
                                          </h2>
                                      </div>
                                  </div>
                                  <div className="columns is-centered">
                                      <div className="column is-one-third">
                                          <div className="field">
                                              <div className="control">
                                                  <button className="button is-primary is-outlined is-medium is-fullwidth is-rounded">
                                                Conectar
                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="column is-half">
                              <div className="box">
                                  <div className="columns">
                                      <div className="column is-one-fifth">
                                          <p className="field">
                                              <a className="button is-large is-primary is-inverted" href="" target="_blank">
                                                  <span className="icon is-large">
                                                      <FaBookOpen/>
                                                  </span>
                                              </a>
                                          </p>
                                      </div>
                                      <div className="column">
                                          <h2 className="title is-4 is-spaced">Estado de cuenta</h2>
                                          <h1 className="subtitle is-6 is-spaced">No hay declaraciones disponibles.</h1>
                                      </div>
                                  </div>
                                  <div className="columns">
                                      <div className="column is-one-fifth">
                                          <p className="field">
                                              <a className="button is-large is-info is-inverted" href="" target="_blank">
                                                  <span className="icon is-large">
                                                      <FaUserCircle/>
                                                  </span>
                                              </a>
                                          </p>
                                      </div>
                                      <div className="column">
                                          <h2 className="title is-4 is-spaced">Contacto</h2>
                                          <h1 className="subtitle is-6 is-spaced">No hay declaraciones disponibles.</h1>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </>
)

export default Profile
