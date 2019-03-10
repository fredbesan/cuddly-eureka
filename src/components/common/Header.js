import React from 'react'
import { FaGithub, FaLongArrowAltRight } from 'react-icons/fa'
import { Navbar } from '.'
import hashmeOrgLogo from '../../images/logo.svg'
import workChatImg from '../../images/undraw_work_chat_erdt.svg'

import '../../styles/styles.scss'

const Header = () => (
    <section className="hero is-fullheight">
        {/* <!-- Hero head: will stick at the top --> */}
        <div className="hero-head">
            <header className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item">
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
                            <a className="navbar-item">
                                Descubre
                            </a>
                            <a className="navbar-item">
                                Cómo funciona
                            </a>
                            <a className="navbar-item">
                                Casos
                            </a>
                            <a className="navbar-item">
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
            </header>
        </div>

        {/* <!-- Hero content: will be in the middle --> */}
        <div className="hero-body">
            <div className="container">
                <div className="columns is-desktop is-vcentered">
                    <div className="column has-text-centered is-hidden-mobile">
                        <figure className="image" style={{ marginBottom: `48px` }}>
                            <img src={workChatImg} alt="Work Chat Erdt Image"/>
                        </figure>
                        <h5 className="title is-5 is-spaced">Todos son bienvenidos a unirse y contribuir</h5>
                        <h6 className="subtitle is-6">Todos pueden contribuir a tu campaña abierta, lo único que necesitas es personas que crean en tu misión</h6>
                    </div>
                    <div className="column">
                        <h1 className="title is-1">Crea una campaña colaborativa</h1>
                        <h5 className="title is-5 is-spaced">Un grupo de personas que comparten la misión de potenciar las causas sociales a traves del marketing</h5>
                        <h6 className="subtitle is-6">Crea una campaña colaborativa y libera el poder de la comunidad para darle vida a tu misión </h6>
                        <a className="button is-primary is-rounded is-large">Crea una campaña</a>
                        <a className="button is-primary is-text is-large is-inverted" style={{ textDecoration: `none` }}>
                            <span>Saber más</span>
                            <span className="icon">
                                <FaLongArrowAltRight/>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Header
