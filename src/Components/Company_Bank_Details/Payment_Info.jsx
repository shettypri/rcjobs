import React, {useState} from 'react';
import Bank from "./Bank.jsx";
import Upi from "./Upi.jsx";

const PaymentInfo =()=> {
    const [showBankDetails, setShowBankDetails] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <>
        <div>
            <div className="">
                <select  value={selectedOption}
                         className="w-full py-3 border-2 border-black uppercase mx-auto">
                    <option className="uppercase"
                        onClick={()=>setShowBankDetails(true)}>Bank Payment</option>
                    <option className="uppercase"
                        onClick={()=>setShowBankDetails(false)}>UPI</option>
                </select>
            </div>

            <div>
                {
                    showBankDetails ?  <Bank/> : <Upi/>
                }


            </div>
        </div>
        </>
    );
}

export default PaymentInfo;