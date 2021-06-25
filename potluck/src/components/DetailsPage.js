import React, {useState} from "react"


const initialState = {
        id: 0,
        name: 'test',
        date: '01/5/6',
        location: 'outside',
        food: ['pizza', 'burgers', 'drink']
}

const DetailsPage = () => {
    const [potluck] = useState(initialState)
    console.log('DETAILS', potluck)

    const listFood = potluck.food.map((number) => 
        <li>{number}</li>
    )
    return(
        <div>
            <h1>Details</h1>

            <h2>POTLUCK NAME</h2>
            <h3>{potluck.name}</h3>

            <h2>POTLUCK DATE</h2>
            <h3>{potluck.date}</h3>

            <h2>POTLUCK LOCATION</h2>
            <h3>{potluck.location}</h3>

            <h2>FOOD TO BRING</h2>
            <ul>{listFood}</ul>

        </div>
    )
}

export default DetailsPage