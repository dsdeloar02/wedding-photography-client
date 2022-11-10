import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../Componets/AddService/AddServices";
import Blogs from "../../Componets/Blogs/Blogs";
import Home from "../../Componets/Home/Home";
import Login from "../../Componets/Login/Login";
import MyReview from "../../Componets/Myreview/MyReview";
import Register from "../../Componets/Register/Register";
import AllServive from "../../Componets/Service/AllServive";
import ServicesDetails from "../../Componets/ServiceDetails/ServicesDetails";
import UpdateReview from "../../Componets/UpdateReview/UpdateReview";
import UpdateService from "../../Componets/UpdateService/UpdateService";
import Main from "../../Layouts/Main";
import PrivateRoute from "../PrivateRoute.js/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children:[
            {
                path : '/',
                loader : () => fetch('http://localhost:5000/homeservices'),
                element : <Home></Home>
            },
            {
                path : '/service/add',
                element : <AddServices></AddServices>
            },
            {
                path :'/homeservices/:id',
                loader: ({params})=> fetch(`http://localhost:5000/homeservices/${params.id}`),
                element : <ServicesDetails></ServicesDetails>
            },
            {
                path : 'updateindservice/:id',
                loader: ({params})=> fetch(`http://localhost:5000/homeservices/${params.id}`),
                element : <UpdateService></UpdateService>
            },
            {
                path :'/login',
                element :<Login></Login>
            },
            {
                path :'/register',
                element : <Register></Register>
            },
            {
                path : 'updatereview/:id',
                loader: ({params})=> fetch(`http://localhost:5000/reviews/${params.id}`),
                element : <UpdateReview></UpdateReview>
            },
            {
                path : '/myreview',
                loader : () => fetch('http://localhost:5000/myreviews'),
                element : <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path : '/allservice',
                loader: () => fetch('http://localhost:5000/allservice'),
                element :<AllServive></AllServive>
            },
            {
                path : '/blogs',
                element : <Blogs></Blogs>
            }
        ]
    }
])