import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const serviceDetails = useLoaderData();
    const {_id, package_name, thumbnail, description, price} = serviceDetails;
    return (
        <div>
           <div className="container mx-auto ">
                <dir className='p-8 rounded-md shadow-md'>
                    <img className='w-full h-[550px] object-cover rounded-md' src={thumbnail} alt="" />
                    <div className='flex justify-between my-3'>
                        <p className='text-2xl font-bold text-red-500'>{package_name}</p>
                        <p className='text-2xl font-bold text-red-500'>{price}</p>
                    </div>
                    <p>{description}</p>

                    <div className="flex justify-between py-3">
                        <Link to={`/updateindservice/${_id}`} className='py-3 px-12 bg-green-900 text-white'>Update Service</Link>
                        <Link className='py-3 px-12 bg-green-900 text-white'>Delete Service</Link>
                    </div>
                </dir>
           </div>
        </div>
    );
}

export default ServicesDetails;
