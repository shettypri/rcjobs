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
            <div className="flex flex-col m-auto items-center">
                {/*Heading*/}
                <div className="bg-gray-500 flex flex-row w-1/2 items-center m-auto mt-8 rounded p-3 ">
                    <p className="bg-gray-700 inline text-5xl font-bold text-white w-[80px] rounded-2xl px-4 pb-2 cursor-pointer rotate-180 hover:bg-gray-950"
                       onClick={() => navigate("/admin/dashboard")}
                    >
                        &#10132;
                    </p>
                    <p className="inline text-white font-bold uppercase m-auto text-xl">
                        New Request
                    </p>
                </div>

                <div>
                    <table className="w-[450px] border border-gray-700 mt-8">
                        <tr className="m-auto w-full items-center border border-gray-700">
                            <th className="m-auto items-center border border-gray-700 bg-amber-200">sl no</th>
                            <th className="m-auto items-center border border-gray-700 bg-amber-200">Name</th>
                            <th className="m-auto items-center border border-gray-700 bg-amber-200">Response</th>
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
