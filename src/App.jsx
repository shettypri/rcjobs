import {BrowserRouter, Route, Routes,} from 'react-router-dom'

import './App.css'
import Navbar from "./Components/Navbar.jsx";

import Add_ads from "./Components/Admin/Add_ads.jsx";
import Dashboard from "./Components/Admin/Dashboard.jsx";
import New_Request from "./Components/Admin/New_Request.jsx";
import New_user from "./Components/Admin/New_user.jsx";
import Payment_request from "./Components/Admin/Payment_request.jsx";
import Otp_Login from "./Components/Otp_Login.jsx";
import Profile from "./Components/Users/Profile.jsx";
import Register from "./Components/Users/Register.jsx";
import User_dashboard from "./Components/Users/User_dashboard.jsx";
import Waiting from "./Components/Users/Waiting.jsx";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {isLoginReducers} from "./App/Slice/userSlice.js";
import Buy_List from "./Components/Admin/Buy_List.jsx";

function App() {
    const locationPath = window.location.pathname
    const Dispatch = useDispatch()
    useEffect(() => {
        if(locationPath !== "/"){
            console.log("=========",locationPath)
            Dispatch(isLoginReducers(sessionStorage.getItem("key")))
        }
    }, []);

    const {loading, isLoggedIn, newUser, error, data} = useSelector(state => state.userReducer)

    return (
        <>
            <BrowserRouter>
                <div>
                 <Navbar/>
                </div>

                <Routes>

                    {/*otp_login*/}
                    <Route exact path='/' element={<Otp_Login/>}/>


                    {/*admin*/}
                    <Route exact path='/admin/adds' element={<Add_ads/>}></Route>
                    <Route exact path='/admin/dashboard' element={<Dashboard/>}></Route>
                    <Route exact path='/admin/newrequest' element={<New_Request/>}></Route>
                    {/*<Route exact path='/admin/newuser' element={<New_user/>}></Route>*/}
                    <Route exact path='/admin/paymentrequest' element={<Payment_request/>}>
                    </Route>
                    <Route exact path='/admin/order' element={<Buy_List />} />


                    {/*user*/}
                    <Route exact path ='/user/profile' element={<Profile/>}/>
                    <Route exact path ='/user/register' element={<Register/>}/>
                    <Route exact path ='/user/userdashboard' element={<User_dashboard/>}/>
                    <Route exact path ='/user/waiting' element={<Waiting/>}/>

                </Routes>
                {/*<Routes>*/}

                {/*    /!*Secured Route Plans*!/*/}
                {/*    /!*otp_login*!/*/}
                {/*    <Route exact path='/' element={<Otp_Login/>}/>*/}
                {/*    */}

                {/*    /!*admin*!/*/}
                {/*    <Route element={<ProtectedRoute isLogedIn={isLoggedIn}/>}>*/}
                {/*        <Route element={<ProtectedRoute isAdmin ={data.isAdmin}/>}>*/}
                {/*            <Route exact path='/admin/adds' element={<Add_ads/>}/>*/}
                {/*            <Route exact path='/admin/dashboard' element={<Dashboard/>}/>*/}
                {/*            <Route exact path='/admin/newrequest' element={<New_Request/>}/>*/}
                {/*            <Route exact path='/admin/paymentrequest' element={<Payment_request/>}/>*/}
                {/*        </Route>*/}

                {/*        /!*user*!/*/}
                {/*        <Route element={<ProtectedRoute isUserAuthrized={data.isUserAuthorized}/>}>*/}
                {/*            <Route exact path='/user/profile' element={<Profile/>}/>*/}
                {/*            <Route exact path='/user/userdashboard' element={<User_dashboard/>}/>*/}
                {/*        </Route>*/}
                {/*            <Route exact path='/user/waiting' element={<Waiting/>}/>*/}
                {/*            <Route exact path='/user/register' element={<Register/>}/>*/}


                {/*    </Route>*/}


                {/*</Routes>*/}

            </BrowserRouter>


        </>
    )
}

export default App
