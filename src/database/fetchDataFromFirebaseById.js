import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";

const fetchDataFromFirebaseById = async (id,collectionName) => {
    // const firebaseCollection = collection(db, collectionName);
    const firebaseCollection = doc(db, collectionName,"iMBCbUNhKKbjgLxuL3VJrhtiIzi2" );
    // doc(db, "users",user.uid );

    try {
        console.log("erwepior");
        const getArray = await getDoc(firebaseCollection,id);
        console.log("getArray ->", getArray);
    } catch (error) {
        return error;
    }
}
export default fetchDataFromFirebaseById;