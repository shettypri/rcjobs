import logo from "../assets/Logo/rc-jobs-test-logo.png"
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isLogOutReducers} from "../App/Slice/userSlice.js";
import {useEffect} from "react";


const Navbar = () => {
    const navigate = useNavigate()
    const Dispatch = useDispatch()
    // const locationPath = useLocation()
    const {loading, isLoggedIn, newUser, error, data} = useSelector(state => state.userReducer)

    const handleLogOut = () => {
        Dispatch(isLogOutReducers())
        sessionStorage && sessionStorage.clear()
        navigate("/")
    }
    return (
        <nav className="w-full h-14 bg-slate-400 flex justify-between px-4 md:px-4 items-center">
            <div>
                <img className="h-12 w-25 cursor-pointer" src={logo} alt=""/>
            </div>
            <ul className={" hidden md:flex dspace-x-5 font-bold"}>
                {
                    isLoggedIn && (
                        <>
                            {
                            data.isUserAuthorized ? (
                                <>
                                    <li className={"mx-[10px] cursor-pointer text-white"}>
                                        <Link to="/user/userdashboard"> dashboard</Link>
                                    </li>
                                    <li className={"mx-[10px] cursor-pointer text-white"}>
                                        <Link to="/user/profile"> {data.name} </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className={"mx-[10px] cursor-pointer text-white"}>
                                        <Link to="/admin/dashboard"> Admin dashboard</Link>
                                    </li>
                                    <li className={"mx-[10px] cursor-pointer text-white"}>
                                        <Link to="/user/profile"> {data.name} </Link>
                                    </li>
                                </>
                            )
                        }
                            <li className={"mx-[10px] cursor-pointer text-white"}>
                                <p onClick={handleLogOut}
                                > logout</p>
                            </li>

                        </>
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