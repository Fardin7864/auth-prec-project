import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <div>
                <img src={user?.photoURL} alt="" />
            </div>
            <h4>Name: {user?.displayName}</h4>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default Profile;