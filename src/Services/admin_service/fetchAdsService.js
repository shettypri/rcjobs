import { ADS_DATA_COLLECTION } from "../../Constants/database";
import fetchDataFromFirebase from "../../database/fetchdataFromFirebase";
import updateFirebaseData from "../../database/updateFirebaseData";

export const getAdsService = async () => {
    console.log("HELLO");
    const collectionName = ADS_DATA_COLLECTION;
    try {
        const requestData = await fetchDataFromFirebase(collectionName);
        const filterData = requestData.filter(ads => ads.isAdsShow === true)
       return filterData
    } catch (err) {
        return "Error";
    }
}
export const deleteAdsService = async (id) => {
    const collectionName = ADS_DATA_COLLECTION;
    const data = {
        isAdsShow: false,
    };
    try {
        return await updateFirebaseData(id, data, collectionName);
    } catch (err) {
        return "Error";
    }
}