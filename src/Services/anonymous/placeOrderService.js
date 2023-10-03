import { BUY_PRODUCTS_COLLECTION } from "../../Constants/database";
import addToFirebase from "../../database/addToFirebase";

const placeOrderService = async (data) => {
    const collectionName = BUY_PRODUCTS_COLLECTION;
    try {
        return await  addToFirebase(data,collectionName)
    } catch (err) {
        return "error"
    }
}
export default placeOrderService;