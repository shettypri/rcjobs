import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { blockCustomerService, getCustomerService, getJoinedCustomerService } from "../../Services/admin_service/adminCustomerService.js";

export const getCustomerReducers = createAsyncThunk(
    "getCustomerReducers",
    async ()=> {
        try {
            return await getCustomerService()
        } catch (e) {
            return e
        }
    }
)

export const getJoinedCustomer = createAsyncThunk(
    "getJoinedCustomer",
    async ()=>{
        try {
            return await getJoinedCustomerService()
        } catch (e) {
            return e
        }
    }
)


export const blockCustomerReducers = createAsyncThunk(
    "blockCustomerReducers",
    async (_id)=>{
        try {
            await blockCustomerService(_id)
        } catch (e) {
            return e
        }

    }
)
export const unblockCustomerReducers = createAsyncThunk(
    "unblockCustomerReducers",
    async (_id)=>{
        try {
            return await blockCustomerService(_id)
        } catch (e) {
            return e
        }

    }
)

const  adminCustomerSlice = createSlice({
    name:"adminUserSlice",
    initialState:{
        customerUser:{
            loading:false,
            error:false,
            success:false,
            data:""
            },
        BlockedUserState:{
            loading:false,
            error:false,
            success:false,
            result:""
        },
        JoinCustomerState:{
            // getJoinedCustomer
            loading:false,
            error:false,
            success:false,
            data:""
        }
        },
    extraReducers:(builder)=>{
        builder
            .addCase(getCustomerReducers.pending, (state) => {
                state.customerUser.loading = true;
            })
            .addCase(getCustomerReducers.fulfilled, (state, action) => {
                state.customerUser.loading = false;
                state.customerUser.Success = true;
                if (state.customerUser.data.length !== 0) {
                    state.customerUser.data = ""
                }
                state.customerUser.data = (action.payload)
            })
            .addCase(getCustomerReducers.rejected, (state, action) => {
                state.customerUser.loading = false;
                state.customerUser.Error = action.payload;
            })
            .addCase(blockCustomerReducers.pending,(state)=>{
                state.BlockedUserState.loading = true;
            })
            .addCase(blockCustomerReducers.fulfilled,(state)=>{
                state.BlockedUserState.loading = false;
                state.BlockedUserState.success=true
            })
            .addCase(blockCustomerReducers.rejected,(state,action)=>{
                state.BlockedUserState.loading = false;
                state.BlockedUserState.Error = true;
                state.BlockedUserState.result=action.payload
            })
            .addCase(getJoinedCustomer.pending, (state) => {
                state.JoinCustomerState.loading = true;
            })
            .addCase(getJoinedCustomer.fulfilled, (state, action) => {
                state.JoinCustomerState.loading = false;
                state.JoinCustomerState.Success = true;
                if (state.JoinCustomerState.data.length !== 0) {
                    state.JoinCustomerState.data = ""
                }
                state.JoinCustomerState.data = (action.payload)
            })
            .addCase(getJoinedCustomer.rejected, (state, action) => {
                state.JoinCustomerState.loading = false;
                state.JoinCustomerState.Error = action.payload;
            })

    }
})
export default adminCustomerSlice.reducer