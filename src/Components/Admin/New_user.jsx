import { useState } from "react";
import { useDispatch } from "react-redux";
import { acceptRequestReducers, newUserReducers, referralCashBack } from "../../App/Slice/adminUserSlice.js";
import { updateUserByReferCodeService } from "../../Services/admin_service/adminReferralCashBackService.js";

const New_user = (props) => {
    const dispatch = useDispatch()

    /* The line `const [showImage, setShowImage] = useState(false);` is using the `useState` hook from
    React to create a state variable called `showImage` and a function called `setShowImage` to
    update its value. The initial value of `showImage` is set to `false`. */
    const [showImage, setShowImage] = useState(false);

    return (
        <>
            <tr className=" font-bold uppercas1">
                <td className="border-2 border-black w-1/3 px-10 h-10
                max-sm:py-1 max-sm:w-[50px] max-sm:text-[12px]

                ">
                    {props.indexValue + 1}
                </td>
                <td className="border-2 border-black w-1/3 px-10 h-10
                max-sm:py-1 max-sm:text-[12px]
                ">
                    {props.userData.name}
                </td>
                <td className="border-2 border-black w-1/3  h-10 px-4 py-2
                max-sm:py-1 max-sm:px-0 max-sm:text-[12px]
                ">
                    <button
                        className="bg-yellow-400 py-1 px-4 font-bold border-2 border-orange-500 rounded-lg hover:bg-white
                        max-sm:py-0
                        "
                        /* The `onClick={() => setShowImage(true)}` is an event handler that is
                        triggered when the button is clicked. It calls the `setShowImage` function
                        and passes `true` as an argument. This updates the value of the `showImage`
                        state variable to `true`, which will cause the image to be displayed. */
                        onClick={() => setShowImage(true)}
                    >
                        View Payment Proof
                    </button>
                </td>
            </tr>
            {
                showImage &&
                (
                    <tr className="border border-orange-500 mx-auto">
                        <td colSpan={3}
                            className="mx-2 "
                        >
                            <div className=" flex justify-center mt-2">
                                <img src={props.userData.JoiningFee}
                                    className=" rounded  "
                                    width={500} height={250}
                                />
                            </div>

                            <div className="flex justify-around my-2 py-2">
                                <button className="border border-black px-10 py-2 uppercase underline font-extrabold rounded-lg text-white bg-green-600 "
                                    onClick={() => {
                                        // console.log(props.userData.id)

                                        setShowImage(false)
                                        dispatch(acceptRequestReducers(props.userData.id))
                                        // console.log("user joing code",props.userData.joining_code)
                                        props.userData.joining_code !== null && dispatch(referralCashBack(props.userData.joining_code))
                                        dispatch(newUserReducers())
                                        mailToUser(props.userData.email)

                                    }
                                    }
                                >
                                    approve
                                </button>

                                <button className="border border-black px-10 py-2 uppercase underline font-extrabold rounded-lg text-white bg-red-600 "
                                    onClick={() => setShowImage(false)}
                                >
                                    Show less
                                </button>
                            </div>
                        </td>
                    </tr>
                )}
        </>
    )
}

export default New_user


const mailToUser = (email) => {
    // const 
    const subject = "WELOCME TO RC-JOBS" // Replace with your desired subject
    const message = "Next, on mobile, mailto will only work if the user has an email client installed on their device. If the user has multiple email clients installed, it will open the device default without giving the user an option to choose. Finally, some spammers use bots to search the web for mailto links and then use those bots to spam mail servers."// Replace with your desired message


    const gmailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    // const newEmail = `mailto:${email}?subject=${subject}&body=${message}`

    window.location.href = gmailUrl;
}