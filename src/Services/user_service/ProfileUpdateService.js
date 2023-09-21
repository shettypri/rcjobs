import { USERS_COLLECTION } from "../../Constants/database";
import updateFirebaseData from "../../database/updateFirebaseData";

const profileUpdateService = async(data)=>{
    try {
        return await updateFirebaseData(data.id,data,USERS_COLLECTION)
    } catch (error) {
        return error
    }
}
export default profileUpdateService;