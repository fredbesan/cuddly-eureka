import React from 'react'
import classNames from 'classnames'
import hashmeOrgLogo from '../../images/logo.svg'
import { getUser, isLoggedIn, logout } from "../../services/auth"
import { FaAngleDown } from 'react-icons/fa'
import '../../styles/styles.scss'
// import { Link } from '@reach/router'
import { Link, navigate } from "gatsby"
// import bulmaLogo from '../images/bulma-logo.png'

class Navbar extends React.Component {
    state = {
        isActive: false,
    }

    handleClick = () => {
        this.setState((state) => {
            return { isActive: !state.isActive }
        })
    }

    render() {
        const burgerClass = classNames({
            "navbar-burger": true,
            burger: true,
            "is-active": this.state.isActive,
        })

        const menuClass = classNames({
            "navbar-menu": true,
            "is-active": this.state.isActive,
        })

        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a href="/" className="navbar-item">
                            <img src={hashmeOrgLogo} alt="Logo"/>
                        </a>
                        <span className={burgerClass} onClick={this.handleClick} data-target="navbarMenuHeroC">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenuHeroC" className={menuClass}>
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
                                {isLoggedIn() ? (
                                    <>
                                        <div className="control has-icons-rigth">
                                            <div className="is-fullwidth">
                                                <div className="dropdown is-hoverable">
                                                    <div className="dropdown-trigger">
                                                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                                            <span className="icon is-large"><figure className="image" style={{ marginLeft: `2px` }}>🐨</figure></span>
                                                            Hola {getUser().name}!
                                                            <span className="icon is-small">
                                                                <FaAngleDown/>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                                                        <div className="dropdown-content">
                                                            <Link to="/app/profile" className="dropdown-item">
                                                                Mi Perfil
                                                            </Link>
                                                            <Link to="/app/wallet" className="dropdown-item">
                                                                Mi Billetera
                                                            </Link>
                                                            <hr className="dropdown-divider"/>
                                                            <a to="/app/wallet" className="dropdown-item" onClick={(event) => {
                                                                event.preventDefault()
                                                                logout(() => navigate(`/app/login`))
                                                            }}>
                                                                Salir
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <select className="is-large" name="project type" required="">
                                                            <option value="0" disabled="" selected="">Hola {getUser().name}!</option>
                                                            <option>
                                                                <Link to="/app/profile">
                                                                </Link>
                                                            </option>
                                                            <option>Billetera</option>
                                                            <option>App</option>
                                                            <option>Salir</option>
                                                        </select>
                                                        <span className="icon is-large"><figure className="image" style={{ "margin-left": `2px` }}>🐨</figure></span> */}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link className="button is-secondary is-rounded is-outlined" to="/app/login">
                                        <span>
                                            {` `}
                                            <h1>Hola Mundo! </h1>
                                        </span>
                                    </Link>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
