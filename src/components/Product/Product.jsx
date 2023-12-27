import { productData } from "../../dummyData";
import { Link, useParams } from 'react-router-dom';
import Chart from '../Home/Chart/Chart';

const Product = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div className='w-full pb-6'>
            <div className='flex items-center px-5 py-4 justify-between'>
                <p className='text-2xl font-bold'>Product</p>
                <Link to="/newProduct">
                    <button className='bg-teal-600 text-white px-3 py-1 rounded-md font-medium'>Create</button>
                </Link>
            </div>

            <div className='w-full flex px-4'>
                <div className='w-2/3 border shadow-md rounded-md'>
                    <Chart data={productData} title="Sales performance" dataKey="Sales" />
                </div>
                <div className='w-1/3 py-4 px-6 shadow-md border rounded-md mx-2'>
                    <div className="flex items-center py-1">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="w-12 h-12 rounded-[50%] object-cover" />
                        <p className="font-medium px-3">Apple Airpods</p>
                    </div>

                    <div className='flex items-center px-1 py-1'>
                        <p className="text-sm font-medium">Id:</p>
                        <p className='text-sm font-medium text-gray-500 px-3'>123</p>
                    </div>

                    <div className='flex items-center p-1 '>
                        <p className="text-sm font-medium">Sales:</p>
                        <p className='text-sm font-medium text-gray-500 px-3'>5123</p>
                    </div>

                    <div className='flex items-center p-1'>
                        <p className="text-sm font-medium">Active:</p>
                        <p className='text-sm font-medium text-gray-500 px-3'>No</p>
                    </div>

                    <div className='flex items-center p-1'>
                        <p className="text-sm font-medium">In Stock:</p>
                        <p className='text-sm font-medium text-gray-500 px-3'>No</p>
                    </div>
                </div>
            </div>

            <div className=' border shadow-md rounded p-4 m-5'>
                <p className='text-xl font-bold'>Edit</p>
                <div className='flex justify-between'>
                    <div >
                        <div className='flex flex-col pt-4'>
                            <label className='text-sm text-gray-500 font-medium'>Product Name</label>
                            <input type="text" className='w-72 h-10 border-b-2 placeholder:text-sm font-medium px-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 my-1' placeholder='Apple Airpods' />
                        </div>

                        <div className="flex flex-col pt-4">
                            <label className='text-sm text-gray-500 font-medium'>Active</label>
                            <select className="px-2 py-1 focus:outline-gray-300 border border-solid rounded-md border-gray-300 my-2" name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <div className="flex flex-col pt-4">
                            <label className='text-sm text-gray-500 font-medium'>In Stock</label>
                            <select className="px-2 py-1 focus:outline-gray-300 border border-solid rounded-md border-gray-300 my-2" name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>


                    </div>
                    <div>
                        <div className='flex flex-col h-full justify-between items-center'>
                            <div className='flex mt-2'>
                                <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="w-28 h-28 rounded-lg object-cover" />
                                <label htmlFor='file' className='flex items-center ml-3 mr-2 cursor-pointer'>
                                    <div className={`text-2xl flex items-center`}>
                                        <ion-icon name="images-sharp"></ion-icon>
                                    </div>
                                    <input type="file" id='file' accept=".png,.jpeg,.jpg" className='hidden' />
                                </label>
                            </div>
                            <div>
                                <button className='bg-teal-600 text-white px-5 py-1 font-medium rounded-md'>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;