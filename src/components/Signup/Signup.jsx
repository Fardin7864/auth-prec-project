import { Link } from "react-router-dom";
import SocialLogin from "../SocilaLogin/SocialLogin";

const Signup = () => {

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  {/* <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a> */}
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-white">Sign Up</button>
              </div>
              <p><i>Already have account? </i><span className='text-blue-500'><Link to="/login">Log In</Link></span></p>
            </div>
            </form>
            <hr />
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default Signup;