import React, { Component } from 'react'
import { Link, navigate } from 'gatsby'

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../../constants/routes'
import * as ROLES from '../../../constants/roles'

const INITIAL_STATE = {
    username: ``,
    email: ``,
    passwordOne: ``,
    passwordTwo: ``,
    isAdmin: false,
    error: null,
}

const ERROR_CODE_ACCOUNT_EXISTS = `auth/email-already-in-use`

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`

class SignUpFormBase extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INITIAL_STATE }
    }

  onSubmit = (event) => {
      const { username, email, passwordOne, isAdmin } = this.state
      const roles = []

      if (isAdmin) {
          roles.push(ROLES.ADMIN)
      }

      this.props.firebase
          .doCreateUserWithEmailAndPassword(email, passwordOne)
          .then((authUser) =>
          // Create a user in your Firebase realtime database
              this.props.firebase.user(authUser.user.uid).set({
                  username,
                  email,
                  roles,
              })
          )
          .then(() => this.props.firebase.doSendEmailVerification())
          .then(() => {
              this.setState({ ...INITIAL_STATE })
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

  onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
  };

  onChangeCheckbox = (event) => {
      this.setState({ [event.target.name]: event.target.checked })
  };

  render() {
      const {
          username,
          email,
          passwordOne,
          passwordTwo,
          error,
      } = this.state

      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === `` ||
      email === `` ||
      username === ``

      return (
          <form method="post" onSubmit={this.onSubmit}>
              <div className="columns is-centered">
                  <div className="column is-half">
                      <div className="field">
                          <label className="label">Usuario</label>
                          <div className="control is-expanded">
                              <input
                                  name="username"
                                  value={username}
                                  onChange={this.onChange}
                                  type="text"
                                  className="input is-large"
                                  placeholder="Nombre Completo"/>
                          </div>
                      </div>
                  </div>
                  <div className="column is-half">
                      <div className="field">
                          <label className="label">Email</label>
                          <div className="control is-expanded">
                              <input
                                  name="email"
                                  value={email}
                                  onChange={this.onChange}
                                  type="text"
                                  className="input is-large" placeholder="Ingresar email"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="columns is-centered">
                  <div className="column is-half">
                      <div className="field">
                          <label className="label">Contraseña</label>
                          <div className="control is-expanded">
                              <input
                                  name="passwordOne"
                                  value={passwordOne}
                                  onChange={this.onChange}
                                  type="password"
                                  className="input is-large" placeholder="Ingresar contraseña"/>
                          </div>
                      </div>
                  </div>
                  <div className="column is-half">
                      <div className="field">
                          <label className="label">Repetir contraseña</label>
                          <div className="control is-expanded">
                              <input
                                  name="passwordTwo"
                                  value={passwordTwo}
                                  onChange={this.onChange}
                                  type="password"
                                  className="input is-large" placeholder="Confirmar contraseña" />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="columns is-centered">
                  <div className="column is-one-third">
                      <div className="field">
                          <div className="control">
                              <button disabled={isInvalid} type="submit" className="button is-primary is-outlined is-medium is-fullwidth is-rounded">Empezar</button>
                          </div>
                      </div>
                  </div>
              </div>
              {error && <p>{error.message}</p>}
          </form>
      )
  }
}

const SignUpLink = () => (
    <p>
        ¿No tienes una cuenta? <Link to={ROUTES.SIGN_UP}>Registrate</Link>
    </p>
)

export default withFirebase(SignUpFormBase)

export { SignUpLink }
