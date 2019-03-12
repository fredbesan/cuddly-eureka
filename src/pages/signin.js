import React, { Fragment } from 'react'

import { Layout } from '../components/common'
import { Link } from "gatsby"
import SignInForm, {
    SignInGoogle,
    SignInFacebook,
    SignInTwitter,
} from '../components/common/SignIn'
import { SignUpLink } from '../components/common/SignUp'
import hashmeOrgIsoLogo from '../images/hashme-isologo.svg'

const SignInPage = () => (
    <Fragment>
        <div className="is-form-page">
            <div className="container">
                <SignInForm />
                <hr/>
                <div className="columns has-text-centered">
                    <div className="column is-one-third">
                        <SignInGoogle />
                    </div>
                    <div className="column is-one-third">
                        <SignInFacebook />
                    </div>
                    <div className="column is-one-third">
                        <SignInTwitter />
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
)

const HeroBody = () => (
    <div className="columns is-centered">
        <div className="column is-three-quarters">
            <img className="avatar" src={hashmeOrgIsoLogo}/>
            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Iniciar Sesión</h1>
            <SignUpLink/>
        </div>
    </div>
)

export default () => (
    <Layout heroBody={HeroBody} modifiers={'has-text-centered is-form-page is-small'}>
        <SignInPage/>
    </Layout>
)
