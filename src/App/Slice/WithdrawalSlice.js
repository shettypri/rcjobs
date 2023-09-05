import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addDoc, collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../../config/firebase.config.js";

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
            state.l
        })
    }
})

export default WithdrawalSlice.reducer