import React, { Fragment } from 'react'

import { Layout } from '../components/common'
import SignUpForm from '../components/common/SignUp'
import { Link } from "gatsby"
import hashmeOrgIsoLogo from '../images/hashme-isologo.svg'

const SignUpPage = () => (
    <Fragment>
        <div className="is-form-page">
            <section className="is-white has-text-centered">
                <div className="container">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-three-quarters">
                                <img className="avatar" src={hashmeOrgIsoLogo}/>
                                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Crea una cuenta en Hashme.org</h1>
                                <h2 className="subtitle">Tienes ya una cuenta?{` `}
                                    <Link to="/signin">
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
                    <SignUpForm />
                </div>
            </section>
        </div>

    </Fragment>
)

export default () => (
    <Layout>
        <SignUpPage />
    </Layout>
)
