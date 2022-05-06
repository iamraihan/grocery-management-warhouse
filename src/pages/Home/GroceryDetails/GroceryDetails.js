import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
        if (grocery.quantity < 0) return // set a toast already stock is empty
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
        if (!increase) return //set a toast
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
                event.target.reset()

                //toast

            });

    }
    return (
        <div>
            <div>
                <div className="flex justify-center mt-10">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={grocery.image} alt="" />
                        <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{grocery.name}</h5>
                            <p className="text-gray-700 text-base mb-4">{grocery.company}
                            </p>
                            <p className="text-gray-700 text-base mb-4">{grocery?.description?.slice(0, 50)}
                            </p>
                            <div className='flex justify-around'>
                                <h3>${grocery.price}</h3>
                                <h3>Quantity: {grocery.quantity}</h3>
                            </div>
                            <button onClick={deliverHandler} className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer'>Delivered</button>

                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <form onSubmit={updateStockQuantity} className='mt-5'>
                    <input type="text" name="increaseQuantity" id="" placeholder='Update Inventory' /> <br />
                    <input className='bg-slate-700 text-white cursor-pointer' type="submit" value="Update" />
                </form>
            </div> */}


            {/* update stock section  */}
            <div>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-10">
                    <form>
                        <div className="form-group mb-6">
                            <input type="text" name='increaseQuantity' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Update Stock" />
                        </div>




                        <input className='w-full       px-6       py-2.5       bg-blue-600       text-white       font-medium       text-xs       leading-tight       uppercase       rounded       shadow-md       hover:bg-blue-700 hover:shadow-lg       focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0       active:bg-blue-800 active:shadow-lg       transition       duration-150   cursor-pointer    ease-in-out"' type="submit" value="Update" />
                    </form>
                </div>
            </div>

            <div className='mt-5 text-center'>
                <Link to='/manage-inventory'>
                    <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer'>Manage Inventory</button>
                </Link>
            </div>

        </div>
    );
};

export default GroceryDetails;