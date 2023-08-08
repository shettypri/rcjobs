import logo from "../assets/Logo/rc-jobs-test-logo.png"
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isLoginReducers, isLogOutReducers} from "../App/Slice/userSlice.js";
import {useEffect, useState} from "react";


const Navbar = () => {
    // toggle variable for mobile view navbar
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate()
    const Dispatch = useDispatch()
    const locationPath = useLocation()
    const sessionKey = sessionStorage.getItem("key")
    useEffect(() => {
        if (locationPath !== "/" && locationPath !== "/user/:refer") {
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
        <nav className="w-full h-14 bg-slate-600 flex justify-between px-4 md:px-4 items-center">
            <div>
                <img className="h-12 w-25 cursor-pointer" src={logo} alt=""/>
            </div>
            <div>
                <ul className=" font-bold md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center  flex-col md:flex-row px-5">
                    {
                        isLoggedIn && (
                            <>
                                {   data.isUserAuthorized ? (
                                        <>
                                            <li className={"mx-[10px] cursor-pointer text-white capitalize hover:border-b-white hover:border-b-2"}>
                                                <Link to="/user/userdashboard"> dashboard</Link>
                                            </li>
                                            <li className={"mx-[10px] cursor-pointer text-white capitalize capitalize hover:border-b-white hover:border-b-2"}>
                                                <Link to="/user/withdraw"> Withdraw </Link>
                                            </li>

                                            <li className={"mx-[10px] cursor-pointer text-white capitalize capitalize hover:border-b-white hover:border-b-2"}>
                                                <Link to="/user/profile"> {data.name} </Link>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            {
                                                data.isAdmin && (
                                                    <>
                                                        <li className={"mx-[10px] cursor-pointer text-white"}>
                                                            <Link to="/admin/dashboard"> Admin dashboard</Link>
                                                        </li>
                                                    </>
                                                )
                                            }
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
                </ul>
            </div>
            {/*mobile navbar*/}
            <div className="hidden max-sm:block">

                <section className="cursor-pointer hidden max-sm:block py-4 text-2xl font-extrabold text-white "
                         onClick={() => {
                             setToggle(!toggle)
                         }}>
                    &#9776;
                </section>

                {toggle ? (<div className=" bg-slate-600 group fixed z-50  right-0 top-14 flex flex-col pt-2 mt-[-4px] mr-0 border-2 border-gray-500 ">
                    <ul className=" cursor-pointer px-1 mr-20 flex flex-col w-3/4 "

                    >
                        {
                            isLoggedIn && (
                                <>
                                    {
                                        data.isUserAuthorized ? (
                                            <>
                                                <li className={"mx-[10px] cursor-pointer text-white my-3 border-b border-white "}
                                                >
                                                    <Link to="/user/userdashboard " className="font-extrabold capitalize "> dashboard</Link>
                                                </li>
                                                <li className={"mx-[10px] cursor-pointer text-white my-3 border-b border-white "}>
                                                    <Link to="/user/withdraw" className="font-extrabold capitalize" > Withdraw</Link>
                                                </li>

                                                <li className={"mx-[10px] cursor-pointer text-white my-3 border-b border-white "}>
                                                    <Link to="/user/profile" className="font-extrabold capitalize"> {data.name} </Link>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                {
                                                    data.isAdmin && (
                                                        <>
                                                            <li className={"mx-[10px] cursor-pointer text-white my-3 border-white border-b"}>
                                                                <Link to="/admin/dashboard"> Admin dashboard</Link>
                                                            </li>
                                                        </>
                                                    )
                                                }
                                            </>
                                        )
                                    }
                                    <li className={"mx-[10px] cursor-pointer text-white my-3"}>
                                        <p onClick={handleLogOut} className="font-extrabold capitalize border-b border-white"
                                        > logout</p>
                                    </li>

                                </>
                            )
                        }
                    </ul>
                </div>):("")}
            </div>


        </nav>
    )
}

export default Navbar
// hidden md:flex dspace-x-5 font-bold