import LoginAvatar from "../assets/Images/user.png"
import {useState} from "react";
import PhoneInput from "react-phone-input-2";
import OTPInput from "otp-input-react"

const Otp_Login = () => {
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");

    const handleNumber = () => {

    }

    const handleOtpChange = (e) => {
        setOtp(e)
        console.log(otp)
    };
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

                        >
                            Send OTP
                        </button>
                    </div>
                </div>


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
                        >
                            Verify OTP
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Otp_Login