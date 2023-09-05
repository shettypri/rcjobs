import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCustomerReducers} from "../../App/Slice/AdminCustomerSlice.js";
import {withdrawalDataReducers} from "../../App/Slice/WithdrawalSlice.js";


const MonthlyJoining = () => {
    const dispatch = useDispatch()

    const [selectMonth, setSelectMonth] = useState()
    
    useEffect(() => {
        dispatch(getCustomerReducers())
        dispatch(withdrawalDataReducers())
    }, []);
    
    
    const {customerUser} = useSelector(state => state.CustomerReducers)
    const {withdrawalStoreData} = useSelector(state => state.withdrawalReducer)
    console.log("HELLO IAHOXOD",customerUser)
    let filterData;
    customerUser.success &&(
    filterData = customerUser.data.filter(
        customerData => customerData.Joining_Month === (new Date().toUTCString().slice(5, 16).split(" ")[1])
    )
    )
    let withdrwalData;
    withdrawalStoreData.Success &&(
        withdrwalData = withdrawalStoreData.data.filter(
            withDrawlInfo => withDrawlInfo.payment_Month === new Date().getMonth()
        )
    )
    

    return (
        <>
            <div className="flex flex-col">

                <div className="w-full">
                    <label>
                        Pick a fruit:
                        <select name="selectedFruit">
                            <option value="apple">Apple</option>
                            <option value="banana">Banana</option>
                            <option value="orange">Orange</option>
                        </select>
                    </label>
                </div>
                <div className="flex flex-col bg-gray-800 w-3/4 mx-auto rounded">
                    <div className="flex flex-row justify-around py-4 ">
                        <label className="text-white text-3xl p-8">Number of
                            users &nbsp;{customerUser.data.length}</label>
                        <label
                            className="text-white text-3xl border-2 rounded-full p-8"> {(customerUser.data.length) * 1000}</label>
                    </div>

                    <div className="flex flex-row justify-around py-4 ">
                        <label className="text-white text-3xl p-8">Number of
                            users &nbsp;{customerUser.data.length}</label>
                        <label
                            className="text-white text-3xl border-2 rounded-full p-8"> {(customerUser.data.length) * 1000}</label>
                    </div>
                    <div className="w-full ">
                        <table className="text-white w-full border-2 border-white px-2">
                            <thead>
                            <tr>
                                <th>SI NO</th>
                                <th>Name</th>
                                <th>Phone</th>
                            </tr>
                            </thead>

                            <tbody className="">
                            {
                                customerUser.success && filterData.map((newUsers, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <th>{newUsers.name}</th>
                                            <th>{newUsers.phone}</th>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    );
}

export default MonthlyJoining;