import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {doc, getDoc} from "@firebase/firestore";
import {db} from "../../config/firebase.config.js";
import {updateDoc} from "firebase/firestore";
import {useDispatch} from "react-redux";

export const cashBackRequestReducers = createAsyncThunk(
    "cashBackRequestReducers",
    async (requestData) => {
        const adsCollection = doc(db, "users", requestData.id)
        try {
            await updateDoc(adsCollection, {
                isWithdrawing: true,
                withdrawalAmount: requestData.amount
            })
            return "completed"
        } catch (e) {
            return e
        }
    }
)
export const walletReducers = createAsyncThunk(
    "walletReducers",
    async (id) => {
        try {
            const docRef = await doc(db, "users", id)
            const pendingUsers = await getDoc(docRef)
            return await pendingUsers.data()
        } catch (error) {
            console.log(`Error is ${error}`);
            return error
        }
    }
)


const cashBackSlice = createSlice(
    {
        name: "cashBackSlice",
        initialState: {
            walletData: {
                loading: false,
                Error: false,
                Success: false,
                data: ""
            },
            cashBack: {
                loading: false,
                Error: false,
                Success: false,
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(walletReducers.pending, (state) => {
                    state.walletData.loading = true
                })
                .addCase(walletReducers.fulfilled, (state, action) => {
                    state.walletData.loading = false;
                    state.walletData.isLoggedIn = true;
                    if (state.walletData.data.length != 0) {
                        state.walletData.data = ""
                    }
                    state.walletData.data = (action.payload)
                })
    .addCase(walletReducers.rejected, (state, action) => {
        state.walletData.loading = false;
        state.walletData.Error = true;
    })

    //     cashbackk
    .addCase(cashBackRequestReducers.pending, (state) => {
        state.cashBack.loading = true;
    })
    .addCase(cashBackRequestReducers.fulfilled, (state, action) => {
        state.cashBack.loading = false;
        state.cashBack.Success = true;

    })
    .addCase(cashBackRequestReducers.rejected, (state, action) => {
        state.cashBack.loading = false;
        state.cashBack.Error = action.payload;
    })

}
})

export default cashBackSlice.reducer