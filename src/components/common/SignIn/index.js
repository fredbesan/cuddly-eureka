import React, { Component } from 'react'
import { navigate } from 'gatsby'

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../../constants/routes'

const INITIAL_STATE = {
    email: ``,
    password: ``,
    error: null,
}

const ERROR_CODE_ACCOUNT_EXISTS =
  `auth/account-exists-with-different-credential`

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`

class SignInFormBase extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INITIAL_STATE }
    }

  onSubmit = (event) => {
      const { email, password } = this.state

      this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
              this.setState({ ...INITIAL_STATE })
              navigate(ROUTES.HOME)
          })
          .catch((error) => {
              this.setState({ error })
          })

      event.preventDefault()
  };

  onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
  };

  render() {
      const { email, password, error } = this.state

      const isInvalid = password === `` || email === ``

      return (
          <form method="post" onSubmit={this.onSubmit}>
              <div className="login-form animated preFadeInLeft fadeInLeft">
                  <div className="field">
                      <div className="control is-expanded">
                          <input
                              name="email"
                              value={email}
                              onChange={this.onChange}
                              className="input is-large" type="text" placeholder="Usuario o email" />
                      </div>
                  </div>
                  <div className="field">
                      <div className="control is-expanded">
                          <input
                              name="password"
                              value={password}
                              onChange={this.onChange}
                              type="password"
                              className="input is-large" placeholder="Ingresá tu contraseña" />
                      </div>
                  </div>
              </div>
              <p className="control login">
                  <button disabled={isInvalid} type="submit" className="button is-bold is-primary is-outlined is-large is-fullwidth is-rounded">Inicia</button>
              </p>
              {error && <p>{error.message}</p>}
          </form>

      )
  }
}

class SignInGoogleBase extends Component {
    constructor(props) {
        super(props)

        this.state = { error: null }
    }

  onSubmit = (event) => {
      this.props.firebase
          .doSignInWithGoogle()
          .then(socialAuthUser =>
              // Create a user in your Firebase Realtime Database too
              this.props.firebase.user(socialAuthUser.user.uid).set({
                  username: socialAuthUser.user.displayName,
                  email: socialAuthUser.user.email,
                  roles: [],
              })
          )
          .then(() => {
              this.setState({ error: null })
              navigate(ROUTES.HOME)
          })
          .catch((error) => {
              if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                  error.message = ERROR_MSG_ACCOUNT_EXISTS
              }

              this.setState({ error })
          })

      event.preventDefault()
  };

  render() {
      const { error } = this.state

      return (
          <form onSubmit={this.onSubmit}>
              <button className="button is-danger is-outlined is-medium is-rounded is-fullwidth" type="submit">Inicia con Google</button>

              {error && <p>{error.message}</p>}
          </form>
      )
  }
}

class SignInFacebookBase extends Component {
    constructor(props) {
        super(props)

        this.state = { error: null }
    }

  onSubmit = (event) => {
      this.props.firebase
          .doSignInWithFacebook()
          .then(socialAuthUser =>
              // Create a user in your Firebase Realtime Database too
              this.props.firebase.user(socialAuthUser.user.uid).set({
                  username: socialAuthUser.additionalUserInfo.profile.name,
                  email: socialAuthUser.additionalUserInfo.profile.email,
                  roles: [],
              })
          )
          .then(() => {
              this.setState({ error: null })
              navigate(ROUTES.HOME)
          })
          .catch((error) => {
              if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                  error.message = ERROR_MSG_ACCOUNT_EXISTS
              }

              this.setState({ error })
          })

      event.preventDefault()
  };

  render() {
      const { error } = this.state

      return (
          <form onSubmit={this.onSubmit}>
              <button className="button is-link is-outlined is-medium is-rounded is-fullwidth" type="submit">Inicia con Facebook</button>

              {error && <p>{error.message}</p>}
          </form>
      )
  }
}

class SignInTwitterBase extends Component {
    constructor(props) {
        super(props)

        this.state = { error: null }
    }

  onSubmit = (event) => {
      this.props.firebase
          .doSignInWithTwitter()
          .then(socialAuthUser =>
              // Create a user in your Firebase Realtime Database too
              this.props.firebase.user(socialAuthUser.user.uid).set({
                  username: socialAuthUser.additionalUserInfo.profile.name,
                  email: socialAuthUser.additionalUserInfo.profile.email,
                  roles: [],
              })
          )
          .then(() => {
              this.setState({ error: null })
              navigate(ROUTES.HOME)
          })
          .catch((error) => {
              if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                  error.message = ERROR_MSG_ACCOUNT_EXISTS
              }

              this.setState({ error })
          })

      event.preventDefault()
  };

  render() {
      const { error } = this.state

      return (
          <form onSubmit={this.onSubmit}>
              <button className="button is-info is-outlined is-medium is-rounded is-fullwidth" type="submit">Inicia con Twitter</button>
              {error && <p>{error.message}</p>}
          </form>
      )
  }
}

const SignInForm = withFirebase(SignInFormBase)

const SignInGoogle = withFirebase(SignInGoogleBase)

const SignInFacebook = withFirebase(SignInFacebookBase)

const SignInTwitter = withFirebase(SignInTwitterBase)

export default SignInForm

export { SignInGoogle, SignInFacebook, SignInTwitter }
