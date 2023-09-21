import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    blockCustomerService,
    getCustomerService,
    getJoinedCustomerService,
    unblockCustomerService, unblockUserService
} from "../../Services/admin_service/adminCustomerService.js";

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
            return await blockCustomerService(_id)
        } catch (e) {
            return e
        }

    }
)
export const unblockCustomerReducer=createAsyncThunk(
    "unblockCustomerReducer",
    async (_id)=>{
        try {
            return await unblockUserService(_id)
        }catch (e){
            return e
        }
    }
)

export const unblockCustomerListReducers = createAsyncThunk(
    "unblockCustomerListReducers",
    async ()=>{
        try {
            return await unblockCustomerService()
        } catch (e) {
            return e
        }

    }
)

const  adminCustomerSlice = createSlice({
    name:"adminUserSlice",
    initialState: {
        customerUser: {
            loading: false,
            error: false,
            success: false,
            data: ""
        },
        BlockedUserState: {
            loading: false,
            error: false,
            success: false,
            result: ""
        },
        UnblockCustomerState:{
            loading: false,
            error: false,
            success: false,
            result: ""
        },
        JoinCustomerState: {
            // getJoinedCustomer
            loading: false,
            error: false,
            success: false,
            data: ""
        },
        UnblockedUserState: {
            loading: false,
            error: false,
            success: false,
            data: ""
        }
    },
    extraReducers:(builder)=> {
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


            .addCase(blockCustomerReducers.pending, (state) => {
                state.BlockedUserState.loading = true;
            })
            .addCase(blockCustomerReducers.fulfilled, (state) => {
                state.BlockedUserState.loading = false;
                state.BlockedUserState.success = true
            })
            .addCase(blockCustomerReducers.rejected, (state, action) => {
                state.BlockedUserState.loading = false;
                state.BlockedUserState.Error = true;
                state.BlockedUserState.result = action.payload
            })

            .addCase(unblockCustomerReducer.pending,(state)=>{
                state.UnblockCustomerState.loading=true;
            })
            .addCase(unblockCustomerReducer.fulfilled,(state)=>{
                state.UnblockCustomerState.loading=false;
                state.UnblockCustomerState.success=true;
            })
            .addCase(unblockCustomerReducer.rejected,(state,action)=>{
                state.UnblockCustomerState.loading=false;
                state.UnblockCustomerState.error=true;
                state.UnblockCustomerState.result=action.payload;
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

            .addCase(unblockCustomerListReducers.pending, (state) => {
                state.UnblockedUserState.loading = true;
            })
            .addCase(unblockCustomerListReducers.fulfilled, (state, action) => {
                state.UnblockedUserState.loading = false;
                state.UnblockedUserState.success = true;
                if (state.UnblockedUserState.data.length !== 0) {
                    state.UnblockedUserState.data = ""
                }
                state.UnblockedUserState.data = (action.payload);
            })
            .addCase(unblockCustomerListReducers.rejected, (state,action) => {
                state.UnblockedUserState.loading = false;
                state.UnblockedUserState.error = action.payload;
            })
    }

})
export default adminCustomerSlice.reducer