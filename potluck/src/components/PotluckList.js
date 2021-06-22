import React, { useState } from 'react'
import Potluck from './Potluck'
import NavBar from './NavBar'

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
    {
        id: 2,
        name: 'test3',
        date: '12/10/01',
        location: 'a house',

    },
]

const PotluckList = () => {
    const [potluck, setPotluck] = useState(dummy)
    console.log(potluck)
    return (
        <div>
            <NavBar />
            <h1>UPCOMING POTLUCK</h1>
            {potluck.map((pot) => {
                return (
                    <div>
                        <Potluck key={pot.id} pot={pot} />
                        <button>Join</button>
                    </div>
                )
            })}
        </div>
    )
}

export default PotluckList