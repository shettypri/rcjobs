import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../config/firebase.config"

const uploadFileIntoFirebase = async(data,storageLocation) => {
    const fileFolderRef = ref(storage, storageLocation)
    try {
        await uploadBytes(fileFolderRef, data)
        const imageUrl = await getDownloadURL(ref(storage, storageLocation))
        return imageUrl
      
        //     storing into fire store data

    } catch (error) {
        console.error(error);
        return "Not uploaded"
    }
}

export default uploadFileIntoFirebase;