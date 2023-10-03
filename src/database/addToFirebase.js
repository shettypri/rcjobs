import { addDoc } from "firebase/firestore";

const addToFirebase = async (data,collectionName) => {
    try {
        await addDoc(collectionName,data)
        return "success"
    } catch (err) {
        return "error"
    }
}
export default addToFirebase;