import { v4 } from "uuid";
import { PAYMENT_STORAGE_COLLECTION } from "../../Constants/database";
import uploadFileIntoFirebase from "../../database/uploadFileIntoFirebase";

const uploadFileService = async (dataFile) => {
    const fileName = dataFile.name;
    const FolderName= PAYMENT_STORAGE_COLLECTION;
    const textV4 = v4();
    const StorageFolderFile = `${FolderName}/${fileName + textV4}`
    try {
        const getFileUrl = await uploadFileIntoFirebase(dataFile,StorageFolderFile)
        return getFileUrl
    } catch (err) {
        console.log("error in uploadPhotoFormService",err);
        return "Not uploaded"
        
    }
}
export  default uploadFileService;