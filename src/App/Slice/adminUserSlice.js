import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, getDocs, doc, deleteDoc, updateDoc} from "firebase/firestore";
import {db} from "../../config/firebase.config.js"

export const newUserReducers = createAsyncThunk(
    "newUserReducers",
    async () => {
        const firebaseCollectionName = collection(db, "users")

        try {
            const getPendingRequest = await getDocs(firebaseCollectionName)
            const requestData = getPendingRequest.docs.map((dataArray) => ({
                    ...dataArray.data()
                })
            )
            const filterData = requestData.filter(userCustomer => userCustomer.isUserAuthorized === false && userCustomer.isAdmin === false)
            return filterData
        } catch (e) {
            return e
        }
    }
)
export const referralCashBack = createAsyncThunk(
    "referralCashBack",
    async (joiningCode) => {
        const firebaseCollectionName = collection(db, "users")
        try {
            const getPendingRequest = await getDocs(firebaseCollectionName)
            const requestData = getPendingRequest.docs.map((dataArray) => ({
                    ...dataArray.data()
                })
            )
                const filterData = requestData.filter(userCustomer => userCustomer.Referral_Code === joiningCode )
                const filterArray = filterData[0]
            if (joiningCode !== null) {
                const doctorCollection = doc(db, "users", filterArray.id)
                await updateDoc(doctorCollection, {
                    referred: filterArray.referred + 1,
                    total_referred:filterArray.total_referred+1,
                    wallet: filterArray.wallet + 200,
                    limit:filterArray.limit + 25

                })
            }
            return filterData
            // return ["Data updated"]
        } catch (e) {
            return e
        }
    }
)
export const acceptRequestReducers = createAsyncThunk(
    "acceptRequestReducers",
    async (id) => {
        const doctorCollection = doc(db, "users", id)

        try {
            await updateDoc(doctorCollection, {
                isUserAuthorized: true
            })
            return `Accepted Sucessfully of ${id}`
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