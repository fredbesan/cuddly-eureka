import React, { Fragment } from 'react'

import { Layout } from '../components/common'
import SignUpForm from '../components/common/SignUp'
import { Link } from "gatsby"
import hashmeOrgIsoLogo from '../images/hashme-isologo.svg'

const SignUpPage = () => (
    <Fragment>
        <div className="is-form-page">
            <div className="container">
                <SignUpForm />
            </div>
        </div>
    </Fragment>
)

const HeroBody = () => (
    <div className="columns is-centered">
        <div className="column is-three-quarters">
            <img className="avatar" src={hashmeOrgIsoLogo}/>
            <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Registrarse</h1>
            <h2 className="subtitle">¿Ya tienes una cuenta?{` `}
                <Link to="/signin">
                    Inicia sesión
                </Link>
            </h2>
        </div>
    </div>
)

export default () => (
    <Layout heroBody={HeroBody} modifiers={'has-text-centered is-form-page is-small'}>
        <SignUpPage />
    </Layout>
)
