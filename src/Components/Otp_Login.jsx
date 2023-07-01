import LoginAvatar from "../assets/Images/user.png"
import {useState} from "react";
import PhoneInput from "react-phone-input-2";
import OTPInput from "otp-input-react"
import {RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import {auth} from "../config/firebase.config.js";
import {useDispatch, useSelector} from "react-redux";
import {isLoginReducers} from "../App/Slice/userSlice.js";
import {useNavigate} from "react-router-dom";

const Otp_Login = () => {

    const dispatch = useDispatch()
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [otpVerify, setOtpVerify] = useState(true);
    const [addedNumber, setAddedNumber] = useState("");
    const [captchaResult, setCaptchaResult] = useState({})
    const handleNumber = (e) => {
        setMobileNumber(e)
    }

    const { error, isLoggedIn, newUser} = useSelector(
        state => state.userReducer
    )
    const handleOtpChange = (e) => {
        setOtp(e)
    };
    const verifyOtp = async ()=>{
        try {
            const finalResult = await captchaResult.confirm(otp)
            sessionStorage.setItem("key", finalResult.user.uid)
            console.log("result iis", finalResult.user.uid)
            if (finalResult) {

                dispatch(isLoginReducers(finalResult.user.uid))
            }
            console.log(error, isLoggedIn,  newUser)
        } catch (error) {
            console.log("Entered otp => \n\n\n\n", error);
        }
    }
    const navigate = useNavigate()
    if(isLoggedIn){

        if(newUser){
            navigate("/user/register")
        }else{
            navigate("/user/dashboard")
        }
    }

    const getOtpByNumber = async ()=>{
        // console.log("number")
        const numberMobile = "+" + mobileNumber
        console.log("the number is",numberMobile)
        sessionStorage.setItem("mobileNumber",numberMobile)
        try {
            const captchaResult = await new RecaptchaVerifier('recaptcha-container', {}, auth);
            console.log("capthcha result")
            const captchVeryfied = await signInWithPhoneNumber(auth, numberMobile, captchaResult)
            if (captchVeryfied) {
                setCaptchaResult(captchVeryfied)
            }
        } catch (error) {
            console.log("Login otp Error => ", error);
        }
        setOtpVerify(false)
        setAddedNumber(mobileNumber)
    }
    return (
        <>
            <div
                className={"max-sm:w-[340px] lg:w-1/3 m-auto  pb-3 flex justify-center items-center flex-col border-2 border-amber-600 rounded-lg place-items-center "}>
                <img src={LoginAvatar}
                     height={170}
                     width={160}
                     className="drop-shadow-2xl max-sm:w-[85px] mt-5"
                />

                <h1 className="capitalize font-bold text-3xl max-sm:text-2xl">
                    Login
                </h1>
                {
                    otpVerify ?(
                        <div className="mt-2 flex flex-col mb-3 ">
                            <PhoneInput
                                className={"font-mono  w-[350px] text-[18px] bg-white max-sm:w-[250px] max-sm:text-[17px]"}
                                country={"in"}
                                onChange={handleNumber}
                                value={mobileNumber}
                            />
                            <div className=" group mt-2 mx-auto">
                                <button
                                    className="w-[200px] h-[45px] border border-blue-600 font-bold rounded-full cursor-pointer text-white bg-orange-500 group-hover:text-white group-hover:bg-orange-600 transition ease-in-out delay-150 shadow-lg shadow-gray-500 mt-2
                            "
                                    onClick={getOtpByNumber}
                                >
                                    Send OTP
                                </button>
                            </div>
                        </div>
                    ):(
                        <div className="">
                            <OTPInput
                                className=" mt-4 otp-input"
                                value={otp}
                                onChange={handleOtpChange}
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                inputClassName="otp-input"
                            />
                            <div className="mt-2 flex flex-col mb-3 items-center">

                                <button
                                    className=" w-[200px] h-[45px] border border-blue-600 font-bold rounded-full cursor-pointer text-white bg-orange-500 group-hover:text-white group-hover:bg-orange-600 transition ease-in-out delay-150 shadow-lg shadow-gray-500 mt-2"
                                onClick={verifyOtp}
                                >
                                    Verify OTP
                                </button>
                            </div>
                            <div>
                                <button className="text-blue-500 underline-offset-1 "
                                        onClick={()=>setOtpVerify(true)}
                                >
                                    change this number <section className="text-black inline">+{addedNumber} </section>?
                                </button>
                            </div>
                        </div>
                    )
                }
                {
                    otpVerify &&(
                        <div id="recaptcha-container"/>
                    )
                }





            </div>
        </>
    )
}

export default Otp_Login