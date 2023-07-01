import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {walletPaymentRequestReducers, walletPaymentResponseReducers} from "../../App/Slice/adminPaymentSlice.js";

const Payment_request = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(walletPaymentRequestReducers())
    }, []);
    const navigate = useNavigate()
    const {paymentRequest} = useSelector(state => state.adminPaymentReducers)
    const handlePayment = (id,wallet)=>{
        console.log("onclick",id)
        const paymentInfo ={
            id:id,
            wallet:wallet,
            isWithdrawing:false,
            withdrawalAmount:0,
        }
        dispatch(walletPaymentResponseReducers(paymentInfo))
        dispatch(walletPaymentRequestReducers())
    }
    return (
        <>
            <div className="flex flex-col items-center m-auto mt-4 w-full">
               <div className="border-2 border-red-700 rounded bg-yellow-600 flex flex-row w-1/2  m-auto items-center justify-around ">
                   <p className="bg-yellow-700 inline text-5xl font-bold text-white w-[80px] rounded-2xl px-4 pb-2 cursor-pointer
                    rotate-180 hover:bg-gray-950"
                      onClick={() => navigate("/admin/dashboard")}
                   >
                       &#10132;
                   </p>
                   <h1 className="font-bold text-white uppercase ml-4">
                        Payment request
                   </h1>
               </div>

                <div className="mb-4 w-1/2  border border-red-700">
                    <table className="w-full">
                        <tr className="border border-b-black  ">
                            <th className="mx-2 px-6 font-bold uppercase bg-gray-200 py-3 ">
                                SL NO
                            </th>
                            <th className="mx-2 px-6 font-bold uppercase bg-gray-200 py-3">
                                name
                            </th>
                            <th className="mx-2 px-6 font-bold uppercase bg-gray-200 py-3">
                                Amount
                            </th>
                            <th className="mx-2 px-6 font-bold uppercase bg-gray-200 py-3">
                                Response
                            </th>
                        </tr>
                        {
                            paymentRequest.Success &&
                            (
                                paymentRequest.data.map((requestData,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td className="mx-2 px-6 py-4">
                                                {index + 1}
                                            </td>
                                            <td className="mx-2 px-6">
                                                {requestData.name}
                                            </td>
                                            <td className="mx-2 px-6">
                                                {requestData.withdrawalAmount}
                                            </td>
                                            <td className="mx-2 px-6  group">
                                                <button className="bg-green-500 text-white font-bold uppercase px-10 py-2 rounded-full border-2 border-gray-700 group-hover:bg-white group-hover:text-green-500"
                                                        onClick={()=>
                                                            handlePayment(requestData.id,(requestData.wallet - requestData.withdrawalAmount))}
                                                >
                                                    Paid
                                                </button>
                                            </td>

                                        </tr>
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

export default Payment_request