import { USERS_COLLECTION } from "../../Constants/database";
import updateFirebaseData from "../../database/updateFirebaseData";

const adminAcceptNewRequestService = async (id) => {
    const collectionName = USERS_COLLECTION
    const data = {
        isUserAuthorized: true,
        isBlocked: false,
        joinedTimeStamp: new Date(),
        Joining_date: new Date().toUTCString().slice(5, 16),
        Joining_Month: new Date().getMonth(),
        Joining_year: new Date().getFullYear(),
    };
    try {
        return await updateFirebaseData(id,data,collectionName)
    } catch (err) {
        return "Error"
    }

};
export default adminAcceptNewRequestService;
