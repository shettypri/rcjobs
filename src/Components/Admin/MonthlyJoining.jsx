import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCustomerReducers} from "../../App/Slice/AdminCustomerSlice.js";
import {withdrawalDataReducers} from "../../App/Slice/WithdrawalSlice.js";
import Select from 'react-select';


const MonthlyJoining = () => {
    const dispatch = useDispatch()
    const todayDate = new Date()
    const [selectedMonth, setSelectedMonth] = useState(todayDate.getMonth())
    const [selectedYear, setSelectedYear] = useState(todayDate.getFullYear());

    useEffect(() => {
        dispatch(getCustomerReducers())
        dispatch(withdrawalDataReducers())
    }, []);
    
    
    const {customerUser} = useSelector(state => state.CustomerReducers)
    const {withdrawalStoreData} = useSelector(state => state.withdrawalReducer)
    // console.log("HELLO IAHOXOD",customerUser)
    console.log("dates",withdrawalStoreData.data)
    let filterData;
    customerUser.success &&(
    filterData = customerUser.data.filter(
        customerData => customerData.payment_Month === (new Date().toUTCString().slice(5, 16).split(" ")[1])
    )
    )
    let withdrwalData;
    withdrawalStoreData.Success &&(
        withdrwalData = withdrawalStoreData.data.filter(
            withDrawlInfo => withDrawlInfo.payment_Month === selectedMonth && withDrawlInfo.payment_year === selectedYear
        )
    )
    console.log("customerdata",filterData)
    console.log("withdrwalData",withdrwalData)
    const monthOption =[
        {value: 0, label: 'January'},
        {value: 1, label: 'February'},
        {value: 2, label: 'March'},
        {value: 3, label: 'April'},
        {value: 4, label: 'May'},
        {value: 5, label: 'June '},
        {value: 6, label: 'July'},
        {value: 7, label: 'August'},
        {value: 8, label: 'September'},
        {value: 9, label: 'October'},
        {value: 10, label: 'November'},
        {value: 11, label: 'December'},
    ]

    const yearOption =[
        {value: 2023, label: '2023'},
        {value: 2024, label: '2024'},
        {value: 2025, label: '2025'},
        {value: 2026, label: '2026'},
        {value: 2027, label: '2027'},
        {value: 2028, label: '2028'},
        {value: 2029, label: '2029'},
        {value: 2030, label: '2030'},
        {value: 2031, label: '2031'},
    ]

    const fetchDataByfilter = ()=>{
        withdrwalData = withdrawalStoreData.data.filter(
            withDrawlInfo => withDrawlInfo.payment_Month === selectedMonth && withDrawlInfo.payment_year === selectedYear
        )
    }

    return (
        <>
            <div className="flex flex-col">

                <div className="w-3/4 text-black flex flex-row justify-center mx-auto my-1" >
                    <div className="w-1/2 ">
                        <Select
                            defaultValue={selectedMonth}
                            onChange={setSelectedMonth}
                            options={monthOption}
                        />
                    </div>

                    <div className="w-1/2">
                        <Select
                            defaultValue={selectedYear}
                            onChange={setSelectedYear}
                            options={yearOption}
                            className="bg-green-600"
                        />
                    </div>

                </div>
                <div className="mt-4 w-1/4  flex mx-auto my-2">
                    <button className="bg-green-600 w-full py-2 border-2 border-black rounded
                    font-extrabold text-white uppercase
                    "
                    onClick={fetchDataByfilter}
                    >
                        Display
                    </button>

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