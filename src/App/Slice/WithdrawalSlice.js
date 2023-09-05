import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../config/firebase.config.js";

export const withdrawalStoreReducers = createAsyncThunk(
    "withdrawalStoreReducers",
    async ()=>{
        const productCollection = doc(db, "Payment_record", id)

        try {
            await updateDoc(productCollection, {
                isOrderPlaced: true
            })
            return `Accepted Sucessfully of ${id}`
        } catch (e) {
            return e
        }
    }
)

const WithdrawalSlice = createSlice({
    name:"WithdrawalSlice",
    initialState:{
        withdrawalStoreState:{
            loading:false,
            Success:false,
            Error:false,
        },
        withdrawalStoreData:{
            loading:false,
            Success:false,
            Error:false,
            data:"",
        }
    },
    extraReducers:(builder)=>{
        builder
    }
})