import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            this is root
            <Outlet></Outlet>
        </div>
    );
};

export default Root;