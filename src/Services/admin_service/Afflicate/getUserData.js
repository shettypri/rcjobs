import { USERS_COLLECTION } from "../../../Constants/database";
import fetchDataFromFirebase from "../../../database/fetchdataFromFirebase";

const getUserData = async(id)=>{
try {
    const data = await fetchDataFromFirebase(USERS_COLLECTION)
    const filterData = data.filter((item)=>item.id === id);
    return filterData[0];
} catch (err) {
    console.log(err);
}
}
export default getUserData;