import React, {useState} from "react"


const initialState = {
        id: 0,
        name: 'test',
        date: '01/5/6',
        location: 'outside',
}

const DetailsPage = () => {
    const [potluck, setPotluck] = useState(initialState)
    console.log('DETAILS', potluck)
    return(
        <div>
            <h1>Details</h1>

            <h2>POTLUCK NAME</h2>
            <h3>{potluck.name}</h3>

            <h2>POTLUCK DATE</h2>
            <h3>{potluck.date}</h3>

            <h2>POTLUCK LOCATION</h2>
            <h3>{potluck.location}</h3>

        </div>
    )
}

export default DetailsPage