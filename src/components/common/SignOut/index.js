import React from 'react'

import { withFirebase } from '../Firebase'

const SignOutButton = ({ firebase }) => (
    <a onClick={firebase ? firebase.doSignOut : () => {}}>
        Salir
    </a>
)

export default withFirebase(SignOutButton)
