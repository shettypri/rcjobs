import LoginAvatar from "../assets/Logo/rc-jobs-test-logo.png"
import {useState} from "react";
import PhoneInput from "react-phone-input-2";
import OTPInput from "otp-input-react"
import {getAuth, RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import {auth} from "../config/firebase.config.js";
import {useDispatch, useSelector} from "react-redux";
import {isLoginReducers} from "../App/Slice/userSlice.js";
import {useNavigate} from "react-router-dom";
import Loader from "./Global/Loader.jsx";
import Google_Ads from "./Google_Ads/Google_Ads.jsx";

const Otp_Login = () => {

    const dispatch = useDispatch()
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [otpTimeLimit, setOtpTimeLimit] = useState(0);
    const [otpVerify, setOtpVerify] = useState(true);
    const [reverifyOtp, setReverifyOtp] = useState(false)
    // const [otpVerify, setOtpVerify] = useState(false);
    const [addedNumber, setAddedNumber] = useState("");
    const [captchaResult, setCaptchaResult] = useState({})
    const [loading, setLoading] = useState(false);
    const handleNumber = (e) => {
        setMobileNumber(e)
    }

    const {error, isLoggedIn, newUser, data} = useSelector(
        state => state.userReducer
    )
    const handleOtpChange = (e) => {
        setOtp(e)
    };
    const verifyOtp = async () => {
        setLoading(true)
        try {
            const finalResult = await captchaResult.confirm(otp)
            sessionStorage.setItem("key", finalResult.user.uid)
            // console.log("result iis", finalResult.user.uid)
            if (finalResult) {
                dispatch(isLoginReducers(finalResult.user.uid))
            }
            // console.log(error, isLoggedIn, newUser)
            setLoading(false)
        } catch (error) {
            console.log("Entered otp => \n\n\n\n", error);
        }
    }
    const navigate = useNavigate()

    if(isLoggedIn){
        if (newUser) {
            navigate("/user/register")
        } else {
            if (data.isAdmin) {
                navigate("/admin/dashboard")
            } else {
                navigate("/user/userdashboard")
            }
        }
    }


    // const resendOtpTimer = ()=>{
    //     setOtpTimeLimit(60)
    //     let newTimeLimit;
    //     let timeLimit = setInterval(()=>{
    //         newTimeLimit = otpTimeLimit-1
    //         setOtpTimeLimit( (newTimeLimit))
    //         if(otpTimeLimit === 0){
    //             clearInterval(timeLimit)
    //         }
    //     }, 1000);
    //
    // }

    const getOtpByNumber = async () => {
        // console.log("number")
        const numberMobile = "+" + mobileNumber
        // console.log("the number is", numberMobile)
        sessionStorage.setItem("mobileNumber", numberMobile)

        try {
            const captchaResult = await new RecaptchaVerifier('recaptcha-container', {}, auth);
            // console.log("capthcha result")
            const captchVeryfied = await signInWithPhoneNumber(auth, numberMobile, captchaResult)
            if (captchVeryfied) {
                setCaptchaResult(captchVeryfied)
            }
            // console.log(captchaResult)
            // resendOtpTimer()
        } catch (error) {
            console.log("Login otp Error => ", error);
        }
        setOtpVerify(false)
        setAddedNumber(mobileNumber)
    }
    // const resendOtpBtn = async () => {
    //     setReverifyOtp(true)
    //     const numberMobile = "+" + mobileNumber
    //     console.log("the number is", numberMobile)
    //     sessionStorage.setItem("mobileNumber", numberMobile)
    //
    //     try {
    //         const captchaResult = await new RecaptchaVerifier('recaptcha-container-reset', {}, auth);
    //         console.log("capthcha result")
    //         const captchVeryfied = await signInWithPhoneNumber(auth, numberMobile, captchaResult)
    //         if (captchVeryfied) {
    //             setCaptchaResult(captchVeryfied)
    //         }
    //         console.log(captchaResult)
    //         // resendOtpTimer()
    //     } catch (error) {
    //         console.log("Login otp Error => ", error);
    //     }
    //     setOtpVerify(false)
    //     setAddedNumber(mobileNumber)
    // };

    return (
        <>
            <div className="w-full flex flex-row max-sm:flex-col max-sm:h-full">
                <div className="w-3/12 max-sm:w-full ">
                    <div className="max-sm:h-[30px]"><Google_Ads/></div>
                    <div className="max-sm:hidden"><Google_Ads/></div>
                    <div className="max-sm:hidden"><Google_Ads/></div>

                </div>
                <div
                    className="max-sm:w-[340px] lg:w-4/12 m-auto  pb-3 flex justify-center items-center flex-col border-2 border-amber-600 rounded-lg place-items-center mt-2 ">
                    {loading && (<Loader/>)}
                    <img src={LoginAvatar}
                         height={170}
                         width={160}
                         className="drop-shadow-2xl max-sm:w-[85px] mt-5 "
                    />

                    <h1 className="capitalize font-bold text-3xl max-sm:text-2xl ">
                        Login
                    </h1>
                    {
                        otpVerify ? (
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
                        ) : (
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
                                {/*Resend otp Button*/}
                                {/*<div className="my-2 flex flex-col mb-3 items-center  mr-4 ">*/}
                                {/*    {}*/}
                                {/*    <button className=" mt-4 text-blue-700 font-bold border border-blue-700 px-10 ml-52 py-1 rounded-full capitalize"*/}
                                {/*    onClick={resendOtpBtn}*/}
                                {/*    >*/}
                                {/*        Resend otp &nbsp;*/}
                                {/*    </button>*/}
                                {/*</div>*/}

                                <div className="mt-2 flex flex-col mb-3 items-center">

                                    <button
                                        className=" w-[200px] h-[45px] border border-blue-600 font-bold rounded-full cursor-pointer text-white bg-orange-500 group-hover:text-white group-hover:bg-orange-600 transition ease-in-out delay-150 shadow-lg shadow-gray-500 mt-2"
                                        onClick={verifyOtp}
                                    >
                                        Verify OTP
                                    </button>
                                </div>

                                {/*{*/}
                                {/*    reverifyOtp && (*/}
                                {/*        <div id="recaptcha-container-reset"/>*/}
                                {/*    )*/}
                                {/*}*/}
                                <div>
                                    <button className="text-blue-500 underline-offset-1 "
                                            onClick={() => setOtpVerify(true)}
                                    >
                                        change this number <section className="text-black inline">+{addedNumber} </section>?
                                    </button>
                                </div>
                            </div>
                        )
                    }
                    {
                        otpVerify && (
                            <div id="recaptcha-container"/>
                        )
                    }


                </div>

                <div className="w-3/12  max-sm:w-2/6 ">
                    <Google_Ads/>
                    <Google_Ads/>
                    <Google_Ads/>
                </div>
            </div>

        </>
    )
}

export default Otp_Login