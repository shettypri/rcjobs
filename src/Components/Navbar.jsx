import logo from "../assets/Logo/rc-jobs-test-logo.png"
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isLoginReducers, isLogOutReducers} from "../App/Slice/userSlice.js";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const [toggle, setToggle] = useState(true);
    const navigate = useNavigate()
    const Dispatch = useDispatch()
    // const locationPath = useLocation()
    const locationPath = useLocation()
    const sessionKey = sessionStorage.getItem("key")
    useEffect(() => {
        if (locationPath !== "/" && locationPath !== "/user/:refer") {
            console.log("=========", locationPath)
            sessionKey && (
                Dispatch(isLoginReducers((sessionKey)))
            )
        }
    }, []);
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
            <div>
                <ul className="duration-500 font-bold md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center  flex-col md:flex-row px-5">
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
                                                <Link to="/user/withdraw"> Withdraw</Link>
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
            </div>
            <div className="hidden max-sm:block">
                <FontAwesomeIcon icon={faBars} className={"cursor-pointer hidden max-sm:block"} onClick={()=>{setToggle(!toggle)}}/>
            </div>


        </nav>
    )
}

export default Navbar
// hidden md:flex dspace-x-5 font-bold