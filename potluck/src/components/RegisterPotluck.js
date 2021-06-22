import React, { useState } from 'react'

const RegisterPotluck = () => {

    const initialState = {
        name: '',
        date: '',
        time: '',
        location: ''
    }

    const [potluck, setPotluck] = useState(initialState)

    const handleChange = (e) => {
        setPotluck({
            ...potluck,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log("Submit")
    }

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
                <button>Add</button>
            </form>
        </div>
    )
}

export default RegisterPotluck