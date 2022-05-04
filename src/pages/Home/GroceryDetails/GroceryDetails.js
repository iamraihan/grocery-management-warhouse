import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GroceryDetails = () => {
    const { id } = useParams()
    const [grocery, setGrocery] = useState({})
    const [updateQuantity, setUpdateQuantity] = useState(0)
    useEffect(() => {
        const url = `http://localhost:5000/grocery/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setGrocery(data))
    }, [])

    const deliverHandler = () => {

        grocery.quantity = grocery.quantity - 1
        console.log('minus value', typeof (grocery.quantity));
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
                setUpdateQuantity(data)

                //toast

            });
    }

    const updateStockQuantity = (event) => {
        event.preventDefault()
        const increase = parseInt(event.target.increaseQuantity.value)
        // console.log(typeof (increase));

        grocery.quantity = parseInt(grocery.quantity + increase)
        console.log(typeof (grocery.quantity));
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
                setUpdateQuantity(data)

                //toast

            });

    }
    return (
        <div>

            <h2>This is details page. {id} </h2>
            <h3>quantity {grocery.quantity} </h3>

            <button onClick={deliverHandler} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Delivered</button>
            <div>
                <form onSubmit={updateStockQuantity} className='mt-5'>
                    <input type="text" name="increaseQuantity" id="" placeholder='Update Inventory' /> <br />
                    <input className='bg-slate-700 text-white cursor-pointer' type="submit" value="Update" />
                </form>
            </div>

        </div>
    );
};

export default GroceryDetails;