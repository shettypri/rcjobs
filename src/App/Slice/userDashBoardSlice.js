import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../../firebase.config.js";

export const fetchAdsReducers = createAsyncThunk(
    "fetchAdsReducers",
    async () => {
        const firebaseCollectionName = collection(db, "ADS_DATA")

        try {
            const getPendingRequest = await getDocs(firebaseCollectionName)
            const requestData = getPendingRequest.docs.map((dataArray) => ({
                    ...dataArray.data()
                })
            )
            return requestData
        } catch (e) {
            return e
        }
    }
)

export const adsRewardREducers = createAsyncThunk(
    "adsRewardREducers",
    async (updateInfo)=>{
        const doctorCollection = doc(db, "users", updateInfo.id)

        try {
            await updateDoc(doctorCollection, {
                limit:updateInfo.limit,
                wallet:updateInfo.wallet,
            })
            return `Accepted Sucessfully of ${updateInfo.id}`
        } catch (e) {
            return e
        }
    }
)
const userDashBoardSlice = createSlice({
    name: "userDashBoardSlice",
    initialState: {
        fetchAds: {
            loading: false,
            Error: false,
            Success: false,
            data: "",
        },
        Ads_Reward:{
            loading: false,
            Error: false,
            Success: false,
        }
    },
    extraReducers: (builder) =>
        builder.addCase(fetchAdsReducers.pending, (state) => {
            state.fetchAds.loading = true;
        })
            .addCase(fetchAdsReducers.fulfilled, (state, action) => {
                state.fetchAds.loading = false;
                state.fetchAds.Success = true;
                if (state.fetchAds.data.length !== 0) {
                    state.fetchAds.data = ""
                }
                state.fetchAds.data = (action.payload)
            })
            .addCase(fetchAdsReducers.rejected, (state, action) => {
                state.fetchAds.loading = false;
                state.fetchAds.Error = action.payload;
            })
            .addCase(adsRewardREducers.pending, (state) => {
                state.Ads_Reward.loading = true;
            })
            .addCase(adsRewardREducers.fulfilled, (state, action) => {
                state.Ads_Reward.loading = false;
                state.Ads_Reward.Success = true;
            })
            .addCase(adsRewardREducers.rejected, (state, action) => {
                state.Ads_Reward.loading = false;
                state.Ads_Reward.Error = action.payload;
            })
})

export default userDashBoardSlice.reducer