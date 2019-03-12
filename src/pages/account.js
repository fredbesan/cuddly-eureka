import React, { Fragment } from 'react'
import { compose } from 'recompose'

import { Layout } from '../components/common'
import {
    AuthUserContext,
    withAuthorization,
    withEmailVerification,
} from '../components/common/Session'
import PasswordForgetForm from '../components/common/PasswordForget'
import PasswordChangeForm from '../components/common/PasswordChange'
import LoginManagement from '../components/common/LoginManagement'

const AccountPageBase = () => (
    <Fragment>
        <AuthUserContext.Consumer>
            {authUser => (
                <div>
                    <h1>Account: {authUser.email}</h1>
                    <PasswordForgetForm />
                    <PasswordChangeForm />
                    <LoginManagement authUser={authUser} />
                </div>
            )}
        </AuthUserContext.Consumer>
    </Fragment>
)

const condition = authUser => !!authUser

const AccountPage = compose(
    withEmailVerification,
    withAuthorization(condition),
)(AccountPageBase)

export default () => (
    <Layout>
        <AccountPage />
    </Layout>
)
