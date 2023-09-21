import { USERS_COLLECTION } from "../../Constants/database";
import updateFirebaseData from "../../database/updateFirebaseData";

const transactionAmountService = async(id,data)=>{
    
    
    try {
        const updateData ={
            transationAmount:data
        }
        return await updateFirebaseData(id,updateData,USERS_COLLECTION)
    } catch (error) {
        return error;
    }

}
export default transactionAmountService;