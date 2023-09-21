import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { isLoginReducers } from "../../App/Slice/userSlice.js";
import { useNavigate } from "react-router-dom";
import { cashBackRequestReducers, walletReducers } from "../../App/Slice/CashBackSlice.js";
import Google_Ads from "../Google_Ads/Google_Ads.jsx";

const Withdrawal = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showWithDraWal, setShowWithDraWal] = useState(true);
    const [withdrawAmount, setWithdrawAmount] = useState("");


    const { error, data } = useSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(walletReducers(data.id))
    }, []);


    const { walletData, cashBack } = useSelector(state => state.CashBackReducers)
    // const handleFinalData = (id)=>{dispatch(isLoginReducers(id))}
    const handleWithdrwal = (id, amount) => {
        const dataWithdrwal = {
            id: id,
            amount: amount
        }
        dispatch(cashBackRequestReducers(dataWithdrwal))
        // dispatch(walletReducers(id))

        // handleFinalData(id)

    }
    return (
        <>
            <div className="flex flex-row w-full justify-around max-sm:flex-col">

                <div className="w-1/6  flex flex-col max-sm:flex-col">
                    <div className="w-full h-1 flex flex-row mt-4">
                        <div className="block w-full mx-1">
                            <Google_Ads />
                        </div>
                        <div className="block w-full mx-1 max-sm:hidden">
                            <Google_Ads />
                        </div>
                    </div>
                </div>

                <div className="w-3/6 flex flex-col h-3/5 max-sm:w-full">
                    <div className=" w-5/6 mx-auto mt-2 border border-black p-2 h-2/5
            max-sm:w-full max-sm:px-3 max-sm:rounded mb-10">
                        <div className="flex flex-col bg-gray-800 font-mono text-2xl">
                            <div className="p-4 flex flex-row ">
                                <div className="flex flex-col">
                                    <label
                                        className="text-2xl capitalize text-white font-bold mx-auto drop-shadow-xl py-2 px-2 mt-4
                                max-sm:text-xl
                                "> {walletData.data.name}</label>
                                    <label
                                        className="text-2xl text-white font-bold mx-auto drop-shadow-xl py-2 px-2 mt-4
                                max-sm:text-xl
                                "> Total
                                        Amount</label>
                                </div>
                                <div className="mx-auto h-1/2 mt-4">
                                    <label
                                        className="text-2xl text-white font-bold mx-auto drop-shadow-xl py-8 px-9  border-2 border-white rounded-full shadow shadow-white flex items-center justify-center
                            max-sm:px-4 max-sm:py-5
                            ">
                                        {walletData.data.wallet}</label></div>

                            </div>
                        </div>

                        <div className="flex flex-row justify-around ">
                            <label className="px-2 py-2 mt-1 mx-auto uppercase
                    max-sm:text-[15px]
                    ">No. of new Referred </label>
                            <label className="px-2 py-2 mt-1 mx-auto uppercase
                    max-sm:text-[15px]
                    ">{walletData.data.referred}</label>
                        </div>

                        <div className="flex flex-row justify-around ">
                            <label className="px-2 py-2 mt-1 mx-auto uppercase max-sm:text-[15px]">all Reference
                                Amount</label>
                            <label className="px-2 py-2 mt-1 mx-auto uppercase max-sm:text-[15px]">
                                {walletData.data.total_referred * 200}
                            </label>
                        </div>
                        <div className="bg-gray-800 py-4 flex rounded">
                            <label className="mx-auto text-white text-2xl max-sm:text-[15px] ">
                                Wallet Amount
                            </label>

                            <button className="text-white border-2 border-white mr-4 px-4 rounded-lg uppercase cursor-pointer hover:bg-white hover:text-gray-600 font-extrabold

                    max-sm:text-[15px]

                    "
                                onClick={() => setShowWithDraWal(false)}
                            >
                                Withdraw Amount
                            </button>
                        </div>
                        {
                            showWithDraWal ? (
                                <div className="py-2">
                                    <div className="flex flex-row justify-around  bg-blue-200">
                                        <label className="px-2 py-2 mt-1 mx-auto uppercase
                                  max-sm:text-[15px]
                                "> Ads Wallet</label>
                                        <label className="px-2 py-2 mt-1 mx-auto uppercase
                                  max-sm:text-[15px]
                                ">
                                            {
                                                walletData.data.referred > 0 ?
                                                    walletData.data.wallet > walletData.data.referred * 200 ? (walletData.data.wallet - walletData.data.referred * 200) :
                                                        (walletData.data.referred * 200 - walletData.data.wallet) : walletData.data.wallet
                                            }
                                        </label>
                                    </div>

                                    <div className="flex flex-row justify-around  bg-blue-200">
                                        <label className="px-2 py-2 mt-1 mx-auto uppercase
                                  max-sm:text-[15px]
                                "> Withdrawal Reference Amount Wallet</label>
                                        <label className="px-2 py-2 mt-1 mx-auto uppercase
                                  max-sm:text-[15px]
                                ">
                                            {
                                                walletData.data.referred * 200
                                            }
                                        </label>
                                    </div>
                                    <div className="flex flex-row justify-around  bg-blue-200">
                                        <label className="ppx-2 py-2 mt-1 mx-auto uppercase
                                  max-sm:text-[15px]
                                "> Total Amount Wallet</label>
                                        <label className="px-2 py-2 mt-1 mx-auto uppercasee
                                  max-sm:text-[15px]
                                ">
                                            {
                                                walletData.data.wallet
                                            }
                                        </label>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className=" my-2 py-4">
                                        <div className="flex flex-row justify-around ">
                                            <label className="px-2 py-2 mt-1 mx-auto uppercase
                                      max-sm:text-[14px] max-sm:mt-0
                                    "> Total Amount Wallet</label>
                                            <label className="px-2 py-2 mt-1 mx-auto uppercasee
                                      max-sm:text-[15px]
                                    ">
                                                {walletData.data.wallet}
                                            </label>
                                        </div>

                                        {
                                            walletData.data.isWithdrawing ? (
                                                <div className="flex mx-auto">
                                                    <label className="text-red-600 font-bold px-24 py-4
                                            max-sm:text-[15px] max-sm:px-4
                                            ">
                                                        Withdrawal request on process once is the request completed you can
                                                        withdrawal again ...
                                                    </label>
                                                </div>
                                            ) : (
                                                <>
                                                    {
                                                        cashBack.Success ? (
                                                            <>
                                                                <div className="flex py-4">
                                                                    <label className="mx-auto bg-green-200 text-green-700 uppercase px-4 py-4 border-2 border-green-700 rounded
                                                            max-sm:text-[16px]
                                                            ">
                                                                        Withdrawal Request Successfully submitted
                                                                    </label>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className="flex justify-around py-2
                                                        max-sm:text-[15px]
                                                        ">
                                                                    <lable className="ml-10">
                                                                        Enter the Amount
                                                                    </lable>
                                                                    <input
                                                                        className="border border-black w-1/3 py-2
                                                                 max-sm:text-[15px] max-sm:py-1 max-sm:rounded
                                                                "
                                                                        type={"text"}
                                                                        pattern="[0-9]*"
                                                                        value={withdrawAmount}
                                                                        onChange={(e) => {

                                                                            const regex = /^[0-9\b]+$/;
                                                                            if (e.target.value === "" || regex.test(e.target.value)) {
                                                                                setWithdrawAmount(e.target.value);
                                                                            }
                                                                        }
                                                                        }
                                                                    />
                                                                </div>
                                                                {
                                                                    (withdrawAmount > walletData.data.wallet) &&
                                                                    <div className="flex">
                                                                        <lable className="mx-auto font-bold text-red-600">
                                                                            Entered Amount more than the wallet amount
                                                                        </lable>
                                                                    </div>
                                                                }
                                                                <div>
                                                                    {
                                                                        walletData.data.wallet < 250 ?
                                                                            (<div className="flex">
                                                                                <lable
                                                                                    className="mx-auto font-bold text-red-600">
                                                                                    total wallet should have more than 250
                                                                                    for withdrawal
                                                                                </lable>
                                                                            </div>) : (
                                                                                <div className="flex justify-around py-2 mb-2">
                                                                                    <button
                                                                                        className="bg-red-600 px-14 py-2 text-white font-bold rounded-lg  uppercase
                                                                                max-sm:px-8 max-sm:py-2 max-sm:text-[15px]
                                                                                "
                                                                                        onClick={() => setShowWithDraWal(true)}>
                                                                                        cancel
                                                                                    </button>
                                                                                    {(withdrawAmount <= walletData.data.wallet) &&
                                                                                        <button
                                                                                            className="bg-green-600 px-14 py-2 text-white font-bold rounded-lg  uppercase
                                                                                    max-sm:px-8 max-sm:py-2 max-sm:text-[15px]
                                                                                    "
                                                                                            onClick={
                                                                                                () =>
                                                                                                    handleWithdrwal(walletData.data.id, withdrawAmount)}
                                                                                        >
                                                                                            Withdraw
                                                                                        </button>
                                                                                    }
                                                                                </div>
                                                                            )

                                                                    }
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                </>


                                            )
                                        }


                                    </div>
                                </>
                            )
                        }
                        <div>
                            <button className="bg-green-700 px-5 py-3 my-2 flex mx-auto rounded-lg text-white font-bold" 
                            onClick={()=>{
                                dispatch(isLoginReducers(data.id))
                                navigate("/user/transcation")
                            }
                            }
                            >
                                View all Earnings
                            </button>
                        </div>

                    </div>




                </div>

                <div className="w-1/6  flex flex-col">
                    <div className="w-full h-1 flex flex-row mt-4">
                        <div className="block w-full mx-1">
                            <Google_Ads />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Withdrawal;