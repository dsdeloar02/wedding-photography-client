import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BeatLoader from "react-spinners/ClipLoader";
import HomeService from './HomeService';

const AllServive = () => {
    const [allData, setAllData] = useState([])
    const [displayLoading, setLoading] = useState(true);
    // const allData = useLoaderData();

    useEffect(() => {
        fetch('https://wedding-photography-server.vercel.app/allservice')
        .then(res => res.json())
        .then(data => {
            setAllData(data)
            setLoading(false)
        })
    }, [displayLoading])

    

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8'/>
                <title>All Service</title>
                <meta name='keyword' content='Wedding Photogray React js'/>                
            </Helmet>
            {
                displayLoading && 

                <div className='w-[200px] mx-auto'>
                    <BeatLoader
                        // color={color}
                        // loading={loading}
                        // cssOverride={override}
                        
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>

                // <p className='h-screen bg-red-500'> 
                //         <button type="button" class="bg-indigo-500 ..." disabled>
                //             <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                //             </svg>
                //             Processing...
                //         </button>
                // </p>
            }
           <h1 className='py-10 text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600' >My Services</h1>
            <div className='flex container mx-auto justify-between flex-wrap' >
                
                {
                    allData.map(hservice => <HomeService
                        key={hservice._id}
                        hservice={hservice}
                    >
                    </HomeService>)
                }
            </div>
        </div>
    );
}

export default AllServive;
