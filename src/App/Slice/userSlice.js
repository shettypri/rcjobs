import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {doc, getDoc} from "@firebase/firestore";
import {db} from "../../config/firebase.config.js";

export
const isLoginReducers = createAsyncThunk(
    "isLoginReducers",
    async (userId) => {
        try {
            const docRef = await doc(db, "users", userId)
            const pendingUsers = await getDoc(docRef)
            return await pendingUsers.data()
        } catch (error) {
            console.log(`Error is ${error}`);
            return error
        }
    }
)
const userSlice = createSlice({
    name: 'userReducer', initialState: {
        loading: false,
        isLoggedIn: false,
        newUser: false,
        error: false,
        data: ""
    },
    extraReducers: (builder) => {
        builder.addCase(isLoginReducers.pending, (state) => {
            state.loading = true;
        })
            .addCase(isLoginReducers.fulfilled,(state,action)=>{
                state.loading = false;
                state.isLoggedIn = true;
                if (action.payload == null) {
                    state.newUser = true;
                } else {
                    if(state.data.length != 0){
                        state.data =""
                    }
                    state.data = (action.payload)
                }
            })
            .addCase(isLoginReducers.rejected,(state,action)=>{
                state.isLoggedIn = false;
                state.loading = false;
                state.error = action.payload;
            })
    }
})
export default userSlice.reducer