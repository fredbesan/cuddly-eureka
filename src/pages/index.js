import React, { Component, Fragment } from 'react'
import { compose } from 'recompose'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Layout } from '../components/common'
import { Link } from 'gatsby'
import { MetaData } from '../components/common/meta'
import {
    withAuthorization,
    withEmailVerification,
} from '../components/common/Session'
import { withFirebase } from '../components/common/Firebase'
// import Messages from '../components/Messages'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/

class HomePageBase extends Component {
    _initFirebase = false;

    constructor(props) {
        super(props)
        this.state = {
            users: null,
        }
    }

    firebaseInit = () => {
        if (this.props.firebase && !this._initFirebase) {
            this._initFirebase = true

            this.props.firebase.users().on(`value`, (snapshot) => {
                this.setState({
                    users: snapshot.val(),
                })
            })
        }
    }

    componentDidMount() {
        this.firebaseInit()
    }

    componentDidUpdate() {
        this.firebaseInit()
    }

    componentWillUnmount() {
        this.props.firebase.users().off()
    }

    render() {
        return (
            <Fragment>
                <div className="columns is-desktop is-vcentered has-text-centered-mobile">
                    <div className="column has-text-centered">
                        <h1 className="title is-1 is-spaced">#MásConMás</h1>
                        <h6 className="subtitle is-6">Un grupo de personas que comparten la misión de potenciar las causas sociales a traves del marketing.</h6>
                        <Link to="discover" className="button is-large secondary-btn rounded">Descubrir Causas</Link>
                    </div>
                    {/* <Messages users={this.state.users} /> */}
                </div>
            </Fragment>
        )
    }
}

const condition = authUser => !!authUser;

const HomePage = compose(
    withFirebase,
)(HomePageBase)

export default ({location, data}) => (
    <Layout heroBody={HomePage} modifiers={`is-fullheight`}>
        <MetaData data={data} location={location} />
    </Layout>
)
