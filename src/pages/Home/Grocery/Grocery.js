import React from 'react';
import { useNavigate } from 'react-router-dom';

const Grocery = ({ grocery }) => {
    const { name, image, description, company, quantity, _id, } = grocery
    const navigate = useNavigate()

    const redirectHandler = id => {
        navigate(`/grocery-details/${id}`)
    }
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg" src={image} alt="" />
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {description.slice(0, 100)}
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        {company}
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        {quantity}
                    </p>
                    <button onClick={() => redirectHandler(_id)} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Grocery;