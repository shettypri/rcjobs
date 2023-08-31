import {useState} from "react";
import {v4} from "uuid";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../config/firebase.config.js";
import {setDoc, doc} from "firebase/firestore"
import {db} from "../../config/firebase.config.js"
import {useNavigate} from "react-router-dom";
import referralCodeGenerator from 'referral-code-generator'
import PaymentInfo from "../Company_Bank_Details/Payment_Info.jsx";
import Google_Ads from "../Google_Ads/Google_Ads.jsx";

const Register = () => {
    const [uploadImage, setUploadImage] = useState("");
    const [personDetails, setPersonalDetails] = useState(true);
    const [final, setFinal] = useState(true);
    const referCode = sessionStorage.getItem("referCode")

    const [personalDetailError, setPersonalDetailError] = useState(false);
    const [bankDetailError, setBankDetailError] = useState(false);
    const [imageError, setImageError] = useState(false);


    const [userDetails, setUserDetails] = useState({
        id: sessionStorage.getItem("key"),
        name: "",
        phone: sessionStorage.getItem("mobileNumber"),
        limit: 25,
        referred: 0,
        total_referred: 0,
        wallet: 0,
        isWithdrawing: false,
        withdrawalAmount: 0,
        Total_withdrawal: 0,
        isAdmin: false,
        isUserAuthorized: false,
        joining_code: (referCode ? referCode : null),
        Referral_Code: "RCJOBS-" + referralCodeGenerator.alphaNumeric('uppercase', 4, 3),
        Account_name: "",
        Account_no: "",
        Bank_name: "",
        Branch: "",
        ifsc_code: "",
        Address: "",
        PinCode:""
    });
    /* The above code is a JavaScript React code snippet. It defines a function called `userValues`
    that is used to handle user input events. */
    const Navigate = useNavigate()
    const userValues = (event) => {
        const re = /^[a-zA-Z0-9_ ]*$/;
        
        if (event.target.value === "" || re.test(event.target.value)) {
            setUserDetails({
                ...userDetails, [event.target.name]: event.target.value
            })
        }
    }
   /**
    * The function `pinCodeValues` is used to update the `userDetails` object with the value of the pin
    * code input field, only if the value is empty or consists of only numeric characters.
    */
    const pinCodeValues= (event) => {
        const re = /^[0-9]+$/;

            if ( (event.target.value === "" || re.test(event.target.value)) ) {
                setUserDetails({
                    ...userDetails, [event.target.name]: event.target.value
                })
            }
    }
    /**
     * The function `accountNoValues` updates the `userDetails` object with the value of the input
     * field if it is empty or contains only numbers.
     */
    const accountNoValues= (event) => {
        const re = /^[0-9]+$/;
        // const value
        if (event.target.value === "" || re.test(event.target.value)) {
            setUserDetails({
                ...userDetails, [event.target.name]: event.target.value
            })
        }
    }
   /**
    * The function `ifscValues` updates the `userDetails` object with the value of the input field that
    * triggered the event.
    */
    const ifscValues= (event) => {
        setUserDetails({
                ...userDetails, [event.target.name]: event.target.value
            })

    }




 /**
  * The function `handlePersonalDetail` checks if the user's personal details are valid and sets an
  * error flag if any of the fields are empty or if the pin code is longer than 6 characters.
  */
    const handlePersonalDetail = () => {
        if (userDetails.name.length === 0 || userDetails.Address.length === 0 || userDetails.PinCode.length ===0  || userDetails.PinCode.length > 6) {
            setPersonalDetailError(true)

        } else {
            setPersonalDetails(false)
        }
    }
    /**
     * The function `handleBankDetails` checks if any of the bank details fields are empty and sets an
     * error flag if so, otherwise it sets a final flag to false.
     */
    const handleBankDetails = () => {
        if (userDetails.Account_name.length === 0 || userDetails.Account_no.length === 0 || userDetails.Bank_name.length === 0 || userDetails.Branch.length === 0 || userDetails.ifsc_code.length === 0) {
            setBankDetailError(true)
        } else {
            setFinal(false)

        }
    }

    const handleRegister = async () => {
       if(uploadImage <= 0){
           setImageError(true)
       }
       else{
        //    console.log(uploadImage.name)
           const imageFile = uploadImage.name
           const imageFolder = "PAYMENT"
           const textV4 = v4()
           //     image uploade code to firebase:
           const fileFolderRef = ref(storage, `${imageFolder}/${imageFile + textV4}`)
           try {
               await uploadBytes(fileFolderRef, uploadImage)
               const imageUrl = await getDownloadURL(ref(storage, `${imageFolder}/${imageFile + textV4}`))
               userDetails["JoiningFee"] = imageUrl
               const isDataInserted = await setDoc(doc(db, "users", `${userDetails.id}`)
                   , userDetails)
               Navigate("/user/userdashboard")
               //     storing into fire store data

           } catch (error) {
               console.error(error);
           }
       }
    }


    return (
        <>
            <div className="w-full flex flex-row max-sm:flex-col max-sm:h-full">
                <div className=" w-1/12 flex flex-col h-1/5">
                    <div className="block w-full"><Google_Ads/></div>
                </div>
                <div className=" w-1/12 flex flex-col ">
                    <div className="block w-full"><Google_Ads/></div>
                </div>
                <div className=" w-1/12 flex flex-col  max-sm:hidden">
                    <div className="block w-full"><Google_Ads/></div>
                </div>
                <div className=" w-1/12 flex flex-col  max-sm:hidden">
                    <div className="block w-full"><Google_Ads/></div>
                </div>
                <div className="w-2/6">
                    <div className={"flex flex-wrap justify-center mt-4"}>

                        <div className="flex flex-col space-y-3 p-0  bg-white rounded-lg shadow-xl border-2 border-black
                py-10
                ">

                            {personDetails ? (
                                <div className="px-4">
                                    <div
                                        className={" text-3xl font-semibold bg-[#FD7F2C] text-white w-full uppercase m-[0px] mt-[0px] rounded  h-15"}>
                                        Registration Form
                                    </div>

                                    <div className={" flex flex-col text-black p-4 px-0"}>
                                        <label className={"font-bold"}>Enter Full Name</label>
                                        <input type="text" value={userDetails.name}
                                               className=" mt-1 border-2 border-black h-10 rounded font-bold shadow-xl
                    "
                                               name={"name"} onChange={userValues}/>
                                        {personalDetailError && userDetails.name.length === 0 &&
                                            (<label className={"text-red-800 italic font-bold"}>please enter full name</label>)
                                        }

                                    </div>

                                    <div className={" flex flex-col text-black p-4 px-0"}>
                                        <label className={"font-bold"}> phone number</label>
                                        <input
                                            type="text"
                                            value={userDetails.phone}
                                            disabled
                                            className=" mt-1 border-2 border-gray-700 h-10 rounded font-bold
                       shadow-xl
                       "/>

                                    </div>
                                    <div className={"flex flex-col justify-center mb-4"}>
                                        <label className={"font-bold"}> Address</label>
                                        <textarea
                                            rows={4}
                                            className={"mt-1 border-2 border-black  rounded font-bold shadow-xl px-1"}
                                            name={"Address"}
                                            value={userDetails.Address}
                                            onChange={userValues}/>
                                        {personalDetailError && userDetails.Address.length === 0 &&
                                            (<label className={"text-red-800 italic font-bold"}>please enter Address</label>)
                                        }

                                    </div>
                                    <div className={"flex flex-col justify-center mb-4"}>
                                        <label className={"font-bold"}> PinCode</label>
                                        <input

                                            className={"mt-1 border-2 border-black  rounded font-bold shadow-xl px-1"}
                                            name={"PinCode"}
                                            value={userDetails.PinCode}
                                            onChange={pinCodeValues}/>
                                        {personalDetailError && userDetails.PinCode.length === 0 &&
                                            (<label className={"text-red-800 italic font-bold"}>please enter Pincode</label>)
                                        }
                                        {personalDetailError && userDetails.PinCode.length > 6 &&
                                            (<label className={"text-red-800 italic font-bold"}>Pincode Should not exceed 6 digits</label>)
                                        }

                                    </div>
                                    {
                                        <div className={" flex flex-col text-black p-4 px-0"}>
                                            {referCode ? (
                                                <label className="font-bold uppercase text-green-600 bg-gray-300 py-4 px-2
                                            border-2 border-gray-500 rounded-2xl
                                            ">
                                                    Thank you Join through Referral
                                                    program</label>
                                            ) : (
                                                <label>
                                                    You Do not  Have any Referral
                                                </label>
                                            )}
                                        </div>
                                    }

                                    <div className="flex flex-row justify-center">
                                        <button
                                            className={"text-center font-semibold border-1  text-white border-black rounded-2xl w-[120px] h-[35px] bg-gray-600 hover:bg-orange-400 "}
                                            onClick={handlePersonalDetail}>Next
                                        </button>
                                    </div>

                                </div>
                            ) : (
                                <div>
                                    {final ? (
                                        <div className="px-10">
                                            <div className={"flex flex-col text-black p-2"}>

                                                <div className={"flex flex-col justify-center"}>
                                                    <label className={"font-bold"}>Enter Account holder Name</label>
                                                    <input
                                                        className={"mt-1 border-2 border-black h-10 rounded font-bold  shadow-xl"}
                                                        type={"text"}
                                                        name={"Account_name"}
                                                        value={userDetails.Account_name}
                                                        onChange={userValues}
                                                    />
                                                    {bankDetailError && userDetails.Account_name.length === 0 &&
                                                        (<label className={"text-red-800 italic font-bold"}>please enter Account
                                                            name</label>)
                                                    }

                                                </div>

                                                <div className={"flex flex-col justify-center"}>
                                                    <label className={"font-bold"}>Account number</label>
                                                    <input
                                                        className={"mt-1 border-2 border-black h-10 rounded font-bold  shadow-xl"}
                                                        type={"text"}
                                                        name={"Account_no"}
                                                        value={userDetails.Account_no}
                                                        onChange={accountNoValues}

                                                    />
                                                    {bankDetailError && userDetails.Account_no.length === 0 &&
                                                        (<label className={"text-red-800 italic font-bold"}>please enter Account
                                                            number</label>)
                                                    }
                                                </div>
                                                <div className={"flex flex-col justify-center"}>
                                                    <label className={"font-bold"}> Bank Name</label>
                                                    <input
                                                        className={"mt-1 border-2 border-black h-10 rounded font-bold  shadow-xl"}
                                                        type={"text"}
                                                        name={"Bank_name"}
                                                        value={userDetails.Bank_name}
                                                        onChange={userValues}/>
                                                    {bankDetailError && userDetails.Bank_name.length === 0 &&
                                                        (<label className={"text-red-800 italic font-bold"}>please enter Bank
                                                            name</label>)
                                                    }
                                                </div>
                                                <div className={"flex flex-col justify-center"}>
                                                    <label className={"font-bold"}> Branch</label>
                                                    <input
                                                        className={"mt-1 border-2 border-black h-10 rounded font-bold  shadow-xl"}
                                                        type={"text"}
                                                        name={"Branch"}
                                                        value={userDetails.Branch}
                                                        onChange={userValues}/>
                                                    {bankDetailError && userDetails.Branch.length === 0 &&
                                                        (<label className={"text-red-800 italic font-bold"}>please enter Branch
                                                            name</label>)
                                                    }
                                                </div>
                                                <div className={"flex flex-col justify-center"}>
                                                    <label className={"font-bold"}> IFSC code</label>
                                                    <input
                                                        className={"mt-1 border-2 border-black h-10 rounded font-bold  shadow-xl"}
                                                        type={"text"}
                                                        name={"ifsc_code"}

                                                        value={userDetails.ifsc_code}
                                                        onChange={ifscValues}/>
                                                    {bankDetailError && userDetails.ifsc_code.length === 0 &&
                                                        (<label className={"text-red-800 italic font-bold"}>please enter ifsc
                                                            code</label>)
                                                    }
                                                </div>


                                                <div className={"flex justify-center p-6 flex-row space-x-3 "}>
                                                    <button
                                                        className={"\"text-center font-semibold border-1  text-white border-black rounded-2xl w-[120px] h-[35px] bg-gray-600 hover:bg-orange-400 "}
                                                        onClick={() => setPersonalDetails(true)}
                                                    >
                                                        Back
                                                    </button>
                                                    <button
                                                        className={"\"text-center font-semibold border-1  text-white border-black rounded-2xl w-[120px] h-[35px] bg-gray-600 hover:bg-orange-400 "
                                                        } onClick={handleBankDetails}>Next

                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div>
                                                <div className={"flex flex-col  mt-4 "}>
                                                    <label className={"font-bold flex space-y-3 p-3 justify-center"}>Enter
                                                        payment proof </label>
                                                    <div>
                                                        <PaymentInfo/>
                                                    </div>
                                                    <div className="">
                                                        <input
                                                            type="file"
                                                            name="name"
                                                            accept="image/*"
                                                            className=" mt-1 flex justify-center p-3 space-y-3 "
                                                            onChange={(event) => {
                                                                setUploadImage(event.target.files[0])
                                                            }}
                                                        />
                                                        {imageError &&  uploadImage <= 0 &&
                                                            <label className={"text-red-800 italic font-bold"} >Please upload images</label>}

                                                    </div>

                                                </div>
                                            </div>

                                            <div className={"flex justify-center p-6 flex-row space-x-3 "}>
                                                <button
                                                    className={"text-center font-semibold border-1  text-white border-black rounded-2xl w-[120px] h-[35px] bg-gray-600 hover:bg-orange-400  "}
                                                    onClick={() => {
                                                        setFinal(true)
                                                    }}
                                                >
                                                    back
                                                </button>
                                                <button
                                                    className={"text-center font-semibold border-1  text-white border-black rounded-2xl w-[120px] h-[35px] bg-gray-600 hover:bg-orange-400  "}
                                                    onClick={handleRegister}
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    )}


                                </div>
                            )}


                            {/*<div className={"p-6"}>*/}
                            {/*    IF NOT PAID YET <span*/}
                            {/*    className={"italic text-blue-700 underline underline-offset-1 cursor-pointer hover:text-blue-900"}> click here to pay</span>*/}
                            {/*</div>*/}


                        </div>


                    </div>

                    <div className=" w-1/12 flex flex-col ">
                        <div className="block w-full"><Google_Ads/></div>
                        <div className="block w-full"><Google_Ads/></div>
                    </div>
                    <div className=" w-1/12 flex flex-col ">
                        <div className="block w-full"><Google_Ads/></div>
                        <div className="block w-full"><Google_Ads/></div>
                    </div>
                </div>

                <div className=" w-1/12 flex flex-col h-1/5">
                    <div className="block w-full"><Google_Ads/></div>
                </div>
                <div className=" w-1/12 flex flex-col ">
                    <div className="block w-full"><Google_Ads/></div>
                </div>
                <div className=" w-1/12 flex flex-col ">
                    <div className="block w-full"><Google_Ads/></div>
                </div>
                <div className=" w-1/12 flex flex-col ">
                    <div className="block w-full"><Google_Ads/></div>
                </div>



            </div>



        </>

    )
}

export default Register

