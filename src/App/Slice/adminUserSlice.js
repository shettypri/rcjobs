import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import adminAcceptNewRequestService from "../../Services/admin_service/adminAceptNewRequestService.js";
import newRequestService from "../../Services/admin_service/newRequestService.js";
import { updateUserByReferCodeService } from "../../Services/admin_service/adminReferralCashBackService.js";

export const newUserReducers = createAsyncThunk("newUserReducers",
async () => {
        try {
            return await newRequestService()
        } catch (e) {
            return e
        }
    }
)
export const referralCashBack = createAsyncThunk("referralCashBack",
    async (joiningCode) => {
        try {
            return await updateUserByReferCodeService(joiningCode)
        } catch (e) {
            return e
        }
    }
)
export const acceptRequestReducers = createAsyncThunk("acceptRequestReducers",
    async (id) => {
        try {
            return await adminAcceptNewRequestService(id)
        } catch (e) {
            return e
        }
    }
)

const adminUserSlice = createSlice({
    name: "adminUserSlice",
    initialState: {
        newUsers: {
            loading: false,
            Error: false,
            Success: false,
            data: ""
        },
        acceptRequest: {
            loading: false,
            Error: false,
            Success: false,
        },
        CashBack: {
            loading: false,
            Error: false,
            Success: false,
            data: "",
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(newUserReducers.pending, (state) => {
                state.newUsers.loading = true;
            })
            .addCase(newUserReducers.fulfilled, (state, action) => {
                state.newUsers.loading = false;
                state.newUsers.Success = true;
                if (state.newUsers.data.length !== 0) {
                    state.newUsers.data = ""
                }
                state.newUsers.data = (action.payload)
            })
            .addCase(newUserReducers.rejected, (state, action) => {
                state.newUsers.loading = false;
                state.newUsers.Error = action.payload;
            })
            .addCase(acceptRequestReducers.pending, (state) => {
                state.acceptRequest.loading = true
            })
            .addCase(acceptRequestReducers.fulfilled, (state, action) => {
                state.acceptRequest.loading = false
                state.acceptRequest.Success = true;
            })
            .addCase(acceptRequestReducers.rejected, (state, action) => {
                state.acceptRequest.loading = false;
                state.acceptRequest.Error = action.payload;
            })
            .addCase(referralCashBack.pending, (state) => {
                state.CashBack.loading = true
            })
            .addCase(referralCashBack.fulfilled, (state, action) => {
                state.CashBack.loading = false
                state.CashBack.Success = true;
                state.CashBack.data = action.payload
            })
            .addCase(referralCashBack.rejected, (state, action) => {
                state.CashBack.loading = false;
                state.CashBack.Error = action.payload;
            })

    }
})

export default adminUserSlice.reducer