import React, { Component, Fragment } from 'react'

import Navbar from './Navbar'
import getFirebase, { FirebaseContext } from './Firebase'
import withAuthentication from './Session/withAuthentication'

class Layout extends Component {
    state = {
        firebase: null,
        isLoading: true,
    }

    componentDidMount() {
        const app = import(`firebase/app`)
        const auth = import(`firebase/auth`)
        const database = import(`firebase/database`)

        Promise.all([app, auth, database]).then((values) => {
            const firebase = getFirebase(values[0])

            this.setState({ firebase, isLoading: false })
        })
    }

    render() {
        return (
            <FirebaseContext.Provider value={this.state.firebase}>
                <AppWithAuthentication loading={this.state.isLoading} {...this.props} />
            </FirebaseContext.Provider>
        )
    }
}

const AppWithAuthentication = withAuthentication((
    {
        heroBody: Component,
        tabs,
        modifiers,
        children,
        navColor,
        clean,
        ...rest
    }) => (
    <Fragment>
        {
            clean ? <>{ children }</> :
            <>
                <div className={`hero ${modifiers}`}>
                    <Navbar navColor={navColor}/>
                    {Component ?
                        <div className="hero-body">
                            <div className="container">
                                <Component {...rest} />
                            </div>
                        </div>
                        : null
                    }

                    <div className="hero-foot">
                        <nav className="tabs is-centered">
                            <div className="container">
                                <ul>
                                    {tabs.map(({ active, text }, index) => (
                                        <li key={index} className={`${active? `is-active`: ""}`}><a>{text}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                {children}
            </>
        }
    </Fragment>
))

AppWithAuthentication.defaultProps = {
    tabs: [],
    modifiers: ``,
}

export default Layout
