import React, {useState} from 'react';
import Bank from "./Bank.jsx";
import Upi from "./Upi.jsx";
import {useLocation} from "react-router-dom";

const PaymentInfo = () => {
    const [showBankDetails, setShowBankDetails] = useState(true);
    const [selectedOption, setSelectedOption] = useState("Bank Payment");

    const location = useLocation()
    // console.log(location.pathname)
    const handleOptionChange = (event)=>{
        setSelectedOption(event.target.value);
    }
    return (
        <>
            <div>

                <div className="flex max-sm:w-full justify-center items-center text-center">
                    <select value={selectedOption}
                            className="w-full py-3 border-2 border-black uppercase mx-auto flex text-center"
                            onChange={handleOptionChange}
                    >
                        <option className="uppercase text-center" value="Bank Payment"
                        >Bank Payment
                        </option>
                        <option className="uppercase  text-center"  value="UPI"
                        >UPI
                        </option>
                    </select>
                </div>

                <div>
                    {
                        selectedOption === "Bank Payment" ? <Bank/> : <Upi/>
                    }
                </div>

                {
                    location.pathname === "/user/register" &&(
                        <div className="py-3 flex bg-gray-200">
                            <label className=" font-bold capitalize mx-auto text-red-600"> please pay &#8377; 1000/- as Registration Fees</label>
                        </div>
                    )
                }


            </div>
        </>
    );
}

export default PaymentInfo;