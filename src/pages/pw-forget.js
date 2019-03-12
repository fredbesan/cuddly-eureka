import React, { Fragment } from 'react'

import { Layout } from '../components/common'
import SignInForm, {
    SignInGoogle,
    SignInFacebook,
    SignInTwitter,
} from '../components/common/SignIn'
import { SignUpLink } from '../components/common/SignUp'
import { PasswordForgetLink } from '../components/common/PasswordForget'

const PasswordForget = () => (
    <Fragment>
        <h1>SignIn</h1>
        <SignInForm />
        <SignInGoogle />
        <SignInFacebook />
        <SignInTwitter />
        <PasswordForgetLink />
        <SignUpLink />
    </Fragment>
)

export default () => (
    <Layout>
        <PasswordForget />
    </Layout>
)
