import React, { useState } from 'react';
import './AddServices.css'

const AddServices = () => {
    const [service, setService] = useState({});

    

    const handleAddUser = (event) => {
      event.preventDefault();
      console.log(service);
  
      fetch("http://localhost:5000/service", {
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
        <div className="formWrapper">
              <form onSubmit={handleAddUser}>
          <div>
            <h1>Add User</h1>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="package_name"
              placeholder="Package_name"
              required
            />
          </div>
          <div>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="thumbnail"
              placeholder="Img Url"
              required
            />
          </div>
          <div>
            <input
              onBlur={handleInputBlur}
              type="text"
              name="price"
              placeholder="Enter Your Price"
              required
            />
          </div>
          <div >
            <textarea
              className='w-full p-2'
              onBlur={handleInputBlur}
              type="text"
              name="description"
              placeholder="Describe Description"
              required
            />
          </div>

          <button type="submit">Add User</button>
        </form>
        </div>
    );
}

export default AddServices;
