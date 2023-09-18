import { USERS_COLLECTION } from "../../Constants/database"
import fetchDataFromFirebase from "../../database/fetchdataFromFirebase"

const newRequestService = async() => {
    const collectionName = USERS_COLLECTION

    try {
        const fetchUserArray = await fetchDataFromFirebase(collectionName)
        const newUserArray = fetchUserArray.filter(
            userCustomer => userCustomer.isUserAuthorized === false && userCustomer.isAdmin === false
        )
        return newUserArray
    } catch (err) {
        return []
    }
}
export default newRequestService