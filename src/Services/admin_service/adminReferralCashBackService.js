import { doc, updateDoc } from "firebase/firestore";
import { USERS_COLLECTION } from "../../Constants/database"
import fetchDataFromFirebase from "../../database/fetchdataFromFirebase";
import { db } from "../../config/firebase.config";

const collectionName = USERS_COLLECTION

export const getDataByReferCodeService= async(joiningCode)=>{
    try {
        const filterArray = await fetchDataFromFirebase(collectionName);
        const filterData = filterArray.filter(userCustomer => userCustomer.Referral_Code === joiningCode )
        
        return filterData[0]
    } catch (err) {
        console.log("Error");
    }

} 

export const updateUserByReferCodeService= async(joiningCode)=>{
    try {
        const arrayData = await getDataByReferCodeService(joiningCode);
        const doctorCollection = doc(db, collectionName, arrayData.id)
                await updateDoc(doctorCollection, {
                    referred: arrayData.referred + 1,
                    total_referred:arrayData.total_referred+1,
                    wallet: arrayData.wallet + 200,
                    limit:arrayData.limit + 25,
                    totalEarning :arrayData.totalEarning+200
                })
                return arrayData
    } catch (error) {
        console.log("Error");
    }
}
