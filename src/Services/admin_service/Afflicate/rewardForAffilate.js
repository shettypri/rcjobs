import { USERS_COLLECTION } from "../../../Constants/database";
import updateFirebaseData from "../../../database/updateFirebaseData";
import getUserData from "./getUserData";

const rewardForAffiliate = async (id, amount) => {
    try {
        const data = await getUserData(id);
        const updateData = {
            TotalAffiliateAmount:
                Number(data.TotalAffiliateAmount) + Number(amount),
            wallet: Number(data.wallet) + Number(amount),
            currentAffiliateWallet:
                Number(data.currentAffiliateWallet) + Number(amount),
        };
        return await updateFirebaseData(id,updateData,USERS_COLLECTION)
    } catch (err) {
        console.log(err);
    }
};
export default rewardForAffiliate;
