import React from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SingleReview = ({singlereview}) => {
    console.log(singlereview)
    

    return (
        <div className='w-[100%] md:w-[50%] lg:w-[30%] p-5 rounded-md shadow-md mt-5'>
            <div className='flex align-middle items-center'>
                <img className='w-[50px] h-[50px] rounded-full' src={singlereview.userPhoto} alt="" />


                <h1 className='text-xl font-semibold ml-2'>{singlereview.userName}</h1>
            </div>
            <p className='mt-5'>{singlereview.review}</p>
            <p className='text-yellow-500 mt-5' >Ratting : {singlereview.ratting}</p>
            <div className='flex justify-between mt-5' >
                <Link to={`/updatereview/${singlereview._id}`} >
                    <FaEdit className='h-6 w-12' ></FaEdit>
                </Link>
                <button >
                    <FaTrashAlt className='h-6 w-12' ></FaTrashAlt>
                </button>
            </div>
        </div>
    );
}

export default SingleReview;
