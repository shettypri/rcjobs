// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore";

let firebaseConfig={}
if(import.meta.env.VITE_REACT_APP_MODE ==="PRODUCTION"){
    firebaseConfig = {
        apiKey: import.meta.env.VITE_REACT_APP_PRODUCTION_API_KEY,
        authDomain: import.meta.env.VITE_REACT_APP_PRODUCTION_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_REACT_APP_PRODUCTION_PROJECT_ID,
        storageBucket: import.meta.env.VITE_REACT_APP_PRODUCTION_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_REACT_APP_PRODUCTION_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_REACT_APP_PRODUCTION_APP_ID,
        measurementId: import.meta.env.VITE_REACT_APP_PRODUCTION_MEASUREMENT_ID
    };
}else{
    firebaseConfig = {
        apiKey: import.meta.env.VITE_REACT_APP_DEVELOPMENT_API_KEY,
        authDomain: import.meta.env.VITE_REACT_APP_DEVELOPMENT_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_REACT_APP_DEVELOPMENT_PROJECT_ID,
        storageBucket: import.meta.env.VITE_REACT_APP_DEVELOPMENT_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_REACT_APP_DEVELOPMENT_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_REACT_APP_DEVELOPMENT_APP_ID,
        measurementId: import.meta.env.VITE_REACT_APP_DEVELOPMENT_MEASUREMENT_ID
    };
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getA
export const auth = getAuth();
export const db = getFirestore(app)
export const storage = getStorage(app)
// const analytics = getAnalytics(app);