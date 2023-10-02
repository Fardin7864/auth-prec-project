import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocilaLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { effect, signal } from "@preact/signals";


export const userNameSignal = signal('');
const Signup = () => {
    const {createUserWithEmail} = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [check, setcheck] = useState(null)
    const navigat = useNavigate();

    const handleLoginSubmit = (e) =>{
            e.preventDefault();
            setError(null)
            setcheck(null)
            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            if (!e.target.check.checked) {
                setcheck('Please accept our tarms and condition!')
                return;
            }

            if(password.length < 6){
                setError("Your password is too short!")
            }
            else{
                createUserWithEmail(email, password)
                .then(() => {
                    navigat('/profile')
                    effect(() => userNameSignal.value = name)                   
                })
                .catch(err=> {
                    if(err.message === "Firebase: Error (auth/email-already-in-use)."){
                        setError("This email address already used!")
                    }
                })
            }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginSubmit}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
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
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
                {error &&
                    <p className=" text-red-600">{error}</p>
                }
                <label className="label">
                <input
                  type="checkbox"
                  name="check"
                  className="input input-bordered"
                /> <p>Accept Our Tarms and Conditions</p>
                  {/* <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a> */}
                </label>
                {check &&
                    <p className=" text-red-600">{check}</p>
                }
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