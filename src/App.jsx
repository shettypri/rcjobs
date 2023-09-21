import {BrowserRouter, Route, Routes,} from 'react-router-dom'

import './App.css'
import Navbar from "./Components/Navbar.jsx";
import Add_ads from "./Components/Admin/Add_ads.jsx";
import Dashboard from "./Components/Admin/Dashboard.jsx";
import New_Request from "./Components/Admin/New_Request.jsx";
import Payment_request from "./Components/Admin/Payment_request.jsx";
import Otp_Login from "./Components/Otp_Login.jsx";
import Profile from "./Components/Users/Profile.jsx";
import Register from "./Components/Users/Register.jsx";
import User_dashboard from "./Components/Users/User_dashboard.jsx";
import Waiting from "./Components/Users/Waiting.jsx";
import {
    AdminRoute, AuthUserRoute, BlockUserRoute,
    ProtectedLoginRoute, RegisterRoute, UserRoute, WaitingUserRoute,
} from "./ProtectedRoute/ProtectedRoute.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {isLoginReducers} from "./App/Slice/userSlice.js";
import Buy_List from "./Components/Admin/Buy_List.jsx";
import Refer from "./Components/Refer.jsx";
import Withdrawal from "./Components/Users/Withdrawal.jsx";
import PaymentDetails from "./Components/Admin/PaymentDetails.jsx";
import Pre_Loader from "./Components/Global/Pre_Loader.jsx";
import UserCustomer from "./Components/Admin/UserCustomer.jsx";
import MonthlyJoining from "./Components/Admin/MonthlyJoining.jsx";
import Block_Page from "./Components/Global/Block_Page.jsx";
import {OrderDetails} from "./Components/Admin/OrderDetails.jsx";
import HistoryTansaction from './Components/Users/HistoryTansaction';
function App() {
    const Dispatch = useDispatch()
    const {loading, isLoggedIn, newUser, error, data} = useSelector(state => state.userReducer)
    const [showLoader, setShowLoader] = useState(true);

    setTimeout(() => {
        setShowLoader(false)
    }, 4000);

    return (
        <>
            <BrowserRouter>
                <div className="my-20">
                    <Navbar/>
                </div>
                {
                    showLoader ? (<Pre_Loader/>) : (
                        <Routes>

                            {/*<Route exact path='/loader' element={<Pre_Loader/>}/>*/}

                            {/*otp_login*/}
                            <Route exact path='/' element={<Otp_Login/>}/>
                            <Route exact path='/user/:refer' element={<Refer/>}/>

                            <Route element={<ProtectedLoginRoute isLoggedIn={isLoggedIn}/>}>
                                {/*admin*/}
                                <Route element={<AdminRoute isAdmin={data.isAdmin}/>}>
                                    <Route exact path='/admin/adds' element={<Add_ads/>}/>
                                    <Route exact path='/admin/dashboard' element={<Dashboard/>}/>
                                    <Route exact path='/admin/newrequest' element={<New_Request/>}/>
                                    <Route exact path='/admin/customer' element={<UserCustomer/>}/>
                                    <Route exact path='/admin/monthly-join' element={<MonthlyJoining/>}/>
                                    <Route exact path='/admin/paymentrequest' element={<Payment_request/>}/>
                                    <Route exact path='/admin/paymentdeatails' element={<PaymentDetails/>}/>
                                    <Route exact path='/admin/order' element={<Buy_List/>}/>
                                    <Route exact path='/admin/orderdetails' element={<OrderDetails/>}/>
                                </Route>

                                {/*user*/}

                                <Route element={<UserRoute isAdmin={data.isAdmin} newUser={newUser}/>}>

                                    <Route element={<AuthUserRoute isAuthorised={data.isUserAuthorized}
                                                                   isBlocked={data.isBlocked}/>}>
                                        <Route exact path='/user/profile' element={<Profile/>}/>
                                        <Route exact path='/user/transcation' element={<HistoryTansaction/>}/>
                                        <Route exact path='/user/userdashboard' element={<User_dashboard/>}/>
                                        <Route exact path='/user/withdraw' element={<Withdrawal/>}/>
                                    </Route>

                                    <Route element={<RegisterRoute isNewUser={newUser}
                                                                   isAuthorised={data.isUserAuthorized === undefined?false:data.isUserAuthorized}

                                    />}>
                                        <Route exact path='/user/register' element={<Register/>}/>
                                    </Route>
                                    <Route element={<WaitingUserRoute isAuthorised={data.isUserAuthorized}/>}>
                                        <Route exact path='/user/waiting' element={<Waiting/>}/>
                                    </Route>
                                    <Route element={<BlockUserRoute isBlocked={data.isBlocked}/>}>
                                        <Route exact path='/user/blockpage' element={<Block_Page/>}/>
                                    </Route>

                                </Route>

                            </Route>

                        </Routes>
                    )
                }


            </BrowserRouter>
        </>
    )
}

export default App
