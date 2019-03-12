import React from 'react'
import classNames from 'classnames'
import hashmeOrgLogo from '../../images/logo.svg'
import { FaAngleDown } from 'react-icons/fa'
import '../../styles/styles.scss'
import { Link } from "gatsby"
import { AuthUserContext } from '../common/Session'
import SignOutButton from '../common/SignOut'

const Navbar = () => (
    <AuthUserContext.Consumer>
        {
            authUser => authUser ? (<NavigationAuth authUser={authUser} />) : (<NavigationNonAuth />)
        }
    </AuthUserContext.Consumer>
)
class NavigationAuth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isActive: false,
        }
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
                        <div className="navbar-end has-text-centered-mobile">
                            <a href="/discover" className="navbar-item has-text-grey">
                    Descubre
                            </a>
                            <span className="navbar-item">
                                <div className="control has-icons-rigth">
                                    <div className="columns">
                                        <div className="column has-text-centered-mobile">
                                            <div className="dropdown is-hoverable">
                                                <div className="dropdown-trigger">
                                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                                        <span className="icon is-large"><figure className="image" style={{ marginLeft: `2px` }}>🐨</figure></span>
                                                        Hola {this.props.authUser.username}!
                                                        <span className="icon is-small">
                                                            <FaAngleDown/>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                                                    <div className="dropdown-content">
                                                        <Link to="/account" className="dropdown-item">
                                                            Mi Perfil
                                                        </Link>
                                                        <Link to="/wallet" className="dropdown-item">
                                                            Mi Billetera
                                                        </Link>
                                                        <hr className="dropdown-divider"/>
                                                        <div className="dropdown-item">
                                                            <SignOutButton/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
class NavigationNonAuth extends React.Component {
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
                        <div className="navbar-end has-text-centered-mobile">
                            <a href="/discover" className="navbar-item has-text-grey">
                    Descubre
                            </a>
                            <span className="navbar-item">
                                <Link className="button is-secondary is-rounded is-outlined" to="/signin">
                                    <span>
                                        {` `}
                                        <h1>Hola Mundo! </h1>
                                    </span>
                                </Link>

                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
