import {BrowserRouter, Route, Routes,} from 'react-router-dom'

import './App.css'
import Navbar from "./Components/Navbar.jsx";
import Otp_Login from "./Components/Otp_Login.jsx";
import Register from './Components/Users/Register';
import user from './Components/Users/User_dashboard.jsx'
import admin from './Components/Admin/Dashboard.jsx'

function App() {


    return (
        <>
            <BrowserRouter>
                <div>
                 <Navbar/>
                </div>
                <Routes>
                    <Route exact path='/register' element={<Register/>}/>
                    <Route exact path='/user' element={<user/>}/>
                    <Route exact path='/admin' element={<admin/>}/>

                    <Route exact path='/admin/otplogin' element={<Otp_Login/>}/>
                    <Route exact path='/user/otplogin' element={<Otp_Login/>}/>
                </Routes>

            </BrowserRouter>


        </>
    )
}

export default App
