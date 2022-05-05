
const ManageInventoryDetails = ({ grocery }) => {


    const { name, price, image, _id } = grocery
    // console.log('global position', grocery);

    // console.log(grocery);
    const deleteData = id => {
        console.log(id);
        fetch(`http://localhost:5000/groceries/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log('into delete function', grocery);
                // if (data.deletedCount > 0) {
                //     console.log('deleted', data);
                // }
            })
    }
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto mt-2">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Image
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {name}
                            </th>
                            <td className="px-6 py-4">
                                <img className='w-20 rounded-lg' src={image} alt="" />
                            </td>
                            <td className="px-6 py-4">
                                ${price}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button onClick={() => deleteData(_id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageInventoryDetails;