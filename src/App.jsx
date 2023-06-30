import './App.css'
import Navbar from "./Components/Navbar.jsx";
import Otp_Login from "./Components/Otp_Login.jsx";
import User_dashboard from "./Components/Users/User_dashboard.jsx";
import Dashboard from "./Components/Admin/Dashboard.jsx";

function App() {


    return (
        <>
            <Navbar/>
            {/*<Otp_Login />*/}
            {/*<User_dashboard/>*/}
            <Dashboard />
        </>
    )
}

export default App
