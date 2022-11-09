import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import SingleReview from '../SingleReview/SingleReview';

const ServicesDetails = () => {
    const serviceDetails = useLoaderData();
    const {user} = useContext(AuthContext);
    const {_id, package_name, thumbnail, description, price} = serviceDetails;
    const [review, setReview] = useState([])
    // const url = ;

    useEffect( () => {
        fetch(`http://localhost:5000/reviews?service=${_id}`)
        .then(res => res.json())
        .then(data => setReview(data))
    } ,[_id])

    const refreshPage = ()=>{
        window.location.reload();
     }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const review = form.reviewtext.value;
        const ratting = form.ratting.value;
        console.log(ratting, review, _id, user.email, package_name, user.photoURL)
        
        const reviews = {
            service : _id,
            serviceName : package_name,
            userName : username,
            userEmail : user.email,
            ratting : ratting,
            review : review,
            userPhoto : user.photoURL
        }

        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast('Review placed successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }


    return (
        <div>
           <div className="container mx-auto ">
                <dir className='p-8 rounded-md shadow-md my-10'>
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
                
                <div className='my-6'>
                        {/* The button to open modal */}
                        <div className='w-full flex justify-center'>
                            <label htmlFor="my-modal" className="cursor-pointer py-3 px-8 bg-emerald-600 text-white">Add Review</label>
                        </div>

                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                        <div className="modal-box">
                        <form onSubmit={handleSubmit} >
                            <div>
                                <input type="text" name="username" placeholder="Enter your name" className="input input-bordered input-secondary w-full " />
                            </div>
                            <div className='mt-4'>
                                <input type="text" name="reviewtext" placeholder="Type Review about product" className="input input-bordered input-secondary w-full " />
                            </div>
                            <div className='my-4'>
                                <input  type="number" name="ratting" placeholder="Enter your Ratting" className="input input-bordered input-secondary w-full " />
                            </div>                       
                            <div className='flex justify-between'>
                                <button  className='py-3 px-8 bg-emerald-600 text-white' type="submit">Add Review</button>
                                <div className="mt-[12px]">
                                    <label htmlFor="my-modal" onClick={refreshPage} className="cursor-pointer py-3 px-8 bg-emerald-600 text-white">Close</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div className='my-6'>
                    <h1 className='text-3xl text-center font-bold my-8' > Review Section</h1>
                    <div className='flex flex-wrap justify-between my-4' >
                        {
                            review.map(singlereview => <SingleReview
                            key={singlereview._id}
                            singlereview={singlereview}
                            ></SingleReview>)
                        }
                    </div>
                </div>
           </div>
        </div>
    );
}

export default ServicesDetails;
