import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCustomerReducers} from "../../App/Slice/AdminCustomerSlice.js";
import {withdrawalDataReducers} from "../../App/Slice/WithdrawalSlice.js";
import Select from 'react-select';


const MonthlyJoining = () => {
    const dispatch = useDispatch()
    const todayDate = new Date()
    const [totalAmount, setTotalAmount] = useState(0)
    const [withdrwalDataArray, setWithdrwalDataArray] = useState("");
    const [selectedMonth, setSelectedMonth] = useState(todayDate.getMonth())
    const [selectedYear, setSelectedYear] = useState(todayDate.getFullYear());
    const [joiningUser, setJoiningUser] = useState("")

    // useEffect(() => {
    //     dispatch(getCustomerReducers())
    //     dispatch(withdrawalDataReducers())
    // }, []);


    const {JoinCustomerState} = useSelector(state => state.CustomerReducers)
    const {withdrawalStoreData} = useSelector(state => state.withdrawalReducer)
    // console.log("dates",withdrawalStoreData.data)
    let filterData="";



    const reducedArray = (arrayData) => {
        // console.log(arrayData)
        let resultArray = arrayData.reduce((prev, current) => {
            return prev + current.withdrawalAmount
        }, 0)
        setTotalAmount(resultArray)
        setWithdrwalDataArray(arrayData)
        // console.log("hello", totalAmount)
    }

    JoinCustomerState.success && (
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            filterData = JoinCustomerState.data.filter(
                customerData => customerData.Joining_Month === selectedMonth && customerData.Joining_year === selectedYear
            ),
                setJoiningUser(filterData)
        }, [])
    )

    let withdrwalData;
    withdrawalStoreData.Success && (
        useEffect(() => {
            withdrwalData = withdrawalStoreData.data.filter(
                withDrawlInfo => withDrawlInfo.payment_Month === selectedMonth && withDrawlInfo.payment_year === selectedYear
            )
            reducedArray(withdrwalData)
        }, [])
        // console.log("AGAIN",withdrwalData)

    )
    // console.log("customerdata",filterData)
    // console.log("withdrwalData",withdrwalData)
    const monthOption = [
        {value: 0, label: 'January'}, {value: 1, label: 'February'},
        {value: 2, label: 'March'}, {value: 3, label: 'April'},
        {value: 4, label: 'May'}, {value: 5, label: 'June '},
        {value: 6, label: 'July'}, {value: 7, label: 'August'},
        {value: 8, label: 'September'}, {value: 9, label: 'October'},
        {value: 10, label: 'November'}, {value: 11, label: 'December'},
    ]

    const yearOption = [
        {value: 2023, label: '2023'}, {value: 2024, label: '2024'},
        {value: 2025, label: '2025'}, {value: 2026, label: '2026'},
        {value: 2027, label: '2027'}, {value: 2028, label: '2028'},
        {value: 2029, label: '2029'}, {value: 2030, label: '2030'},
        {value: 2031, label: '2031'},
    ]

    const fetchDataByfilter = () => {
        // console.log("month", selectedMonth.value)
        // console.log("year", selectedYear)
        setWithdrwalDataArray("")
        setJoiningUser("")
        filterData = JoinCustomerState.data.filter(
            customerData => customerData.Joining_Month === selectedMonth.value && customerData.Joining_year === selectedYear.value
        )
        setJoiningUser(filterData)
        withdrwalData = withdrawalStoreData.data.filter(
            withDrawlInfo => withDrawlInfo.payment_Month === selectedMonth.value && withDrawlInfo.payment_year === selectedYear.value
        )

            reducedArray(withdrwalData)

        // console.log("data of fiterDAta",joiningUser)

        console.log("HKBJHGF",joiningUser.length)
        // console.log("withdrawal Data",withdrwalData)

    }
    const handleMonthChange = (selectedOption) => {
        setSelectedMonth(selectedOption)
    }
    const handleChangeYear = (selectedYear) => {
        setSelectedYear(selectedYear)
    }

    return (
        <>
            <div className="flex flex-col">

                <div className="w-3/4 text-black flex flex-row justify-center mx-auto my-1">
                    <div className="w-1/2 ">
                        <Select
                            defaultValue={selectedMonth}
                            onChange={handleMonthChange}
                            options={monthOption}
                        />
                    </div>

                    <div className="w-1/2">
                        <Select
                            defaultValue={selectedYear}
                            onChange={handleChangeYear}
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
                        {filterData.length && console.log(filterData)}
                        <label className="text-white text-3xl p-8">Number of
                            users &nbsp;{ (joiningUser.length > 0) ? joiningUser.length : 0}</label>
                        <label
                            className="text-white text-3xl border-2 rounded-full p-8"> {(joiningUser.length > 0) ? joiningUser.length *1000 : 0}</label>
                    </div>

                    <div
                        className="w-full flex flex-row justify-around py-4  border-2 border-white rounded shadow shadow-amber-500">
                        <section className="text-white text-3xl uppercase ">
                            The Withdrawal amount
                        </section>

                    </div>

                    <div className="flex flex-row justify-around py-4 ">
                        <label className="text-white text-3xl p-8">
                            The withdrawal in this month
                        </label>
                        <label
                            className="text-white text-3xl border-2 rounded-full p-8"> {totalAmount}</label>
                    </div>
                    <div className="w-full ">
                        <table className="text-white w-full border-2 border-white px-2">
                            <thead>
                            <tr>
                                <th className="border-2 border-white py-1 capitalize">SI NO</th>
                                <th className="border-2 border-white py-1 capitalize">Name</th>
                                <th className="border-2 border-white py-1 capitalize">Phone</th>
                                <th className="border-2 border-white py-1 capitalize">Amount</th>
                            </tr>
                            </thead>

                            <tbody className="">
                            {
                                (withdrwalDataArray.length > 0) && withdrwalDataArray.map((newUsers, index) => {
                                    return (
                                        <tr key={index}>
                                            <th className="border-2 border-white py-1 capitalize">{index + 1}</th>
                                            <th className="border-2 border-white py-1 capitalize">{newUsers.name}</th>
                                            <th className="border-2 border-white py-1 capitalize">{newUsers.phone}</th>
                                            <th className="border-2 border-white py-1 capitalize">{newUsers.withdrawalAmount}</th>
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