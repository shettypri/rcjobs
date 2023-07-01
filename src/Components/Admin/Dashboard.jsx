import addUser from "../../assets/Images/add_user.png"
import ads from "../../assets/Images/ads.png"
import payment from "../../assets/Images/payment.png"
import {useNavigate} from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex flex-col flex items-center justify-center max-sm:mb-9 border-2 border-orange-500 sm:w-1/2 m-auto pb-8">
                <h1 className="w-1/2 m-auto bg-gradient-to-r from-orange-300 to-orange-500 flex items-center justify-center text-white text-2xl font-bold uppercase w-full max-sm:my-[20px] ">
                    Admin dashboard
                </h1>

                <div className="flex flex-row max-sm:flex-col">
                <div
                    className="flex flex-col border-[2px] border-black p-7 mt-[10px] group mx-2 hover:bg-amber-200 rounded transition
                    max-sm:w-[170px] max-sm:h-[170px]
                    ">

                    <img src={addUser} height={80} width={80}
                         className="border-[3px] border-black rounded-full m-[10px] h-[130px] w-[130px] p-4 bg-gray-200 cursor-pointer group-hover:bg-white group-hover:border-blue-800 max-sm:h-[90px] max-sm:w-[90px] max-sm:m-auto"
                         alt={"error"}
                         onClick={()=>navigate("/admin/newrequest")}
                    />
                    <p className="m-auto font-bold text-[20px] group-hover:text-blue-700
                    max-sm:text-[17px]
                    ">
                        New Request
                    </p>
                </div>


                    <div
                        className="flex flex-col border-[2px] border-black p-7 mt-[10px] group mx-2 hover:bg-amber-200  rounded transition
                        max-sm:w-[170px] max-sm:h-[170px]
                        ">

                        <img src={payment} height={80} width={80}
                             className="border-[3px] border-black rounded-full m-[10px] h-[130px] w-[130px] p-4 bg-gray-200 cursor-pointer group-hover:bg-white group-hover:border-blue-800 max-sm:h-[90px] max-sm:w-[90px] max-sm:m-auto"
                             alt={"error"}
                             onClick={()=>navigate("/admin/paymentrequest")}
                        />
                        <p className="m-auto font-bold text-[20px] group-hover:text-blue-700
                        max-sm:text-[17px]  max-sm:w-[180px]
                    ">
                            Payment Request
                        </p>
                    </div>

                    <div
                        className="flex flex-col border-[2px] border-black p-7 mt-[10px] group mx-2 hover:bg-amber-200  rounded transition
                        max-sm:w-[170px] max-sm:h-[170px]
                        ">

                        <img src={ads} height={80} width={80}
                             className="border-[3px] border-black rounded-full m-[10px] h-[130px] w-[130px] p-4 bg-gray-200 cursor-pointer group-hover:bg-white group-hover:border-blue-800
                             max-sm:h-[90px] max-sm:w-[90px] max-sm:m-auto"
                             alt={"error"}
                             onClick={()=>navigate("/admin/adds")}
                        />
                        <p className="m-auto font-bold text-[20px] group-hover:text-blue-700
                        max-sm:text-[17px]
                    ">
                            Add ads
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard