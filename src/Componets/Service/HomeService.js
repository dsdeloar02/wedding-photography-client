import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const HomeService = ({hservice}) => {
    const {_id, package_name, thumbnail, price, description} = hservice;

    return (
        <div className='w-full my-2 md:w-[30%] p-6 border rounded-md shadow-lg flex flex-col justify-between' >
            {/* <ImageViewer/> */}
            {/* <img className='w-full' src={thumbnail} alt="" /> */}
            <PhotoProvider>
            <PhotoView src={thumbnail}>
                <img src={thumbnail} alt="" />
            </PhotoView>
            </PhotoProvider>
            <h1 className='py-3 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600' >Package : {package_name}</h1>
            <h3 className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-orange-400 to-violet-600' >Prcie : {price}</h3>
            <p className='text-sm my-3' >{description?.slice(0,100)+'...'}</p>
            <Link to={`/homeservices/${_id}`} className="w-full bg-pink-400 mt-3 py-3 px-8 text-center" >More Details</Link>
        </div>
    );
}

export default HomeService;
