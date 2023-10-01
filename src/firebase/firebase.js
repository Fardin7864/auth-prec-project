// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAko3kEXG_VQ4tpMxu-7GZ5qrTyjel-31c",
  authDomain: "phoneshop-7e7ce.firebaseapp.com",
  projectId: "phoneshop-7e7ce",
  storageBucket: "phoneshop-7e7ce.appspot.com",
  messagingSenderId: "233383181658",
  appId: "1:233383181658:web:f46c62da36e5551d7d0763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;