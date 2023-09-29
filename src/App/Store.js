import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice.js";
import adminUserSlice from "./Slice/adminUserSlice.js";
import adminPaymentSlice from "./Slice/adminPaymentSlice.js";
import userDashBoardSlice from "./Slice/userDashBoardSlice.js";
import fetchAdsSlice from "./Slice/fetchAdsSlice.js";
import BuyProductSlice from "./Slice/BuyProductSlice.js";
import CashBackSlice from "./Slice/CashBackSlice.js";
import AdminCustomerSlice from "./Slice/AdminCustomerSlice.js";
import ReferSlice from "./Slice/referSlice.js";
import WithdrawalSlice from "./Slice/WithdrawalSlice.js";
import AnonymousSlice from "./Slice/AnonymousSlice.js";

const store = configureStore({
    reducer: {
        userReducer: userSlice,
        adminUserReducers:adminUserSlice,
        adminPaymentReducers:adminPaymentSlice,
        userDashBoardReducers:userDashBoardSlice,
        fetchAdsReducers:fetchAdsSlice,
        ProductReducer:BuyProductSlice,
        CashBackReducers:CashBackSlice,
        CustomerReducers:AdminCustomerSlice,
        ReferReducers:ReferSlice,
        withdrawalReducer:WithdrawalSlice,
        AnonymousReducer: AnonymousSlice,
    }
})

export default store