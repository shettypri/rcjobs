import  {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {unblockCustomerListReducers, unblockCustomerReducer} from "../../App/Slice/AdminCustomerSlice.js";


function BlockedUser(){
    const  dispatch=useDispatch()
    useEffect(() => {
        dispatch(unblockCustomerListReducers())
        // dispatch(unblockCustomerListReducers())
        // dispatch(getCustomerReducers())

    }, []);

    const {UnblockedUserState} = useSelector(state => state.CustomerReducers)
    // console.log(UnblockedUserState)
    const confirmUnblockUser=(_id)=>{
        dispatch(unblockCustomerReducer(_id))
        dispatch(unblockCustomerListReducers())
    }
    const handleUnblock=(userData)=>{
        const confirmBox=window.confirm(
            `Do you really want to Unblock the user ${userData.name}`
        )
        if (confirmBox===true){
            confirmUnblockUser(userData.id)
        }
    }

    return (
        <>
            <div className="overflow-scroll">
                <table
                    className="w-3/4 border-black border mt-4 ml-36 bg-gray-400 px-4 py-6 rounded-bl">
                    <thead>
                    <tr className=" border-b-2  border-black">
                        <th className="px-4 capitalize py-3 ">SL No</th>
                        <th className="px-4 capitalize py-3">Name</th>
                        <th className="px-4 capitalize py-3">phone</th>
                        <th className="px-4 capitalize py-3">address</th>
                        <th className="px-4 capitalize py-3">action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {UnblockedUserState.data.length !== 0 &&
                        UnblockedUserState.data.map((blockedUser, index) => {
                            return (
                                <tr key={index} className="">
                                    <th className="px-4 capitalize  py-2">{index + 1}</th>
                                    <th className="px-4 capitalize py-2">
                                        {blockedUser.name}
                                    </th>
                                    <th className="px-4 capitalize py-2">
                                        {blockedUser.phone}
                                    </th>
                                    <th className="px-4 capitalize py-2">
                                        {blockedUser.Address}
                                    </th>
                                    <th className="px-4  py-2">
                                        <button
                                            className="bg-black text-white rounded px-4 py-1 hover:bg-white hover:text-black"
                                            onClick={() => handleUnblock(blockedUser)}>UNBLOCK
                                        </button>
                                    </th>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default BlockedUser;