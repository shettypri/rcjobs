import logo from "../assets/Logo/rc-jobs-test-logo.png"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isLogOutReducers} from "../App/Slice/userSlice.js";


const Navbar = () => {
    const navigate = useNavigate()
    const Dispatch = useDispatch()
    const handleLogOut = () => {
        Dispatch(isLogOutReducers())
        sessionStorage && sessionStorage.clear()
        navigate("/")
    }
    const {isLoggedIn} = useSelector(state => state.userReducer)
    return (
        <nav className="w-full h-14 bg-slate-400 flex justify-between px-4 md:px-4 items-center">
            <div>
                <img className="h-12 w-25 cursor-pointer" src={logo} alt=""/>
            </div>
            <ul className={" hidden md:flex dspace-x-5 font-bold"}>

                <li className={"mx-[10px] cursor-pointer text-white"}>
                    <Link to="/dashboard"> dashboard</Link>
                </li>
                <li className={"mx-[10px] cursor-pointer text-white"}>
                    <Link to="/profile"> profile </Link>
                </li>
                {
                    !(isLoggedIn) && (
                        <li className={"mx-[10px] cursor-pointer text-white"}>
                            <p onClick={handleLogOut}
                            > logout</p>
                        </li>
                    )
                }

                {/*<li className={"mx-[10px] cursor-pointer text-white"}> <Link to="/otplogin"> logout </Link> </li>*/}
            </ul>
            <div className={"md:hidden"}>
                <a className={"text-4xl"} href={"&"}>&#8801;
                </a>
            </div>
        </nav>
    )
}

export default Navbar