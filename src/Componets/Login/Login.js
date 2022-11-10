import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleProviderLogin, setLoading, githubProviderLogin } =
    useContext(AuthContext);

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        console.log(currentUser);

        fetch("https://wedding-photography-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem("userprivate-token", data.token);
            navigate(from, { replace: true });
            form.reset();
            setError("");
          });

        // navigate(from, {replace: true});
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    const googleprovider = new GoogleAuthProvider();
    googleProviderLogin(googleprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log("error :", error);
        setError(err.message);
      });
  };

  const handleGithubSignIn = () => {
    const githubprovider = new GithubAuthProvider();
    githubProviderLogin(githubprovider)
      .then((result) => {
        const user = result.user;
        // setUser(user)
        console.log(user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log("error :", error);
        setError(err.message);
      });
  };

  return (
    <div className="my-10 ">
       <Helmet>
            <meta charSet='utf-8'/>
            <title>Log In</title>
            <meta name='keyword' content='Wedding Photogray React js'/>                
        </Helmet>
      <div className="flex justify-between">
        <div className="mx-auto w-full  max-w-sm shadow-2xl">
          <h1 className="font-bold text-2xl text-center">Log in </h1>
          <form onSubmit={handleSubmit} className="card-body ">
            <div className="form-control">
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
                Login
              </button>
            </div>
            <p>
              <small className="my-2 text-red-600">{error}</small>
            </p>
            <div className="flex justify-between mb-3">
              <label className="label">
                <Link to="/" className="">
                  <small>Forgot password?</small>
                </Link>
              </label>
              <label className="label">
                <Link to="/register" className="">
                  <small>if you New ? Register</small>
                </Link>
              </label>
            </div>
            <p className="text-[#b7b7b7] text-center">
              <small>Or Sign In With</small>
            </p>
            <div className="my-3">
              <button
                onClick={handleGoogleSignIn}
                className="py-2 my-2 w-full bg-orange-400 text-white"
              >
                Sign In with Gogle
              </button>
              <button
                onClick={handleGithubSignIn}
                className="py-2 w-full bg-blue-400 text-white"
              >
                Sign In with GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
