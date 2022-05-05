import React, { useEffect, useState } from 'react';
import useGrocery from '../../Hooks/useGrocery';
import Carousel from './Carousel/Carousel';
import Grocery from './Grocery/Grocery';
import ManageInventory from './ManageInventory/ManageInventory';

const Home = () => {
    const [grocery, setGrocery] = useGrocery()
    // const [grocerys, setGrocerys] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/grocery')
    //         .then(res => res.json())
    //         .then(data => setGrocerys(data))
    // }, [])

    return (
        <div>
            <Carousel></Carousel>
            <div className='grid md:grid-cols-3 mt-8 container mx-auto gap-10'>
                {
                    grocery.map(grocery => <Grocery key={grocery._id} grocery={grocery}></Grocery>)
                }
            </div>
        </div>
    );
};

export default Home;