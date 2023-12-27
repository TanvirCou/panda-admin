
const NewProduct = () => {
    return (
        <div className='p-4'>
            <p className='mx-8 text-2xl font-bold'>New Product</p>
            <div className='mx-8'>

                <div className="flex w-72 flex-col pt-4">
                    <label className='text-sm text-gray-500 font-medium'>In Stock</label>
                    <input type="file" className='mt-2 text-sm font-medium ' />
                </div>

                <div className='flex flex-col pt-4'>
                    <label className='text-sm text-gray-500 font-medium'>Product Name</label>
                    <input type="text" className='w-72 h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-1' placeholder='Apple Airpods' />
                </div>

                <div className="flex w-72 flex-col pt-4">
                    <label className='text-sm text-gray-500 font-medium'>Active</label>
                    <select className="px-2 py-1 focus:outline-gray-300 border border-solid rounded-md border-gray-300 my-2" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className="flex w-72 flex-col pt-4">
                    <label className='text-sm text-gray-500 font-medium'>In Stock</label>
                    <select className="px-2 py-1 focus:outline-gray-300 border border-solid rounded-md border-gray-300 my-2" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className='my-4'>
                    <button className='bg-teal-600 text-white px-4 py-1 rounded-md font-medium'>Create</button>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;