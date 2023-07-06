import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice.js";
import adminUserSlice from "./Slice/adminUserSlice.js";
import adminPaymentSlice from "./Slice/adminPaymentSlice.js";
import userDashBoardSlice from "./Slice/userDashBoardSlice.js";
import fetchAdsSlice from "./Slice/fetchAdsSlice.js";
import BuyProductSlice from "./Slice/BuyProductSlice.js";

const store = configureStore({
    reducer: {
        userReducer: userSlice,
        adminUserReducers:adminUserSlice,
        adminPaymentReducers:adminPaymentSlice,
        userDashBoardReducers:userDashBoardSlice,
        fetchAdsReducers:fetchAdsSlice,
        ProductReducer:BuyProductSlice
    }
})

export default store