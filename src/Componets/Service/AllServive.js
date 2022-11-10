import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeService from './HomeService';

const AllServive = () => {
    const allData = useLoaderData();

    return (
        <div>
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
