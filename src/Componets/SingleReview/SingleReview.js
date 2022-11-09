import React from 'react';

const SingleReview = ({singlereview}) => {

    return (
        <div className='w-[45%] p-3 rounded-md shadow-md'>
            <div className='flex align-middle items-center'>
                <img className='w-[50px] h-[50px] rounded-full' src={singlereview.userPhoto} alt="" />
                <h1 className='text-xl font-semibold ml-2'>{singlereview.userName}</h1>
            </div>
            <p>{singlereview.review}</p>
            <p className='text-yellow-500' >{singlereview.ratting}</p>
        </div>
    );
}

export default SingleReview;
