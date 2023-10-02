import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const SocialLogin = () => {
    const navigat = useNavigate();
    const {signinWithSocial, google, facebook} = useContext(AuthContext);
    const handleLogin = (provider) =>{
        signinWithSocial(provider)
        .then(() => {
                navigat('/profile')
        })
        .catch(err => console.log(err.message))
    }

    return (
        <div className="form-control mt-6 flex flex-col gap-5 mb-5">
              <button onClick={() => handleLogin(google)}  className="btn btn-ghost  bg-slate-100   flex justify-center items-center"><FcGoogle/> Continue With Google</button>
              <button onClick={() => handleLogin(facebook)}  className="btn btn-ghost bg-slate-100   flex justify-center items-center"> <BsFacebook/>Continue With Facebook</button>
            </div>
    );
};

export default SocialLogin;