import React from 'react'
import classNames from 'classnames'
import hashmeOrgLogo from '../../images/logo.svg'
import hashmeOrgIsoLogo from '../../images/isoLogo.svg'
import { FaAngleDown } from 'react-icons/fa'
import '../../styles/styles.scss'
import { Link } from "gatsby"
import { AuthUserContext } from '../common/Session'
import SignOutButton from '../common/SignOut'

const Navbar = () => (
    <AuthUserContext.Consumer>
        {
            authUser => !authUser ? (<NavigationAuth authUser={authUser} />) : (<NavigationNonAuth />)
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
                        <a className="navbar-item" href="/">
                            <img className="hashme-logo is-hidden-mobile" width="112" height="24" src={hashmeOrgLogo} alt="Hashme Core Logo"/>
                            <img className="hashme-logo is-hidden-desktop is-hidden-tablet" src={hashmeOrgIsoLogo} alt="Hashme Core Logo"/>
                        </a>
                        <div className="navbar-menu">
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
            <div className="navbar-wrapper">
                <div className="hero-head">
                    <div className="container">
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
                                        <a href="/discover" className="navbar-item">
                    Descubre
                                        </a>
                                        <span className="navbar-item">
                                            <Link className="button button-signup btn-outlined is-bold btn-align secondary-btn rounded" to="/signin">
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
