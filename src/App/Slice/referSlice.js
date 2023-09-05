import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../config/firebase.config.js";

export const ReferUserReducers = createAsyncThunk(
    "ReferUserReducers",
    async (_refer_id) => {
        const firebaseCollectionName = collection(db, "users")
        try {
            const referUserDetails = await getDocs(firebaseCollectionName)
            const requestData = referUserDetails.docs.map((dataArray) => ({
                    ...dataArray.data(),
                    id: dataArray.id
                })
            )
            const filterData =requestData.filter(user => user.Referral_Code === _refer_id)
            return filterData[0]
        } catch (e) {
            return e
        }
    }
)

const ReferSlice = createSlice({
        name: 'ReferSlice', initialState: {
            referUserData: {
                loading: false,
                isReferValid: false,
                error: false,
                data: "",
            }
        },
    extraReducers:(builder)=>{
    builder
        .addCase(ReferUserReducers.pending, (state) => {
            state.referUserData.loading = true
        })
            .addCase(ReferUserReducers.fulfilled, (state, action,) => {
                state.referUserData.loading = false
                state.referUserData.Success = true
                state.referUserData.isReferValid = true

                if (state.referUserData.data.length !== 0) {
                    state.referUserData.data = ""
                }
                state.referUserData.data = (action.payload)
            })
            .addCase(ReferUserReducers.rejected, (state) => {
                state.referUserData.loading = false
                state.referUserData.Error = true
            })
    }

    }
)

export default  ReferSlice.reducer