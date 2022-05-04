import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GroceryDetails = () => {
    const { id } = useParams()
    const [grocery, setGrocery] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/grocery/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setGrocery(data))
    }, [])

    const deliverHandler = () => {

        grocery.quantity = grocery.quantity - 1
        fetch(`http://localhost:5000/grocery/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ quantity: grocery.quantity }),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('success', data)
                //toast

            });
    }
    return (
        <div>

            <h2>This is details page. {id} </h2>
            <h3>quantity {grocery.quantity} </h3>

            <button onClick={deliverHandler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Delivered</button>
        </div>
    );
};

export default GroceryDetails;