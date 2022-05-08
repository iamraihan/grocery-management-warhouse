import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import ManageInventoryDetails from '../ManageInventoryDetails/ManageInventoryDetails';

const ManageInventory = () => {
    const [groceries, setGroceries] = useState([])
    const [user, loading, error] = useAuthState(auth);
    console.log(user.email);
    useEffect(() => {
        // fetch('http://localhost:5000/groceries')
        //     .then(res => res.json())
        //     .then(data => setGroceries(data))

        fetch('http://localhost:5000/groceries', {
            method: "GET",
            headers: {
                'authorization': `${user.email} ${localStorage.getItem('accessToken')}`,
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setGroceries(data));
        // .catch(err => console.log(err));
    }, [groceries])

    return (
        <div>
            <div>
                <h2 className='text-center my-4 text-3xl'>All Inventories</h2>
                {groceries.map(grocery => <ManageInventoryDetails key={grocery._id} grocery={grocery}></ManageInventoryDetails>)}
            </div>
            <div className="mt-5 text-center">
                <Link to='/add-item'>
                    <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer '>Add New Item</button>
                </Link>
            </div>


        </div>
    );
};

export default ManageInventory;