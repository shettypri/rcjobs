import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addDoc, collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../../config/firebase.config.js";
import {getCustomerReducers} from "./AdminCustomerSlice.js";

export const withdrawalStoreReducers = createAsyncThunk(
    "withdrawalStoreReducers",
    async (withdrwalInfo) => {
        const collectionList = collection(db, 'PAYMENT_INFO')
        try {
            return await addDoc(collectionList, withdrwalInfo)
        } catch (e) {
            return e
        }
    }
)
export const withdrawalDataReducers = createAsyncThunk("withdrawalDataReducers",
    async () => {
        const firebaseCollectionName = collection(db, "PAYMENT_INFO")

        try {
            const getPendingRequest = await getDocs(firebaseCollectionName)
            const requestData = getPendingRequest.docs.map((dataArray) => ({
                    ...dataArray.data(),
                    id: dataArray.id
                })
            )
            return requestData
        } catch (e) {
            return e
        }
    }
)

const WithdrawalSlice = createSlice({
    name: "WithdrawalSlice",
    initialState: {
        withdrawalStoreState: {
            loading: false,
            Success: false,
            Error: false,
        },
        withdrawalStoreData: {
            loading: false,
            Success: false,
            Error: false,
            data: "",
        }
    },
    extraReducers: (builder) => {
        builder.addCase(withdrawalStoreReducers.pending,(state)=>{
            state.withdrawalStoreState.loading=true;
        })
            .addCase(withdrawalStoreReducers.fulfilled, (state) => {
                state.withdrawalStoreState.loading = false;
                state.withdrawalStoreState.Success = true;
            })
            .addCase(withdrawalStoreReducers.rejected, (state, action) => {
                state.withdrawalStoreState.loading = false;
                state.withdrawalStoreState.Error = action.payload;
            })
            .addCase(withdrawalDataReducers.pending,(state)=>{
                state.withdrawalStoreData.loading=true;
            })
            .addCase(withdrawalDataReducers.fulfilled, (state, action) => {
                state.withdrawalStoreData.loading = false;
                state.withdrawalStoreData.Success = true;
                if (state.withdrawalStoreData.data.length !== 0) {
                    state.withdrawalStoreData.data = ""
                }
                state.withdrawalStoreData.data = (action.payload)
            })
            .addCase(withdrawalDataReducers.rejected, (state, action) => {
                state.withdrawalStoreData.loading = false;
                state.withdrawalStoreData.Error = action.payload;
            })


    }
})

export default WithdrawalSlice.reducer