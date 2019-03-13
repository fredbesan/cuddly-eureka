import React from 'react'
import hashmeOrgLogo from '../../images/logo.svg'
import hashmeOrgIsoLogoWhite from '../../images/logo-white.svg'
import hashmeOrgIsoLogo from '../../images/isoLogo.svg'
import { FaAngleDown } from 'react-icons/fa'
import '../../styles/styles.scss'
import { Link } from "gatsby"
import { AuthUserContext } from '../common/Session'
import SignOutButton from '../common/SignOut'

const Navbar = ({ navColor }) => (
    <AuthUserContext.Consumer>
        {
            authUser => !authUser ? (<NavigationAuth navColor={navColor} authUser={authUser} />) : (<NavigationNonAuth />)
        }
    </AuthUserContext.Consumer>
)
class NavigationAuth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isActive: false,
        }
        console.log(this.props);
        this.logoImg = this.props.navColor == "white" ? hashmeOrgIsoLogoWhite : hashmeOrgLogo
    }

    handleClick = () => {
        this.setState((state) => {
            return { isActive: !state.isActive }
        })
    }

    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <img className="hashme-logo is-hidden-mobile" width="112" height="24" src={this.logoImg} alt="Hashme Core Logo"/>
                            <img className="hashme-logo is-hidden-desktop is-hidden-tablet" src={hashmeOrgIsoLogo} alt="Hashme Core Logo"/>
                        </a>
                        <a role="button"
                            className={`navbar-burger ${this.state.isActive? `is-active`: ``}`}
                            aria-label="menu"
                            aria-expanded="false"
                            onClick={this.handleClick}
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className={`navbar-menu has-text-centered ${this.state.isActive? `is-active`: ``}`}>
                        <div className="navbar-start">
                            <a href="/discover" className="navbar-item">
                                Descubre
                                <div className="navbar-divider"></div>
                            </a>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons is-centered">
                                    <a href="/signup" className="button button-signup btn-outlined is-bold btn-align primary-btn rounded">
                                        <strong>Hola Mundo!</strong>
                                    </a>
                                </div>
                            </div>
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
