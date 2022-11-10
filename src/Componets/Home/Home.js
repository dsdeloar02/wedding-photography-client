import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Instrument from '../Instrument/Instrument';
import HomeService from '../Service/HomeService';

const Home = () => {
    const homeServices = useLoaderData();
    const [data, setData] = useState([]) ;

    useEffect(() => {
        fetch('https://wedding-photography-server.vercel.app/instruments')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8'/>
                <title>Wedding Photography</title>
                <meta name='keyword' content='Wedding Photogray React js'/>                
            </Helmet>
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
                    <Link to='/allservice' className='py-4 px-12 bg-red-600 text-white' > All Services </Link>
                </div>
            </div>
            <ContactForm></ContactForm>

            
            <div className='w-[90%] md:w-[80%] mx-auto my-5' >
                <h1 className='my-5 text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600' > My Instrument Section </h1>
                <div className='flex flex-wrap justify-between my-4'>
                    {
                        data.map(singledata => <Instrument
                            singledata={singledata}
                        ></Instrument>)
                    }
                </div>
            </div>
            
        </div>
    );
}

export default Home;
