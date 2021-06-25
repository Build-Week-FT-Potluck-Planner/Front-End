import React, {useState} from "react";
import styled from 'styled-components'

const ItemFormContainer = styled.div`
border: 1px solid gray;
margin: 0  6rem;
padding: 1rem;
width: auto;
`

const AddItemForm = () => {
    const [item, setItem] = useState('');
    console.log('ITEM', item)

    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
        setItem('');
    };

    return (
        <ItemFormContainer> 
            <form onSubmit = {handleSubmit}>
            <button > Add Food Item</button> 
                    <input
                        type='text'
                        name='item'
                        onChange={handleChange}
                        value={item}
                            />
                
            </form>
            <button>Remove Food</button>
        </ItemFormContainer>  
    )


}
export default AddItemForm