import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {walletPaymentRequestReducers, walletPaymentResponseReducers} from "../../App/Slice/adminPaymentSlice.js";

const PaymentDetails = (props) => {
    const location = useLocation();
    console.log(location.state)
    const navigate = useNavigate()
    const data = location.state.requestData
    const dispatch = useDispatch()

    const {paymentResponse} = useSelector(state => state.adminPaymentReducers)
    const handlePayment = () => {
        const paymentInfo = {
            id: data.id,
            wallet: (data.wallet - data.withdrawalAmount),
            isWithdrawing: false,
            withdrawalAmount: 0,
        }
        dispatch(walletPaymentResponseReducers(paymentInfo))
    }
    console.log(paymentResponse)




    return (
        <>
            <div className="flex flex-col">
                <div className="bg-gray-800 px-4 py-4 ">
                    <label className="ml-10 font-bold text-2xl border border-white px-10 py-2 text-white cursor-pointer rounded
                    hover:bg-gray-600 transition
                    "
                           onClick={()=>{
                               dispatch(walletPaymentRequestReducers())
                               navigate("/admin/paymentrequest")
                           }}
                    >
                        Back
                    </label>
                </div>
                <div className="flex flex-row">
                    <table className=" w-1/2 ">
                        <tbody>
                        <tr className="px-4 py-4">
                            <td className="font-bold px-14 py-3 uppercase">name</td>
                            <td className="">{data.name}</td>
                        </tr>
                        <tr className="px-4 py-4">
                            <td className="font-bold px-14 py-3 uppercase">Phone</td>
                            <td className="">{data.phone}</td>
                        </tr>
                        <tr className="px-4 py-4">
                            <td className="font-bold px-14 py-3 uppercase">Wallet</td>
                            <td className="">{data.wallet}</td>
                        </tr>
                        <tr className="px-4 py-4">
                            <td className="font-bold px-14 py-3 uppercase">Withdrawal</td>
                            <td className="">{data.withdrawalAmount}</td>
                        </tr>
                        </tbody>
                    </table>
                    {/*left*/}
                    <table className="w-1/2 px-2">
                        <tbody>
                        <tr className="py-2">
                            <td className="px-10 py-3 uppercase font-bold"> Bank Name</td>
                            <td className="px-10 py-3 "> {data.Bank_name}</td>
                        </tr>
                        <tr className="py-2">
                            <td className="px-10 py-3 uppercase font-bold"> Branch of Bank</td>
                            <td className="px-10 py-3 "> {data.Branch}</td>
                        </tr>
                        <tr className="py-2">
                            <td className="px-10 py-3 uppercase font-bold"> ifsc Code</td>
                            <td className="px-10 py-3 "> {data.ifsc_code}</td>
                        </tr>
                        <tr className="py-2">
                            <td className="px-10 py-3 uppercase font-bold"> Account Holder Name</td>
                            <td className="px-10 py-3 "> {data.Account_name}</td>
                        </tr>
                        <tr className="py-2">
                            <td className="px-10 py-3 uppercase font-bold">Account Number</td>
                            <td className="px-10 py-3 "> {data.Account_no}</td>
                        </tr>
                        <tr className="bg-gray-200 rounded">
                            {
                                paymentResponse.Success?
                                    (
                                        <>
                                        <td colSpan={2} className="bg-green-300">
                                            <label className="text-2xl text-green-600">
                                                Payment Done Sucessfully
                                            </label>

                                        </td>
                                        </>
                                    ):(
                                        <>
                                            <td className="mt-4 py-10">
                                                <button
                                                    className=" mx-6 bg-red-700 px-16 py-2 rounded-full text-white uppercase border border-black font-extrabold"
                                                    onClick={
                                                        () => navigate("/admin/paymentrequest")
                                                    }
                                                >
                                                    Cancel
                                                </button>
                                            </td>
                                            <td className="mt-4 py-10">
                                                <button
                                                    className=" mx-6 bg-green-600 px-20 py-2 rounded-full text-white uppercase border border-black font-extrabold"
                                                    onClick={handlePayment}
                                                >
                                                    Paid
                                                </button>
                                            </td>
                                        </>
                                    )

                            }

                        </tr>
                        </tbody>
                    </table>


                </div>
            </div>

        </>

    );
}

export default PaymentDetails;