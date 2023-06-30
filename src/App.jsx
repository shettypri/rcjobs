import {BrowserRouter, Route, Routes,} from 'react-router-dom'

import './App.css'
import Navbar from "./Components/Navbar.jsx";
import Otp_Login from "./Components/Otp_Login.jsx";
import Register from './Components/Users/Register';
import admin from './Components/Admin/Dashboard.jsx'

function App() {


    return (
        <>
            <BrowserRouter>
                <div>
                    <Navbar/>
                </div>

            <Routes>
                <Route exact path='/admin/OtpLogin ' element={<Otp_Login />}/>
                <Route exact path='/admin ' element={<admin/>}/>
                <Route exact path='/user/OtpLogin ' element={<Otp_Login />}/>
                <Route exact path='/register' element={<Register/>}/>
                <Route exact path='/user/:reference' element={<reference/>}/>
            </Routes>
            </BrowserRouter>


        </>
    )
}

export default App
