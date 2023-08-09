import React, {useState} from 'react';
import Bank from "./Bank.jsx";
import Upi from "./Upi.jsx";

const PaymentInfo =()=> {
    const [showBankDetails, setShowBankDetails] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <>
        <div>
            <div>
                <select  value={selectedOption}>
                    <option onClick={()=>setShowBankDetails(true)}>Bank Payment</option>
                    <option onClick={()=>setShowBankDetails(false)}>UPI</option>
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