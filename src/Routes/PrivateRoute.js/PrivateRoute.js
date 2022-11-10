import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location  = useLocation();
    if(loading) {
        return <h1 className='text-5xl h-screen text-center py-10 bg-red-600'>Loading...</h1>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;