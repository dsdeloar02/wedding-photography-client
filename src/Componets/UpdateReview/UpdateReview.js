import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateReview = () => {
    const storedService = useLoaderData();
    const [review, setReview] = useState(storedService);
    console.log(storedService)
    const navigate = useNavigate();
    const handleUpdateReview = (event) => {
        event.preventDefault();
        fetch(`https://wedding-photography-server.vercel.app/reviews/${review._id}`, {
            method : "PUT",
            headers : {
                'content-type' : "application/json" 
            },
            body : JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0 )
            {
                alert('user updated')
                // navigate(`/homeservices/${review._id}`)
            }
        })
    }

    const handleInputBlur = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const time = {dateInString:Date()}
        const newReview = { ...review, time };
        newReview[field] = value;
        setReview(newReview);
        console.log(newReview);
      };

    return (
        <div className="w-[90%] md:w-[60%] mx-auto my-20 p-8 shadow-md rounded-md border">
          <Helmet>
            <meta charSet='utf-8'/>
            <title>Update Review</title>
            <meta name='keyword' content='Wedding Photogray React js'/>                
        </Helmet>
              <form onSubmit={handleUpdateReview}>
          <div>
            <h1 className='my-5 text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600' >Update Reviews</h1>
            <input
            className="input input-bordered input-secondary w-full "
              onChange={handleInputBlur}
              defaultValue={storedService.userName}
              type="text"
              name="userName"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className='my-3'>
            <input
             className="input input-bordered input-secondary w-full "
              onChange={handleInputBlur}
              defaultValue={storedService.review}
              type="text"
              name="review"
              placeholder="Type Review about product"
              required
            />
          </div>
          <div className='my-3'>
            <input
             className="input input-bordered input-secondary w-full "
              onChange={handleInputBlur}
              defaultValue={storedService.ratting}
              type="number" name="ratting" placeholder="Enter your Ratting"
              required
            />
          </div>
          <div className='w-full flex justify-center'>
            <button type="submit" className='bg-purple-600 px-7 py-3 text-white' >Update Review</button>
          </div>
        </form>
        </div>
    );
}

export default UpdateReview;
