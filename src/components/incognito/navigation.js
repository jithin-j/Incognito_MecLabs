import React, { useContext } from 'react'
import { AuthContext, firebseContext } from '../../store/firebasecontext'

function Navigation() {
    const {user} = useContext(AuthContext)
    const {Firebase} = useContext(firebseContext)
    return (
        <div>
            <h2>

                {user ? user.displayName : "Login"}
                
            </h2>
            {user && (
            <span
              onClick={() => {
                Firebase.auth().signOut();
                window.location.href = "/login"
              }}
            >
              Logout
              chat app;
            </span>
          )}
        </div>
    )
}

export default Navigation
