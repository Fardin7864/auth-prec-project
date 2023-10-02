import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Navigate } from "react-router-dom";


const Privetrout = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if (loading) {
        return <div><span className="loading loading-spinner loading-lg"></span></div>

    }
    if (!user) {
        return <Navigate to="/login"/>
    }

    return children;
};

export default Privetrout;