import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config";

const fetchDataFromFirebase = async (collectionName) => {
    const firebaseCollection = collection(db, collectionName);
    
    try {
        const getArray = await getDocs(firebaseCollection);
        // console.log("getArrayz", getArray.docs);
        const filterTheGetArray = getArray.docs.map((dataArray) => 
        ({
            ...dataArray.data(),
            id: dataArray.id
        })
        );
        // console.log("filterTheGetArray", filterTheGetArray);
        return filterTheGetArray; 
    } catch (err) {
        return err;
    }
};

export default fetchDataFromFirebase;