import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useGrocery from '../../Hooks/useGrocery';
import Carousel from './Carousel/Carousel';
import Grocery from './Grocery/Grocery';
import ImageGallery from './ImageGallery/ImageGallery';
import Testimonial from './Testimonial/Testimonial';

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
            <div className='text-center mt-5'>
                <Link to='/manage-inventory'>
                    <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Manage Items</button>
                </Link>
            </div>
            <div className='mt-16'>
                <Testimonial></Testimonial>
            </div>
            <div className='mt-16'>
                <h2 className='text-5xl text-center'>Gallery</h2>
                <ImageGallery></ImageGallery>
            </div>
        </div>
    );
};

export default Home;