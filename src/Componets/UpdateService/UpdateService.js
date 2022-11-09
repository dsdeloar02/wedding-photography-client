import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateService = () => {
    const storedService = useLoaderData();
    const [service, setService] = useState(storedService);
    console.log(storedService)
    const navigate = useNavigate();
    const handleUpdateUser = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/homeservices/${service._id}`, {
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
        <div className="formWrapper">
              <form onSubmit={handleUpdateUser}>
          <div>
            <h1>Update User</h1>
            <input
              onChange={handleInputBlur}
              defaultValue={storedService.package_name}
              type="text"
              name="package_name"
              placeholder="Package_name"
              required
            />
          </div>
          <div>
            <input
              onChange={handleInputBlur}
              defaultValue={storedService.thumbnail}
              type="text"
              name="thumbnail"
              placeholder="Img Url"
              required
            />
          </div>
          <div>
            <input
              onChange={handleInputBlur}
              defaultValue={storedService.price}
              type="text"
              name="price"
              placeholder="Enter Your Price"
              required
            />
          </div>
          <div >
            <textarea
              className='w-full p-2'
              onChange={handleInputBlur}
              defaultValue={storedService.description}
              type="text"
              name="description"
              placeholder="Describe Description"
              required
            />
          </div>

          <button type="submit">Update User</button>
        </form>
        </div>
    );
}

export default UpdateService;
