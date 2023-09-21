import { USERS_COLLECTION } from "../../Constants/database"
import updateFirebaseData from "../../database/updateFirebaseData"
const uploadProductToUser = async (id,data) => {
    try {
        await updateFirebaseData(id,data,USERS_COLLECTION)
    } catch (error) {
        return "Error"
    }
}
export default uploadProductToUser;