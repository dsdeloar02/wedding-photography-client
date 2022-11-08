import React from 'react';

const HomeService = ({hservice}) => {
    const {package_name, thumbnail, price, description} = hservice;


    return (
        <div className='w-full my-2 md:w-[30%] p-6 border rounded-md shadow-lg' >
                <img className='w-full' src={thumbnail} alt="" />
                <h1 className='py-3 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600' >Package : {package_name}</h1>
                <h3 className='font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-orange-400 to-violet-600' >Prcie : {price}</h3>
                <p className='text-sm py-3' >{(description)}</p>
                <button className="w-full bg-pink-400 py-3 px-8 text-center" >More Details</button>
        </div>
    );
}

export default HomeService;
