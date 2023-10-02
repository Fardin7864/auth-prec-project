import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocilaLogin/SocialLogin';


const Login = () => {

    const {signinWithSocial, google, facebook, user} = useContext(AuthContext);


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary text-white">Login</button>
            </div>
            <p><i>Don't have account? </i><span className='text-blue-500'><Link to="/signup">Sign Up</Link></span></p>
          </div>
          </form>
          <hr />
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
