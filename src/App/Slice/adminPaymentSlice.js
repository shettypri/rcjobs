import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../../config/firebase.config.js";
import {useDispatch} from "react-redux";
import {isLoginReducers} from "./userSlice.js";

export const walletPaymentRequestReducers = createAsyncThunk(
    "walletPaymentRequestReducers",
    async ()=>{
        const firebaseCollectionName = collection(db, "users")

        try {
            const getPendingRequest = await getDocs(firebaseCollectionName)
            const requestData = getPendingRequest.docs.map((dataArray) => ({
                    ...dataArray.data()
                })
            )
            const filterData = requestData.filter(userCustomer => userCustomer.isWithdrawing === true)
            return filterData
        } catch (e) {
            return e
        }
    }
)
export const walletPaymentResponseReducers = createAsyncThunk(
    "walletPaymentResponseReducers",
    async (responseData)=>{
        const doctorCollection = doc(db, "users", responseData.id)
        try {
            await updateDoc(doctorCollection, {
                wallet:responseData.wallet,
                isWithdrawing:responseData.isWithdrawing,
                withdrawalAmount:0,
                referred:0,
            })
            return `Accepted Sucessfully of ${responseData.id}`
        } catch (e) {
            return e
        }
    }
)

const adminPaymentSlice = createSlice({
    name:"adminPaymentReducer",
    initialState:{
        paymentRequest:{
            loading:false,
            Success:false,
            Error:false,
            data:"",

        },
        paymentResponse:{
            loading:false,
            Success: false,
            Error:false,
            isPaid:false,
        }
    },extraReducers:(builder)=>{
    builder
        .addCase(walletPaymentRequestReducers.pending,(state)=>{
            state.paymentRequest.loading = true
        })
        .addCase(walletPaymentRequestReducers.fulfilled,(state,action)=>{
            state.paymentRequest.loading = false;
            state.paymentRequest.Success = true;
            if (state.paymentRequest.data.length !== 0) {
                state.paymentRequest.data = ""
            }
            state.paymentRequest.data = (action.payload)
        })
        .addCase(walletPaymentRequestReducers.rejected,(state,action)=>{
            state.paymentRequest.loading = false;
            state.paymentRequest.Error = action.payload;
        })
        .addCase(walletPaymentResponseReducers.pending,(state)=>{
            state.paymentResponse.loading = true
        })
        .addCase(walletPaymentResponseReducers.fulfilled,(state,action)=>{
            state.paymentResponse.loading = false
            state.paymentResponse.isPaid = true
            state.paymentResponse.Success = true
        })
        .addCase(walletPaymentResponseReducers.rejected,(state,action)=>{
            state.paymentResponse.loading = false
            state.paymentResponse.Error = action.payload
        })
    }
})

export default adminPaymentSlice.reducer