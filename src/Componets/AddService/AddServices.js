import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './AddServices.css'

const AddServices = () => {
    const [service, setService] = useState({});

    

    const handleAddUser = (event) => {
      event.preventDefault();
      console.log(service);
  
      fetch("https://wedding-photography-server.vercel.app/service", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(service),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("data insert successfully");
            event.target.reset();
          }
        });
    };
    const handleInputBlur = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const time = {dateInString:Date()}
        const newUsers = { ...service, time };
        newUsers[field] = value;
        setService(newUsers);
        console.log(newUsers);
      };
    return (
        <div className="w-[90%] md:w-[60%] mx-auto my-20 p-8 shadow-md rounded-md border">
          <Helmet>
            <meta charSet='utf-8'/>
            <title>Add Service</title>
            <meta name='keyword' content='Wedding Photogray React js'/>                
        </Helmet>
              <form onSubmit={handleAddUser}>
          <div className='my-3'>
            <h1 className='my-5 text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600' >Add Services</h1>
            <input
            className="input input-bordered input-secondary w-full "
              onBlur={handleInputBlur}
              type="text"
              name="package_name"
              placeholder="Package_name"
              required
            />
          </div>
          <div className='my-3'>
            <input
            className="input input-bordered input-secondary w-full "
              onBlur={handleInputBlur}
              type="text"
              name="thumbnail"
              placeholder="Img Url"
              required
            />
          </div>
          <div className='my-3'>
            <input
            className="input input-bordered input-secondary w-full "
              onBlur={handleInputBlur}
              type="text"
              name="price"
              placeholder="Enter Your Price"
              required
            />
          </div>
          <div  className='my-3'>
            <textarea
            className="w-full p-2 textarea textarea-secondary"
              onBlur={handleInputBlur}
              type="text"
              name="description"
              placeholder="Describe Description"
              required
            />
          </div>

          <button  className='bg-purple-600 px-7 py-3 text-white' type="submit">Add User</button>
        </form>
        </div>
    );
}

export default AddServices;
