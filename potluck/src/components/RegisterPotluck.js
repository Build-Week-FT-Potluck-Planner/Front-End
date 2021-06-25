import React, { useState } from 'react'
import AddItemForm from './AddItemForm'

const RegisterPotluck = () => {

    const initialState = {
        name: '',
        date: '',
        time: '',
        location: '' ,
        food: []
    }

    const [potluck, setPotluck] = useState(initialState)

    const handleChange = (e) => {
        e.preventDefault()
        setPotluck({
            ...potluck,
            [e.target.name]: e.target.value
        })
    }

    // const handleFood = (e) => {
    //     setPotluck
    // }

    const submit = (e) => {
        e.preventDefault()
        console.log(potluck)
    }

    // const AddFood = (e) => {
    //     e.preventDefault()
    //     let foodItem = potluck.food
    //     potluck.food.push(e.target.value)
    //     setPotluck({
    //         ...potluck,
    //         food:[foodItem]
            
    //     })
    // }

    return (
        <div>
            <h1>REGISTER YOUR POTLUCK</h1>
            <form onSubmit={submit}>
                <label>
                    Name:
                    <input
                        type='text'
                        name='name'
                        onChange={handleChange}
                        placeholder='Name of the Potluck'
                    />
                </label>

                <label>
                    Date:
                    <input
                        type='text'
                        name='date'
                        onChange={handleChange}
                        placeholder='Date of the Potluck'
                    />
                </label>

                <label>
                    Time:
                    <input
                        type='text'
                        name='time'
                        onChange={handleChange}
                        placeholder='Time of the Potluck'
                    />
                </label>

                <label>
                    Location:
                    <input
                        type='text'
                        name='location'
                        onChange={handleChange}
                        placeholder='Location of the Potluck'
                    />
                </label>
                {/* <form>
                    <input 
                        type='text'
                        name='food'
                        onChange={handleChange}
                    />
                    <button onClick={AddFood}>Add food</button>
                </form> */}
                <AddItemForm />
                <button>Add</button>
            </form>
        </div>
    )
}

export default RegisterPotluck