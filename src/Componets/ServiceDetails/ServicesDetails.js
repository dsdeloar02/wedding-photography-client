import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import SingleReview from '../SingleReview/SingleReview';

const ServicesDetails = () => {
    const serviceDetails = useLoaderData();
    const navigate = useNavigate()
    const {user} = useContext(AuthContext);
    const {_id, package_name, thumbnail, description, price} = serviceDetails;
    const [review, setReview] = useState([])
    // const url = ;

    useEffect( () => {
        fetch(`https://wedding-photography-server.vercel.app/reviews?service=${_id}`)
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

        fetch("https://wedding-photography-server.vercel.app/reviews", {
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

    const handleDelteBtn = (user) => {
        const agree = window.confirm(`Are you sure you want to delete : ${user.name}`)
        console.log(agree)
        if(agree){
            fetch(`https://wedding-photography-server.vercel.app/homeservices/${_id}`, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('user delete successfullly')
                    navigate('/allservice')
                }
            })
            console.log(_id)
        }
    }


    return (
        <div>
            <Helmet>
                <meta charSet='utf-8'/>
                <title>Service Details</title>
                <meta name='keyword' content='Wedding Photogray React js'/>                
            </Helmet>
           <div className="container mx-auto ">
                <dir className='p-8 rounded-md shadow-md my-10'>
                    <img className='w-full h-[300px] md:h-[550px] object-cover rounded-md' src={thumbnail} alt="" />
                    <div className='flex justify-between my-3'>
                        <p className='text-2xl font-bold text-red-500'>{package_name}</p>
                        <p className='text-2xl font-bold text-red-500'>{price}</p>
                    </div>
                    <p>{description}</p>

                    <div className="flex justify-between py-3 flex-col md:flex-row">
                        <Link to={`/updateindservice/${_id}`} className='py-3 px-12 bg-green-900 text-white'>Update Service</Link>
                        <button onClick={handleDelteBtn} className='py-3 px-12 mt-4 md:mt-0 bg-green-900 text-white'>Delete Service</button>
                    </div>
                </dir>

                {
                    user?.email ? 
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
                    :
                    <div className='w-full flex justify-center'>
                        <Link to='/login' className="cursor-pointer py-3 px-8 bg-emerald-600 text-white">Create Review</Link>
                     </div> 
                }
                
                
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
