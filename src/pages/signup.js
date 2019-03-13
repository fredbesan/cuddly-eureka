import React, { Fragment } from 'react'

import { Layout } from '../components/common'
import SignUpForm from '../components/common/SignUp'
import { Link } from "gatsby"
import hashmeOrgIsoLogo from '../images/hashme-isologo.svg'
import hashmeOrgLogoGray from '../images/logo-grayscale.svg'
import dreamderImage from '../images/undraw_website_setup.svg'

const SignUpPage = () => (
    <div className="login-wrapper columns is-gapless">
        <div className="column is-4">
            <div className="hero is-fullheight">
                <div className="hero-head">
                    <div className="section intro-section has-text-centered">
                        <a href="/">
                            <img className="top-logo" src={hashmeOrgLogoGray} alt="Hashme Core Logo"/>
                        </a>
                        <div id="signup-intro" className="intro-text has-text-centered animated preFadeInLeft fadeInLeft">
                            <div className="intro-sub subtitle is-6">Únete a la Plataforma Marketing Non-Profit más grande del mundo.</div>
                        </div>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                                <SignUpForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="column login-column is-8 is-hidden-mobile hero-banner">
            <div className="hero signup-hero is-fullheight is-theme-primary is-relative">
                <div className="columns has-text-centered">
                    <div className="column">
                        <h1 className="title is-2 light-text">Únete a la comunidad</h1>
                        <h3 className="subtitle is-5 light-text">Únete a la comunidad de Non-Profit Marketing más grande del mundo.</h3>
                        <img className="mockup" src={dreamderImage} alt="A platform mockup"/>
                        <div className="already">
                            <span>¿Ya tienes una cuenta ?</span>
                            <a href="/signin" className="button btn-align btn-outlined is-bold light-btn rounded">Inicia</a>
                        </div>
                        {/* <div className="has-text-centered">
                            <a href="/signup" className="button is-primary is-inverted is-outlined is-large is-rounded">
                                Regístrate ahora
                            </a>
                        </div> */}
                    </div>
                </div>
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
    // <Fragment>
    //     <div className="is-form-page">
    //         <div className="container">
    //             <SignUpForm />
    //         </div>
    //     </div>
    // </Fragment>
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
    <Layout heroBody={HeroBody} clean={true} modifiers={'has-text-centered is-form-page is-small'}>
        <SignUpPage />
    </Layout>
)
