import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";

const addToFirebaseById = async(data,id,collectionName) => {
    try {
        await setDoc(doc(db,collectionName,id),data)
        return "success"
    } catch (err) {
        return err
    }
}
export default addToFirebaseById;