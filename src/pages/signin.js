import React, { Fragment } from 'react'

import { Layout } from '../components/common'
import SignInForm, {
    SignInGoogle,
    SignInFacebook,
    SignInTwitter,
} from '../components/common/SignIn'

import { SignUpLink } from '../components/common/SignUp'
import hashmeOrgIsoLogo from '../images/hashme-isologo.svg'
import hashmeOrgLogoGray from '../images/logo-grayscale.svg'
import dreamderImage from '../images/undraw_dreamer.svg'

const SignInPage = () => (
    <div className="login-wrapper columns is-gapless">
        <div className="column is-7">
            <div className="hero is-fullheight">
                <div className="hero-head">
                    <div className="section has-text-centered">
                        <a href="/">
                            <img className="top-logo" src={hashmeOrgLogoGray} alt="Hashme Core Logo"/>
                        </a>
                    </div>
                    <div className="no-account-link has-text-centered">
                        <a href="/signup">¿ No tienes una cuenta ? </a>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column"></div>
                            <div className="column is-5">
                                <SignInForm />
                            </div>
                            <div className="column">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="column login-column is-5 is-hidden-mobile hero-banner">
            <div className="hero is-fullheight is-primary is-relative">
                <div className="columns has-text-centered">
                    <div className="column">
                        <h2 className="title is-2 has-text-light has-text-weight-light">Empieza a hoy</h2>
                        <h3 className="subtitle is-6 has-text-light has-text-weight-normal">Únete a la Plataforma Marketing Non-Profit más grande del mundo.</h3>
                        <div className="has-text-centered">
                            <a className="button is-primary is-inverted is-outlined is-large is-rounded">
                                Regístrate ahora
                            </a>
                        </div>
                    </div>
                </div>
                <img className="login-city" src={dreamderImage} alt="A dreamer image"/>
            </div>
        </div>
        {/* <SignInForm /> */}
        {/* <div className="columns has-text-centered">
            <div className="column is-one-third">
                <SignInGoogle />
            </div>
            <div className="column is-one-third">
                <SignInFacebook />
            </div>
            <div className="column is-one-third">
                <SignInTwitter />
            </div>
        </div> */}
    </div>
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
    <Layout heroBody={HeroBody} clean={true} modifiers={'has-text-centered is-form-page is-small'}>
        <SignInPage />
    </Layout>
)
