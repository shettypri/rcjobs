import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../../config/firebase.config.js";
import { deleteAdsService, getAdsService } from "../../Services/admin_service/fetchAdsService.js";

export const fetchAdsReducers = createAsyncThunk(
    "fetchAdsReducers",
    async () => {
        try {
            return await getAdsService()
        } catch (e) {
            return e
        }
    }
)
export const deleteAdsReducers = createAsyncThunk(
    "deleteAdsReducers",
    async (id) => {
        

        try {
            return await deleteAdsService(id)
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
        deleteAds: {
            loading: false,
            Error: false,
            Success: false,
            result: ""
        }
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
            .addCase(deleteAdsReducers.pending, (state) => {
                state.deleteAds.loading = true;
            })
            .addCase(deleteAdsReducers.fulfilled, (state, action) => {
                state.deleteAds.loading = false;
                state.deleteAds.Success = true;
                state.deleteAds.result = action.payload
            })
            .addCase(deleteAdsReducers.rejected, (state, action) => {
                state.deleteAds.loading = false;
                state.deleteAds.Error = action.payload;
            })



    }
})

export default FetchAdsSlice.reducer