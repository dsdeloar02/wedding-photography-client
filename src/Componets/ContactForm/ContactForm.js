import React from "react";

const ContactForm = () => {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto my-20 p-8 shadow-md rounded-md border">
      <h3 className='my-5 text-center font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600'>Contact Form</h3>
      <div className="container">
        <form className="form">
          <label className="" for="fname">First Name</label>
          <input
            className="my-3 input input-bordered input-secondary w-full "
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label className="" for="lname">Last Name</label>
          <input
            type="text"
            className=" my-3 input input-bordered input-secondary w-full "
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label className="" for="subject">Subject</label>
          <textarea
          className="my-3 w-full p-2 textarea textarea-secondary"
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>

          <input  className="bg-emerald-400 px-7 py-3 text-center" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;