import { createBrowserRouter }  from "react-router-dom";
import Root from "../components/Root/Root";
import Error from "../components/Error/Error";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Profile from "../components/Profile/Profile";
import Privetrout from "../components/PrivetRout/Privetrout";

 const MainRout = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/profile',
                element: <Privetrout><Profile></Profile></Privetrout>
            }
        ]
    }
])


export default MainRout;
