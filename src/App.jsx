import './App.css'
import Navbar from "./Components/Navbar.jsx";
import Otp_Login from "./Components/Otp_Login.jsx";
import Register from './Components/Users/Register';
import Add_ads from "./Components/Admin/Add_ads.jsx";

function App() {


    return (
        <>
            <Navbar/>
            {/*<Register/>*/}
            <Add_ads/>
        </>
    )
}

export default App
