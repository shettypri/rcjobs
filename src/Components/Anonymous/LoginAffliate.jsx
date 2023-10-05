

// type Props = {}

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import OTPInput from "otp-input-react"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { isLoginReducers } from "../../App/Slice/userSlice";
import LoggedInUser from "./LoggedInUser";
import ErrorText from "../Global/Affliate/ErrorText";

const LoginAffliate = () => {
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const dispatch = useDispatch()

  const [captchaResult, setcaptchaResult] = useState({})
  const { isLoggedIn, data, newUser } = useSelector(
    state => state.userReducer
  )
  // console.log("======>", data);
  // console.log("======>", newUser);

  const handleSendOtp = async () => {
    // console.log(phoneNumber);
    // Logic to send OTP to the provided phone number
    // You can implement this logic with a backend service.

    const numberMobile = "+" + phoneNumber

    try {
      const captchaResult = await new RecaptchaVerifier('recaptcha-container', {}, auth);

      const captchaVerified = await signInWithPhoneNumber(auth, numberMobile, captchaResult)
      if (captchaVerified) {
        setcaptchaResult(captchaVerified)
      }
      setIsOtpSent(true);
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleLogin = async () => {
    try {
      const finalResult = await captchaResult.confirm(otp)
      if (finalResult) {
        dispatch(isLoginReducers(finalResult.user.uid))
      }
      // setLinkSenderId(finalResult.user.uid)
    } catch (error) {
      console.log("Entered otp => \n\n\n\n", error);
    }

  };
  const handleNumber = (e) => {
    setPhoneNumber(e)
    // console.log(e);
  }
  const handleOtpChange = (e) => {
    setOtp(e)
    // console.log(e);
  }




  return (
    <>
      {
        isLoggedIn ? (
          newUser ? (
            <ErrorText text="You don't have the account please buy from Anonymous user" />
          ) : (<LoggedInUser data={data} />)


        ) : (
          <>
            <div className="flex flex-col items-center justify-center border border-orange-500 my-4 w-1/2 mx-auto rounded-lg   pb-5 max-sm:w-full max-sm:pb-5">
              <h1 className="text-3xl font-semibold mb-4">OTP Login</h1>

              {!isOtpSent ? (
                <>
                  <PhoneInput
                    country={"in"}
                    onChange={handleNumber}
                    value={phoneNumber}
                    className="border p-2 rounded mb-4" />
                  <button
                    onClick={handleSendOtp}
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                  >
                    Send OTP
                  </button>

                </>
              ) : (
                <>
                  <OTPInput
                    className=" mt-4 otp-input "
                    value={otp}
                    onChange={handleOtpChange}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    inputClassName="otp-input "
                  />
                  <button
                    onClick={handleLogin}
                    className="bg-green-500 text-white px-10 py-2 font-bold rounded hover:bg-green-600 my-4"
                  >
                    Login
                  </button>
                </>
              )}

              {
                !isOtpSent && (
                  <div id="recaptcha-container" />
                )
              }
            </div>
          </>

        )
      }
    </>


  )
}

export default LoginAffliate