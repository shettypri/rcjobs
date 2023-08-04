// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByVWHOhtC-iHCRI8XkIFKq-caWPM_iKkE",
    authDomain: "rcjobs-e85b3.firebaseapp.com",
    projectId: "rcjobs-e85b3",
    storageBucket: "rcjobs-e85b3.appspot.com",
    messagingSenderId: "375929357040",
    appId: "1:375929357040:web:c36ddb54cdb8a2dcb87835",
    measurementId: "G-VX2880QCKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getA
export const auth = getAuth();
export const db = getFirestore(app)
export const storage = getStorage(app)
// const analytics = getAnalytics(app);
export const exampleZZZ = import.meta.env.VITE_REACT_APP_DEVELOPMENT_MESSAGING_SENDER_ID