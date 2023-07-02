import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice.js";
import adminUserSlice from "./Slice/adminUserSlice.js";
import adminPaymentSlice from "./Slice/adminPaymentSlice.js";
import userDashBoardSlice from "./Slice/userDashBoardSlice.js";

const store = configureStore({
    reducer: {
        userReducer: userSlice,
        adminUserReducers:adminUserSlice,
        adminPaymentReducers:adminPaymentSlice,
        userDashBoardReducers:userDashBoardSlice,
    }
})

export default store