import React, { useState } from 'react'

const Signup = () => {

    const initialState = {
        username: '',
        password: ''
    }
    const [login, setLogin] = useState(initialState)

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("Good Job")
    }

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={onSubmit}>
                <label>
                    Username
                    <input
                        type='text'
                        name='username'
                        placeholder="Username"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Password
                    <input
                        type='text'
                        name='password'
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Signup