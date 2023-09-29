import { ADS_DATA_COLLECTION } from "../../Constants/database"
import fetchDataFromFirebase from "../../database/fetchdataFromFirebase"

const getAdsAnonymousService = async (id) => {
    const collectionName = ADS_DATA_COLLECTION
    try {
        const data = await fetchDataFromFirebase(collectionName)
        const filterData = data.filter((item) => item.id === id)
        // console.log("filterData", filterData[0]);
        return filterData[0]
    } catch (err) {
        return "error"
    }
}
export default getAdsAnonymousService
