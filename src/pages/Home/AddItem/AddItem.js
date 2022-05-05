import React from 'react';

const AddItem = () => {

    const addItemHandler = event => {
        event.preventDefault()
        const quantity = event.target.quantity.value
        const image = event.target.image.value
        const price = event.target.price.value
        const name = event.target.name.value
        const company = event.target.company.value
        const description = event.target.description.value

        fetch('http://localhost:5000/groceries', {
            method: 'POST',
            body: JSON.stringify({
                quantity,
                image,
                price,
                name,
                company,
                description
            }),
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });

    }
    return (
        <div>
            <div>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-10">
                    <form onSubmit={addItemHandler}>
                        <div className="form-group mb-6">
                            <input type="text" name='quantity' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center" placeholder="Quantity" />
                        </div>

                        <div className="form-group mb-6">
                            <input type="text" name='image' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center" placeholder="Image" />
                        </div>

                        <div className="form-group mb-6">
                            <input type="text" name='price' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center" placeholder="Price" />
                        </div>

                        <div className="form-group mb-6">
                            <input type="text" name='name' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center" placeholder="Name" />
                        </div>

                        <div className="form-group mb-6">
                            <input type="text" name='company' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center" placeholder="Company" />
                        </div>

                        <div className="form-group mb-6">
                            <input type="text" name='description' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center" placeholder="Description" />
                        </div>







                        <input className='w-full px-6 py-2.5 bg-blue-600 text-white  font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition  duration-150  cursor-pointer ease-in-out"' type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;