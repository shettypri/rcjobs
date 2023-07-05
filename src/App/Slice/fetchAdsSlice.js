import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../config/firebase.config.js";

export const fetchAdsReducers = createAsyncThunk(
    "fetchAdsReducers",
    async ()=>{
        const firebaseCollectionName = collection(db, "ADS_DATA")

        try {
            const getPendingRequest = await getDocs(firebaseCollectionName)
            const requestData = getPendingRequest.docs.map((dataArray) => ({
                    ...dataArray.data()
                })
            )
            const filterData = requestData.filter(ads => ads.isAdsShow === true)
            return filterData
        } catch (e) {
            return e
        }
    }
)

const FetchAdsSlice = createSlice({
    name: "FetchAdsSlice",
    initialState:{
        fecthAds:{
            loading: false,
            Error: false,
            Success: false,
            data: ""
        },

    },
    extraReducers:(builder)=>{

    }
})