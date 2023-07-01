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

function App() {


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
                    <Route exact path='/admin/paymentrequest' element={<Payment_request/>}></Route>


                    {/*user*/}
                    <Route exact path ='/user/profile' element={<Profile/>}/>
                    <Route exact path ='/user/register' element={<Register/>}/>
                    <Route exact path ='/user/userdashboard' element={<User_dashboard/>}/>
                    <Route exact path ='/user/waiting' element={<Waiting/>}/>



                </Routes>

            </BrowserRouter>


        </>
    )
}

export default App
