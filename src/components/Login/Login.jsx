
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocilaLogin/SocialLogin';


const Login = () => {

    const {logInwithEmail} = useContext(AuthContext);

    const [error, setError] = useState(null);
    const navigat = useNavigate();

    const handleLoginSubmit = (e) =>{
            e.preventDefault();
            setError(null)
            const email = e.target.email.value;
            const password = e.target.password.value;

            if(password.length < 6){
                setError("Invalid Password!")
            }
            else{
              logInwithEmail(email, password)
                .then(() => {
                    navigat('/profile')
                })
                .catch(err=> {
                  console.log(err.message)
                    if(err.message === "Firebase: Error (auth/invalid-login-credentials)."){
                        setError("Invalid Email and Password !")
                    }
                })
            }
    }

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content w-full flex-col">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl font-bold">Log In</h1>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLoginSubmit}>
        <div className="card-body">
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
              {/* <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a> */}
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary text-white">Log In</button>
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
