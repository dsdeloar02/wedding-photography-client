import { createBrowserRouter } from "react-router-dom";
import Home from "../../Componets/Home/Home";
import Main from "../../Layouts/Main";

export const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children:[
            {
                path : '/',
                loader : () => fetch('https://programming-tech.vercel.app/teammembers'),
                element : <Home></Home>
            }
        ]
    }
])