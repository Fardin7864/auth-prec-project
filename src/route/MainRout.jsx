import { createBrowserRouter }  from "react-router-dom";
import Root from "../components/Root/Root";

 const MainRout = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>
    }
])


export default MainRout;
