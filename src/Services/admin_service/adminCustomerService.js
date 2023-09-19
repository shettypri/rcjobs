import { USERS_COLLECTION } from "../../Constants/database";
import fetchDataFromFirebase from "../../database/fetchdataFromFirebase";
import updateFirebaseData from "../../database/updateFirebaseData";

export const getCustomerService = async () => {
    const collectionName = USERS_COLLECTION;

    try {
        const data = await fetchDataFromFirebase(collectionName);
        const filterData = data.filter(
            (userCustomer) =>
                userCustomer.isUserAuthorized === true &&
                userCustomer.isAdmin === false &&
                userCustomer.isBlocked === false
        );
        return filterData;
    } catch (err) {
        return "Error";
    }
};

export const getJoinedCustomerService = async () => {
    const collectionName = USERS_COLLECTION;
    try {
        const data = await fetchDataFromFirebase(collectionName);
        const filterData = data.filter(
            (userCustomer) =>
                userCustomer.isUserAuthorized === true &&
                userCustomer.isAdmin === false
        );
        return filterData;
    } catch (error) {
        return "Error";
    }
};

export const blockCustomerService = async (id) => {
    const collectionName = USERS_COLLECTION;
    const data = {
        isBlocked: true,
    };
    try {
        return await updateFirebaseData(id, data, collectionName);
    } catch (err) {
        return "Error";
    }
};

// unblock code here
export const unblockCustomerService = async (id) => {
    // const collectionName = USERS_COLLECTION;
    // const data = {
    //     isBlocked: false,
    // };
    // try {
    //     return await updateFirebaseData(id, data, collectionName);
    // } catch (err) {
    //     return "Error";
    // }
}
