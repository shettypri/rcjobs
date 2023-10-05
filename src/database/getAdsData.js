import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config";

const getAdsData = async (collectionName) => {
    const firebaseCollection = collection(db, collectionName);
    
    try {
        const getArray = await getDocs(firebaseCollection);
        // console.log("getArray", getArray.docs);
        // console.log("getArray ->", getArray.docs[0]);
        const filterTheGetArray = getArray.docs.map((dataArray) => 
        ({
            ...dataArray.data(),
            id: dataArray.id
        })
        );
        // console.log("filter GetArray", filterTheGetArray);
        return filterTheGetArray; 
    } catch (err) {
        return err;
    }
};

export default getAdsData;