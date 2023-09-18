import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";

const updateFirebaseData = async(id,data,collectionName) => {
    const collectionDocument = doc(db,collectionName,id)
    try {
        await updateDoc(collectionDocument, data)
        return "Data updated"
    } catch (err) {
        return "Error"
    }
}
export default updateFirebaseData;  