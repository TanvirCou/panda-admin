import { useState } from "react";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";


const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleClick = (id) => {
        setData(data.filter(d => d.id !== id));
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-[14px] text-black'>
                            <th>Id</th>
                            <th>Product</th>
                            <th>Stock</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(product => (
                            <tr key={product.id}>
                                <th>{product.id}</th>
                                <td className='flex items-center'>
                                    <img src={product.img} className="w-9 h-9 rounded-[50%] object-cover" />
                                    <p className='pl-2'>{product.name}</p>
                                </td>
                                <td className='text-gray-500'>{product.stock}</td>
                                <td className='text-gray-500'>{product.status}</td>
                                <td className='text-gray-500'>{product.price}</td>
                                <td className=''>
                                    <div className='flex'>
                                        <Link to={`/product/${product.id}`}>
                                            <button className='bg-green-500 text-white py-1 px-2 rounded-md'>Edit</button>
                                        </Link>
                                        <div className='text-2xl text-red-600 flex items-center pl-1 cursor-pointer' onClick={() => handleClick(product.id)}>
                                            <ion-icon name="trash-sharp"></ion-icon>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;