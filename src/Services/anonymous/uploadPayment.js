import { v4 } from "uuid";
import { PRODUCT_PAYMENT_STORAGE_COLLECTION } from "../../Constants/database";
import uploadFileIntoFirebase from "../../database/uploadFileIntoFirebase";

const uploadPayment = async (dataFile) => {
    const fileName = dataFile.name;
    const FolderName = PRODUCT_PAYMENT_STORAGE_COLLECTION;
    const textV4 = v4();
    const StorageFolderFile = `${FolderName}/${fileName + textV4}`;
    try {
        const getFileUrl = await uploadFileIntoFirebase(
            dataFile,
            StorageFolderFile
        );
        return getFileUrl;
    } catch (err) {
        return "error";
    }
};
export default uploadPayment;
