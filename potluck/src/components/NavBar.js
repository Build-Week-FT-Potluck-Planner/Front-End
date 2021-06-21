import React from 'react'
import { useHistory } from 'react-router-dom'

const NavBar = () => {
    const history = useHistory()
    return(
        <div>
            <h4 onClick={() => history.push('/')}>Home</h4>
            <h4 onClick={() => history.push('Signup')}>Register</h4>
            <h4 onClick={() => history.push('/login')}>Login</h4>
        </div>
    )
}

export default NavBar