import React from "react"
import { getUser } from "../services/auth"

const Wallet = () => (
    <>
              <section className="section call-to-action is-primary">
                  <div className="container is-narrow">
                      <div className="box">
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
              </section>
              <section className="is-white">
                  <div className="container">
                      <div className="columns">
                          <div className="column">
                              <div className="box"></div>
                          </div>
                          <div className="column">
                              <div className="box"></div>
                          </div>
                      </div>
                  </div>
              </section>
          </>
)

export default Wallet
