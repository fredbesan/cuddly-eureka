import React from 'react'
import hashmeOrgLogo from '../../images/logo.svg'

import '../../styles/styles.scss'
// import bulmaLogo from '../images/bulma-logo.png'

const Navbar = () => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
            <div className="navbar-brand">
                <a href="/" className="navbar-item">
                    <img src={hashmeOrgLogo} alt="Logo"/>
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end">
                    <a href="/discover" className="navbar-item has-text-grey">
                        Descubre
                    </a>
                    <a className="navbar-item has-text-grey">
                        Cómo funciona
                    </a>
                    <a className="navbar-item has-text-grey">
                        Casos
                    </a>
                    <a className="navbar-item has-text-grey">
                        Blog
                    </a>
                    <span className="navbar-item">
                        <a className="button is-secondary is-rounded is-outlined">
                            <span>Ingresar</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar
