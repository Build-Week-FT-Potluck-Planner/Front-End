import React, { useState } from 'react'
import Login from './Login'


const Edit = () => {

    const initialState = {
        name: 'Jumping',
        date: '01/12/21',
        time: '12:30',
        location: 'Not my place',
    }

    const [edit, setEdit] = useState(initialState)

    const changeHandler = (e) => {
        e.preventDefault()
        setEdit({
            ...Login,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('test')
        console.log(edit)
        console.log(initialState)
    }

    return (
        <div>
            <h1>Edit</h1>

            <h3>Name:</h3>
            <p>{edit.name}</p>

            <h3>Date:</h3>
            <p>{edit.date}</p>

            <h3>Time:</h3>
            <p>{edit.time}</p>

            <h3>Location:</h3>
            <p>{edit.location}</p>

            <form onSubmit={submitHandler}>
                <label>
                    Name:
                    <input
                        type='text'
                        name='name'
                        onChange={changeHandler}
                        placeholder={edit.name}
                    />
                </label>

                <label>
                    Date:
                    <input
                        type='text'
                        name='date'
                        onChange={changeHandler}
                        placeholder={edit.date}
                    />
                </label>

                <label>
                    Time:
                    <input
                        type='text'
                        name='time'
                        onChange={changeHandler}
                        placeholder={edit.time}
                    />
                </label>

                <label>
                    Location:
                    <input
                        type='text'
                        name='location'
                        onChange={changeHandler}
                        placeholder={edit.location}
                    />
                </label>
                <button>Edit</button>
            </form>
        </div>
    )
}

export default Edit
