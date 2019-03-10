import React from "react"
import { Router } from "@reach/router"
import { Layout, PrivateRoute } from '../components/common'
import Login from "../components/login"
import Registry from "../components/registry"
import Profile from "../components/profile"
import Wallet from "../components/wallet"
const App = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/app/profile" component={Profile} />
            <PrivateRoute path="/app/wallet" component={Wallet} />
            <Login path="/app/login" />
            <Registry path="/app/registry" />
        </Router>
    </Layout>
)

export default App
