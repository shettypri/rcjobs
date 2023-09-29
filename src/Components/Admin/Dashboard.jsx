import addUser from "../../assets/Images/add_user.png"
import ads from "../../assets/Images/ads.png"
import payment from "../../assets/Images/payment.png"
import monthly_join from "../../assets/Images/monthly-Join.png"
import userCustomer from "../../assets/Images/Customer.png"
import blockedUser from "../../assets/Images/blockedUser.png"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCustomerReducers, getJoinedCustomer} from "../../App/Slice/AdminCustomerSlice.js";
import fetchDataFromFirebase from "../../database/fetchdataFromFirebase"
import { USERS_COLLECTION } from "../../Constants/database"
import ShareLink from "../Users/ShareLink"


const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [numberUser, setNumberUser] = useState(0)
    useEffect(() => {
        dispatch(getCustomerReducers())
        dispatch(getJoinedCustomer())
        
    }, []);

    const getDataFunction = async () => {
        const getData = await fetchDataFromFirebase(USERS_COLLECTION)
        setNumberUser(getData.length)

    }
    getDataFunction()
    console.log("Users left", numberUser);
    const {getProduct} = useSelector(state => state.ProductReducer)
    const {customerUser} = useSelector(state => state.CustomerReducers)
    console.log(customerUser);
    return (
        <>
            <div className="flex flex-col  items-center justify-center max-sm:mb-9 border-2 border-orange-500 sm:w-5/6 m-auto pb-10 ">
                <h1 className=" m-auto bg-gradient-to-r from-orange-300 to-orange-500 flex items-center justify-center text-white text-2xl font-bold uppercase w-full max-sm:my-[20px] ">
                    Admin dashboard
                    
                </h1>

                <div className="flex   justify-between w-full mr-6 py-2 mb-2 max-sm:text-sm max-sm:ml-32 max-sm:w-4/6 max-sm:-mt-6 p-3 
                max-sm:flex-col
                ">
                    <button className=" px-2 py-2 rounded  uppercase font-extrabold bg-green-700 text-white drop-shadow-md shadow-gray-600 max-sm:px-1 max-sm:py-1 max-sm:font-bold"
                    onClick={()=>navigate('/admin/order')}
                    >
                        Order Request {
                        getProduct.Success && getProduct.data.length
                    }

                    </button>
                    
                <section className={numberUser>2?"hidden":"my-2 "}>
                        <ShareLink/>
                    </section>
                </div>

                <div className="flex flex-col
                max-sm:flex-col -mt-16 max-sm:-ml-11 max-sm:-mt-1 max-lg:mt-4
                ">
                    <div className="flex flex-row p-2 max-sm:flex-col">
                        <div
                            className="flex flex-col border-[2px] border-black p-7 mt-[10px] group mx-2 hover:bg-amber-200 rounded transition
                    max-sm:w-[190px] max-sm:h-[170px]
                    ">

                            <img src={addUser} height={80} width={80}
                                 className="border-[3px] border-black rounded-full m-[10px] h-[130px] w-[130px] p-4 bg-gray-200 cursor-pointer group-hover:bg-white group-hover:border-blue-800 max-sm:h-[90px] max-sm:w-[90px] max-sm:m-auto"
                                 alt={"error"}
                                 onClick={() => navigate("/admin/newrequest")}
                            />
                            <p className="m-auto font-bold text-[20px] group-hover:text-blue-700
                    max-sm:text-[17px]
                    ">
                                New Request
                            </p>
                        </div>


                        <div
                            className="flex flex-col border-[2px] border-black p-7 mt-[10px] group mx-2 hover:bg-amber-200  rounded transition
                        max-sm:w-[190px] max-sm:h-[170px]
                        ">

                            <img src={payment} height={80} width={80}
                                 className="border-[3px] border-black rounded-full m-[10px] h-[130px] w-[130px] p-4 bg-gray-200 cursor-pointer group-hover:bg-white group-hover:border-blue-800 max-sm:h-[90px] max-sm:w-[90px] max-sm:m-auto"
                                 alt={"error"}
                                 onClick={() => navigate("/admin/paymentrequest")}
                            />
                            <p className="m-auto font-bold text-[20px] group-hover:text-blue-700
                        max-sm:text-[17px]  max-sm:w-[180px]
                    ">
                                Payment Request
                            </p>
                        </div>

                        <div
                            className="flex flex-col border-[2px] border-black p-7 mt-[10px] group mx-2 hover:bg-amber-200  rounded transition
                        max-sm:w-[190px] max-sm:h-[170px]
                        ">

                            <img src={ads} height={80} width={80}
                                 className="border-[3px] border-black rounded-full m-[10px] h-[130px] w-[130px] p-4 bg-gray-200 cursor-pointer group-hover:bg-white group-hover:border-blue-800
                             max-sm:h-[90px] max-sm:w-[90px] max-sm:m-auto block"
                                 alt={"error"}
                                 onClick={() => navigate("/admin/adds")}
                            />
                            <p className="m-auto font-bold text-[20px] group-hover:text-blue-700 uppercase
                        max-sm:text-[17px]
                    ">
                                ads
                            </p>
                        </div>
                    </div>

                    <div className=" flex p-3 max-sm:flex-col flex-row">
                        <div
                            className="flex flex-col border-[2px] border-black p-7 mt-[10px] group mx-2 hover:bg-amber-200  rounded transition
                        max-sm:w-[190px] max-sm:h-[170px]
                        ">

                            <img src={userCustomer} height={80} width={80}
                                 className="border-[3px] border-black rounded-full m-[10px] h-[130px] w-[130px] p-4 bg-gray-200 cursor-pointer group-hover:bg-white group-hover:border-blue-800
                             max-sm:h-[90px] max-sm:w-[90px] max-sm:m-auto"
                                 alt={"error"}
                                 onClick={() => navigate("/admin/customer")}
                            />
                            <p className="m-auto font-bold text-[20px] group-hover:text-blue-700 capitalize
                        max-sm:text-[17px]
                    ">
                                Users
                            </p>
                        </div>

                        <div
                            className="flex flex-col border-[2px] border-black p-7 mt-[10px] group mx-2 hover:bg-amber-200  rounded transition
                        max-sm:w-[190px] max-sm:h-[170px]
                        ">

                            <img src={blockedUser} height={80} width={80}
                                 className="border-[3px] border-black rounded-full m-[10px] h-[130px] w-[130px] p-4 bg-gray-200 cursor-pointer group-hover:bg-white group-hover:border-blue-800
                             max-sm:h-[90px] max-sm:w-[90px] max-sm:m-auto"
                                 alt={"error"}
                                 onClick={() => navigate("/admin/blockeduser")}
                            />
                            <p className="m-auto font-bold text-[20px] group-hover:text-blue-700 capitalize
                        max-sm:text-[17px]
                    ">
                                Blocked users
                            </p>
                        </div>

                        <div
                            className="flex flex-col border-[2px] border-black p-7 mt-[10px] group mx-2 hover:bg-amber-200  rounded transition
                        max-sm:w-[190px] max-sm:h-[170px]
                        ">

                            <img src={monthly_join} height={80} width={80}
                                 className="border-[3px] border-black rounded-full m-[10px] h-[130px] w-[130px] p-4 bg-gray-200 cursor-pointer group-hover:bg-white group-hover:border-blue-800
                             max-sm:h-[90px] max-sm:w-[90px] max-sm:m-auto"
                                 alt={"error"}
                                 onClick={() => navigate("/admin/monthly-join")}
                            />
                            <p className="m-auto font-bold text-[20px] group-hover:text-blue-700 capitalize
                        max-sm:text-[17px]
                    ">
                                Monthly Join
                            </p>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Dashboard