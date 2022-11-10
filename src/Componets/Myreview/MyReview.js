import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import SingleReview from '../SingleReview/SingleReview';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect( () => {
        fetch(`https://wedding-photography-server.vercel.app/myreviews?userEmail=${user?.email}`,{
            headers : {
                authorization : `Bearer ${localStorage.getItem('userprivate-token')}`
            }
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json();
        })
        .then(data => setReview(data))
    } ,[user?.email, logOut])

    console.log(review)

    return (
        <div className='w-[80%] mx-auto'>
            <Helmet>
            <meta charSet='utf-8'/>
            <title>My Review</title>
            <meta name='keyword' content='Wedding Photogray React js'/>                
        </Helmet>
            <div className='my-6'>
                    <h1 className='my-5 text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600'  >My  Review Section</h1>
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
    );
}

export default MyReview;
