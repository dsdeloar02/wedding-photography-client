import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, setUser, logOut,   googleProviderLogin,  githubProviderLogin  } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            handleUpdateProfile(name, photoURL);
            logOut();
            console.log(user)
            toast.success('Registration Successfull')
        })
        .catch( e => {
            console.error(e)
            setError(e.message);
        })
    };

    const handleGoogleSignIn = () =>{
      const googleprovider = new GoogleAuthProvider();
      googleProviderLogin(googleprovider)
      .then(result => {
        const user = result.user;
        console.log(user)
        setError('')
        navigate('/')
      })
      .catch(err => {
        console.log('error :', error)
        setError(err.message)
      })
    };
  
    const handleGithubSignIn = () =>{
      const githubprovider = new GithubAuthProvider();
      githubProviderLogin(githubprovider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
        setError('');
        navigate('/')
      })
      .catch(err => {
        console.log('error :', error)
        setError(err.message)
      })
    }


    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName : name,
            photoURL : photoURL,
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(err => console.error(err))
    }


    return (
        <div className="my-6">
          <Helmet>
            <meta charSet='utf-8'/>
            <title>Register</title>
            <meta name='keyword' content='Wedding Photogray React js'/>                
        </Helmet>
        <div className="flex justify-between">
          <div className="mx-auto w-full  max-w-sm shadow-xl">
            <h1 className="font-bold text-2xl text-center my-3">Register </h1>
            <form onSubmit={handleSubmit} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text  w-full inline-block">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter you Full Name"
                  name="name"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text  w-full inline-block">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter you Photo Url"
                  name="photoURL"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text  w-full inline-block">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="form-control  mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="bg-red-500 text-white w-full py-2 mb-3">
                  Register Now
                </button>
              </div>
              <div className="flex justify-between mb-3">
                <label className="label">
                  <Link to="/" className="">
                    <small>Forgot password?</small>
                  </Link>
                </label>
                <label className="label">
                  <Link to="/login" className="">
                    <small>Allready Registered ? Log in</small>
                  </Link>
                </label>
              </div>
              <p className="text-[#b7b7b7] text-center">
                <small>Or Sign In With</small>
              </p>
              <div className="my-3">
                <button onClick={handleGoogleSignIn} className="py-2 my-2 w-full bg-orange-400 text-white">
                  Sign In with Gogle
                </button>
                <button onClick={handleGithubSignIn} className="py-2 w-full bg-blue-400 text-white">
                  Sign In with GitHub
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Register;
