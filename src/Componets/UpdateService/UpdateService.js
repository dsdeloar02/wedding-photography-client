import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateService = () => {
    const storedService = useLoaderData();
    const [service, setService] = useState(storedService);
    console.log(storedService)
    const navigate = useNavigate();
    const handleUpdateUser = (event) => {
        event.preventDefault();
        fetch(`https://wedding-photography-server.vercel.app/homeservices/${service._id}`, {
            method : "PUT",
            headers : {
                'content-type' : "application/json" 
            },
            body : JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0 )
            {
                alert('user updated')
                navigate(`/homeservices/${service._id}`)
            }
        })
    }

    const handleInputBlur = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const time = {dateInString:Date()}
        const newService = { ...service, time };
        newService[field] = value;
        setService(newService);
        console.log(newService);
      };

    return (
        <div className="w-[90%] md:w-[60%] mx-auto my-20 p-8 shadow-md rounded-md border">
          <Helmet>
            <meta charSet='utf-8'/>
            <title>Update Service</title>
            <meta name='keyword' content='Wedding Photogray React js'/>                
        </Helmet>
              <form onSubmit={handleUpdateUser}>
          <div>
            <h1 className='my-5 text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600' >Update Services</h1>
            <input
            className="input input-bordered input-secondary w-full "
              onChange={handleInputBlur}
              defaultValue={storedService.package_name}
              type="text"
              name="package_name"
              placeholder="Package_name"
              required
            />
          </div>
          <div className='my-3'>
            <input
             className="input input-bordered input-secondary w-full "
              onChange={handleInputBlur}
              defaultValue={storedService.thumbnail}
              type="text"
              name="thumbnail"
              placeholder="Img Url"
              required
            />
          </div>
          <div className='my-3'>
            <input
             className="input input-bordered input-secondary w-full "
              onChange={handleInputBlur}
              defaultValue={storedService.price}
              type="text"
              name="price"
              placeholder="Enter Your Price"
              required
            />
          </div>
          <div className='my-3' >
            <textarea
              className="w-full p-2 textarea textarea-secondary"
              onChange={handleInputBlur}
              defaultValue={storedService.description}
              type="text"
              name="description"
              placeholder="Describe Description"
              required
            />
          </div>

          <div className='w-full flex justify-center'>
            <button type="submit" className='bg-purple-600 px-7 py-3 text-white' >Update User</button>
          </div>
        </form>
        </div>
    );
}

export default UpdateService;
