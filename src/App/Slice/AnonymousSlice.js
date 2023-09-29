import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAdsAnonymousService from "../../Services/anonymous/getAdsService";

export const getAdsAnonymousReducers = createAsyncThunk(
    "getAnonymousReducers",
    async (id) => {
        try {
            return await getAdsAnonymousService(id);
        } catch (err) {
            return err;
        }
    }
);

const anonymousSlice = createSlice({
    name: "anonymous",
    initialState: {
        getAdsState: {
            loading: false,
            Error: false,
            Success: false,
            data: "",
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAdsAnonymousReducers.pending, (state) => {
                state.getAdsState.loading = true;
            })
            .addCase(getAdsAnonymousReducers.fulfilled, (state, action) => {
                state.getAdsState.loading = false;
                state.getAdsState.Success = true;
                if (state.getAdsState.data !== undefined) {
                    if (state.getAdsState.data.length !== 0)
                        state.getAdsState.data = "";
                }
                state.getAdsState.data = action.payload;
            })
            .addCase(getAdsAnonymousReducers.rejected, (state, action) => {
                state.getAdsState.loading = false;
                state.getAdsState.Error = action.payload;
            });
    },
});
export default anonymousSlice.reducer;
