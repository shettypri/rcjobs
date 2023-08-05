import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../../config/firebase.config.js";;

export const fetchAdsReducers = createAsyncThunk(
    "fetchAdsReducers",
    async () => {
        const firebaseCollectionName = collection(db, "ADS_DATA")

        try {
            const getPendingRequest = await getDocs(firebaseCollectionName)
            const requestData = getPendingRequest.docs.map((dataArray) => ({
                    ...dataArray.data(),
                    id: dataArray.id
                })
            )
            const filterData = requestData.filter(ads => ads.isAdsShow === true)
            return filterData
        } catch (e) {
            return e
        }
    }
)
export const deleteAdsReducers = createAsyncThunk(
    "deleteAdsReducers",
    async (id) => {
        const adsCollection = doc(db, "ADS_DATA", id)

        try {
            await updateDoc(adsCollection, {
                isAdsShow: false
            })
            return `Accepted Sucessfully of ${id}`
        } catch (e) {
            return e
        }
    }
)
const FetchAdsSlice = createSlice({
    name: "FetchAdsSlice",
    initialState: {
        fetchAds: {
            loading: false,
            Error: false,
            Success: false,
            data: ""
        },


    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdsReducers.pending, (state) => {
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


    }
})

export default FetchAdsSlice.reducer