import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {newUserReducers} from "../../App/Slice/adminUserSlice.js";
import New_user from "./New_user.jsx";

const New_Request = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(newUserReducers())
    }, []);
    const {newUsers} = useSelector(state => state.adminUserReducers)
    // console.log(newUsers.data)
    return (
        <>
            <div className="mt-5 flex flex-col w-1/2
            border-2 border-black shadow-gray-600 shadow-xl
            max-sm:w-full mb-3 justify-center mx-auto
            ">
                {/*Heading*/}
                <div className="flex justify-between py-4 border-2 border-black rounded
                bg-gray-300 shadow-xl shadow-blue-100

                ">
                    <p className="rotate-180 text-4xl font-bold text-black ml-4
                    cursor-pointer border-2 border-black px-10 py-2 rounded-full
                    max-sm:text-2xl max-sm:px-4 max-sm:py-0 max-sm:h-10
                    "
                       onClick={() => navigate("/admin/dashboard")}
                    >
                        &#10132;
                    </p>
                    <p className="text-2xl font-bold text-black mr-48
                    max-sm:mr-10
                    ">
                        New Request
                    </p>
                </div>

                <div>
                    <table className="w-full mt-4 border">
                        <tr className="border-2 border-black">
                            <th className=" h-10 max-sm:w-[50px]">sl no</th>
                            <th className="border-2 border-black w-1/3 h-10">Name</th>
                            <th className="border-2 border-black w-1/3 h-10">Response</th>
                        </tr>
                        {
                            newUsers.data.length !== 0 && (
                                newUsers.data.map((userList, index) => {
                                    // console.log("user list is", userList)
                                    return (<>
                                            <New_user userData={userList} indexValue={index} key={index}/>
                                        </>
                                    )
                                })
                            )
                        }

                    </table>
                </div>
            </div>
        </>
    )
}

export default New_Request
