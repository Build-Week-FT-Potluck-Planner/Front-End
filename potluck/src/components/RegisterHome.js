import React, { useState } from 'react'
import MyPotlucks from './MyPotlucks'
import { useHistory } from 'react-router-dom'

const dummy = [
    {
        id: 0,
        name: 'test',
        date: '01/5/6',
        location: 'outside',

    },
    {
        id: 1,
        name: 'test2',
        date: '01/12/35',
        location: 'inside',

    },
]

const RegisterHome = () => {
    const [potluck] = useState(dummy)
    const history = useHistory()

    const Register = () => {
        history.push('/register')
    }

    const editHandler = () => {
        history.push('/edit')
    }

    return (
        <div>
            <button onClick={Register}>MAKE A POTLUCK</button>
            <h1>HERE ARE YOUR POTLUCKS</h1>
            {potluck.map((pot) => {
                return (
                    <div>
                        <MyPotlucks key={pot.id} pot={pot} />
                        <button onClick={editHandler}>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}

export default RegisterHome