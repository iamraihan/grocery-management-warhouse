import React, { useEffect, useState } from 'react';
import ManageInventoryDetails from '../ManageInventoryDetails/ManageInventoryDetails';

const ManageInventory = () => {
    const [groceries, setGroceries] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/groceries')
            .then(res => res.json())
            .then(data => setGroceries(data))
    }, [groceries])

    return (
        <div>
            {groceries.map(grocery => <ManageInventoryDetails key={grocery._id} grocery={grocery}></ManageInventoryDetails>)}
        </div>
    );
};

export default ManageInventory;