import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        
        <div className='container w-5/6 md:w-[750px] mx-auto my-6 h-screen' >
            <Helmet>
                <meta charSet='utf-8'/>
                <title> Photography Blogs</title>
                <meta name='keyword' content='Wedding Photogray React js'/>                
            </Helmet>
            <h1 className='text-3xl font-bold text-center my-6' >This is Our Blog Components </h1>
            <div className="collapse my-4">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Difference between sql and nosql ??
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <small className='text-white' >SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</small>
                </div>
            </div>
            <div className="collapse my-4">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                What is JWT, and how does it work ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <small className='text-white' >What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</small>
                </div>
            </div>
            <div className="collapse my-4">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <small className='text-white' >JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</small>
                </div>
            </div>
            <div className="collapse my-4">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <small className='text-white' >How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</small>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
