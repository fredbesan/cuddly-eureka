import React from 'react'
import hashmeOrgLogo from '../../images/logo.svg'
import hashmeOrgLogoWhite from '../../images/logo-white.svg'
import hashmeOrgIsoLogo from '../../images/isologo.svg'
import hashmeOrgIsoLogoWhite from '../../images/isologo-white.svg'

import { FaAngleDown } from 'react-icons/fa'
import '../../styles/styles.scss'
import { Link } from "gatsby"
import { AuthUserContext } from '../common/Session'
import SignOutButton from '../common/SignOut'

const Navbar = ({ navColor }) => (
    <AuthUserContext.Consumer>
        {
            authUser => <NavigationAuth navColor={navColor} authUser={authUser} />
        }
    </AuthUserContext.Consumer>
)
class NavigationAuth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isActive: false,
        }

        this.logoImg = this.props.navColor === "white" ? hashmeOrgLogoWhite : hashmeOrgLogo
        this.isoLogoImg = this.props.navColor === "white" ? hashmeOrgIsoLogoWhite : hashmeOrgIsoLogo
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
                            <img className="hashme-logo is-hidden-desktop is-hidden-tablet" src={this.isoLogoImg} alt="Hashme Core Logo"/>
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
                            <a href="/create" className="navbar-item">
                                Crea
                                <div className="navbar-divider"></div>
                            </a>
                            <a href="/collect" className="navbar-item">
                                Colecciona
                                <div className="navbar-divider"></div>
                            </a>
                            <a href="/colabora" className="navbar-item">
                                Colabora
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

export default Navbar
