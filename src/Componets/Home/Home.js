import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import HomeService from '../Service/HomeService';

const Home = () => {
    const homeServices = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div>
            <h1 className='py-10 text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600' >My Services</h1>
            <div className='flex container mx-auto justify-between flex-wrap' >
                
                {
                    homeServices.map(hservice => <HomeService
                        key={hservice._id}
                        hservice={hservice}
                    >
                    </HomeService>)
                }
            </div>
            <div className='py-8 text-center'>
                <Link className='py-4 px-12 bg-red-600 text-white' > All Services </Link>
            </div>
            </div>
        </div>
    );
}

export default Home;
