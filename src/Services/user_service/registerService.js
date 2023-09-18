import { USERS_COLLECTION } from "../../Constants/database";
import addToFirebaseById from "../../database/addToFirebaseById";

const registerService = async (data) => {
    const storeId = data.id
    const collectionName = USERS_COLLECTION

    try {
        await addToFirebaseById(data,storeId,collectionName)
        return "success"
    } catch (err) {
        return err
    }

}
export default registerService;