import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {blockCustomerReducers, getCustomerReducers} from "../../App/Slice/AdminCustomerSlice.js";

const UserCustomer = () => {
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getCustomerReducers())
    // }, []);
    const {customerUser} = useSelector(state => state.CustomerReducers)

    // console.log(customerUser)

    const confirmToBlockUser = (_id)=>{
        dispatch(blockCustomerReducers(_id))
        dispatch(getCustomerReducers())
    }
    const toBlockUserBtn = (userData) =>{
        const confirmBox = window.confirm(
            `Do you really want to delete the user ${userData.name}`
        )
        if (confirmBox === true) {
            confirmToBlockUser(userData.id)
        }
    }
    return (
        <>
            <div>
                <div>

                </div>
                <div>
                    <table className="w-5/6  border-2 border-black">
                        <thead>
                        <tr>
                            <th className="py-2 capitalize border-2 border-black ">SI NO</th>
                            <th className="py-2 capitalize border-2 border-black ">Name</th>
                            <th className="py-2 capitalize border-2 border-black ">Address</th>
                            <th className="py-2 capitalize border-2 border-black ">Phone No</th>
                            <th className="py-2 capitalize border-2 border-black ">Action</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            customerUser.data.map((customerDetails, index) => {
                                return (
                                    <tr key={index} className="">
                                        <th className="py-2 capitalize border-2 border-black">{index + 1}</th>
                                        <th className="py-2 capitalize border-2 border-black">{customerDetails.name}</th>
                                        <th className="py-2 capitalize border-2 border-black">{customerDetails.phone}</th>
                                        <th className="py-2 capitalize border-2 border-black">{customerDetails.Address}</th>
                                        <th className="py-2 capitalize border-2 border-black">
                                            <button className=" rounded-lg px-10 py-1 bg-red-600 text-white hover:bg-red-700 "
                                            onClick={()=>toBlockUserBtn(customerDetails)}
                                            >
                                                Block Customer
                                            </button>
                                        </th>
                                    </tr>
                                )
                            })
                        }


                        </tbody>
                    </table>
                </div>
                <div></div>
            </div>
        </>

    );
}

export default UserCustomer;