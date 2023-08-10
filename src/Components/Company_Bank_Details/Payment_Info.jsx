import React, {useState} from 'react';
import Bank from "./Bank.jsx";
import Upi from "./Upi.jsx";

const PaymentInfo = () => {
    const [showBankDetails, setShowBankDetails] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event)=>{
        setSelectedOption(event.target.value);
    }
    return (
        <>
            <div>

                <div className="flex max-sm:w-full">
                    <select value={selectedOption}
                            className="w-full py-3 border-2 border-black uppercase mx-auto"
                            onChange={handleOptionChange}
                    >
                        <option className="uppercase" value="Bank Payment"
                        >Bank Payment
                        </option>
                        <option className="uppercase"  value="UPI"
                        >UPI
                        </option>
                    </select>
                </div>

                <div>
                    {
                        selectedOption === "Bank Payment" ? <Bank/> : <Upi/>
                    }
                </div>

                <div className="py-3 flex bg-gray-200">
                    <label className=" font-bold capitalize mx-auto text-red-600"> please pay &#8377; 1000/- as Registration Fees</label>
                </div>
            </div>
        </>
    );
}

export default PaymentInfo;