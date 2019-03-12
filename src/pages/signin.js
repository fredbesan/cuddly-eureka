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
            <div className="container">
                <SignInForm />
            </div>
        </div>
        {/*
        <SignInGoogle />
        <SignInFacebook />
        <SignInTwitter />
        <PasswordForgetLink />
        <SignUpLink /> */}
    </Fragment>
)

const HeroBody = () => (
    <div className="columns is-centered">
        <div className="column is-three-quarters">
            <img className="avatar" src={hashmeOrgIsoLogo}/>
            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Iniciar Sesión</h1>
            <h2 className="subtitle">¿No tienes una cuenta?{` `}
                <Link to="/signup">
                    Registrate
                </Link>
            </h2>
        </div>
    </div>
)

export default () => (
    <Layout heroBody={HeroBody} modifiers={'has-text-centered is-form-page is-small'}>
        <SignInPage/>
    </Layout>
)
