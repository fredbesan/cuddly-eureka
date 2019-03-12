import React, { Fragment } from 'react'

import { Layout } from '../components/common'
import { Link } from "gatsby"
import SignInForm, {
    SignInGoogle,
    SignInFacebook,
    SignInTwitter,
} from '../components/common/SignIn'
import { SignUpLink } from '../components/common/SignUp'
import { PasswordForgetLink } from '../components/common/PasswordForget'
import hashmeOrgIsoLogo from '../images/hashme-isologo.svg'

const SignInPage = () => (
    <Fragment>
        <div className="is-form-page">
            <section className="is-white has-text-centered">
                <div className="container">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-three-quarters">
                                <img className="avatar" src={hashmeOrgIsoLogo}/>
                                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Iniciar Sesión</h1>
                                <Link to="/signup">
                                    <h2 className="subtitle">Registrarme</h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="is-white">
                <div className="container">
                    <SignInForm />
                </div>
            </section>
        </div>
        {/*
        <SignInGoogle />
        <SignInFacebook />
        <SignInTwitter />
        <PasswordForgetLink />
        <SignUpLink /> */}
    </Fragment>
)

export default () => (
    <Layout>
        <SignInPage />
    </Layout>
)
