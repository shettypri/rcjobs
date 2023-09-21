import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {doc, getDoc} from "@firebase/firestore";
import {db} from "../../config/firebase.config.js";
import {auth} from "../../config/firebase.config.js";
import {signOut} from "firebase/auth";
import profileUpdateService from "../../Services/user_service/ProfileUpdateService.js";

export const isLoginReducers = createAsyncThunk(
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

export const updateProfileReducer=createAsyncThunk("updateProfileReducer",
    async (requestData)=>{
   
        try{
            return await profileUpdateService(requestData)    
        
    }catch(error){
        console.log(`Error is ${error}`);
        return error

    }

})


export const isLogOutReducers = createAsyncThunk(
    "isLogOutReducers",
    async () => {
        try {
            return await signOut(auth)

        } catch (error) {
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
        data: "",
        ProfileLoading:false,
        ProfileUpdateEror:false,
        isProfileUpdated:false
    },
    extraReducers: (builder) => {
        builder.addCase(isLoginReducers.pending, (state) => {
            state.loading = true;
        })
            .addCase(isLoginReducers.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                if (action.payload == null) {
                    state.newUser = true;
                } else {
                    if (state.data.length != 0) {
                        state.data = ""
                    }
                    state.data = (action.payload)
                }
            })
            .addCase(isLoginReducers.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(isLogOutReducers.pending, (state) => {
                state.loading = true;
            })
            .addCase(isLogOutReducers.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = false;
                state.data = "";
            })
            .addCase(isLogOutReducers.rejected, (state, action) => {
                state.isLoggedIn = true;
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileReducer.pending,(state)=>{
                state.ProfileLoading=true
            })
            .addCase(updateProfileReducer.fulfilled,(state,)=>{
                state.ProfileLoading=false
                state.isProfileUpdated=true
            })
            .addCase(updateProfileReducer.rejected,(state,action)=>{
                state.ProfileLoading=false
                state.ProfileUpdateEror=action.payload
            })

    }
})



export default userSlice.reducer