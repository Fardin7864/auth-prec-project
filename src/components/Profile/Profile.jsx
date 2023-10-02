import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';
import { userNameSignal } from '../Signup/Signup';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const name = userNameSignal.value;
    console.log(name)
    return (
        <div>
            <div>
                <img src={user?.photoURL} alt="" />
            </div>
            <h4>Name: {user?.displayName? user.displayName : name}</h4>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default Profile;