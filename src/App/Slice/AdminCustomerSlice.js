import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../../config/firebase.config.js";

export const getCustomerReducers = createAsyncThunk(
    "getCustomerReducers",
    async ()=> {
        const firebaseCollectionName = collection(db, "users")

        try {
            const getPendingRequest = await getDocs(firebaseCollectionName)
            const requestData = getPendingRequest.docs.map((dataArray) => ({
                    ...dataArray.data()
                })
            )
            const filterData = requestData.filter(userCustomer => userCustomer.isUserAuthorized === true && userCustomer.isAdmin === false && userCustomer.isBlocked === false)
            return filterData
        } catch (e) {
            return e
        }
    }
)

export const blockCustomerReducers = createAsyncThunk(
    "blockCustomerReducers",
    async (_id)=>{
        const usersCollection = doc(db, "users", _id)

        try {
            await updateDoc(usersCollection, {
                isBlocked: true
            })

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

    }
})
export default adminCustomerSlice.reducer