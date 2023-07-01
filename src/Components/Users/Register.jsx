import {useEffect, useState} from "react";
import {v4} from "uuid";
import { getDownloadURL,  ref, uploadBytes } from "firebase/storage";
import {storage} from "../../config/firebase.config.js";
import { setDoc,doc } from "firebase/firestore"
import {db} from "../../config/firebase.config.js"
import {useNavigate} from "react-router-dom";
const Register = () => {
    const [uploadImage, setUploadImage] = useState("");
    const [userDetails, setUserDetails] = useState({
        id:sessionStorage.getItem("key"),
        name: "",
        phone: sessionStorage.getItem("mobileNumber"),
        limit: 25,
        referred: 0,
        wallet:0,
        isWithdrawing: false,
        isAdmin: false,
        isUserAuthorized:false,
        withdrawalAmount: 0,
        joining_code:"jguygu",
        Referral_Code: "admin001"

    });
    const Navigate = useNavigate()

    const handleRegister = async ()=>{
        console.log(uploadImage.name)
        const imageFile = uploadImage.name
        const imageFolder = "PAYMENT"
        const textV4 = v4()
        //     image uploade code to firebase:
        const fileFolderRef = ref(storage,`${imageFolder}/${imageFile + textV4}`)
        try {
            await uploadBytes(fileFolderRef,uploadImage)
            const imageUrl = await getDownloadURL(ref(storage,`${imageFolder}/${imageFile + textV4}`))
            userDetails["JoiningFee"] = imageUrl
            const isDataInserted = await setDoc(doc(db, "users", `${userDetails.id}`)
                ,userDetails)
            Navigate("/user/dashboard")
            //     storing into fire store data

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <div className={"flex flex-wrap justify-center mt-4"}>

                <div className={"flex flex-col space-y-3 p-0  bg-white rounded-lg shadow-xl border-2 border-black"}>
                    <div
                        className={" text-3xl font-semibold bg-[#FD7F2C] text-white w-full uppercase m-[0px] rounded  h-12"}>Registration
                        Form
                    </div>

                    <div className={" flex flex-col text-black p-4"}>
                        <label className={"font-bold"}>Enter Full Name</label>
                        <input
                            type="text"
                            className=" mt-1 border-2 border-black h-10 rounded
                    font-bold bg-gray-200 shadow-gray-500 shadow-xl
                    "
                            name={"name"} onChange={(event) => {
                            setUserDetails({
                                ...userDetails,["name"]:event.target.value
                            })
                        }}/>
                    </div>

                    <div className={" flex flex-col text-black p-4"}>
                        <label className={"font-bold"}> phone number</label>
                        <input
                            type="text"
                            value={userDetails.phone}
                            disabled
                            className=" mt-1 border-2 border-gray-700 h-10 rounded font-bold
                       bg-gray-200 shadow-gray-500 shadow-xl
                       "/>
                    </div>

                    <div className={" flex flex-col text-black p-4"}>
                        <label className={"font-bold"}>Enter payment proof </label>
                        <div className="">
                            <input
                                type="file"
                                name="name"
                                accept="image/*"
                                className=" mt-1  "
                                onChange={(event)=>{
                                    setUploadImage(event.target.files[0])
                                }}
                            />
                        </div>
                    </div>
                    <div className={"p-6"}>
                        IF NOT PAID YET <span
                        className={"italic text-blue-700 underline underline-offset-1 cursor-pointer hover:text-blue-900"}> click here to pay</span>
                    </div>

                    <div className={"flex justify-center p-6 "}>
                        <button
                            className={"text-center font-semibold border-1  text-white border-black rounded-2xl w-[130px] h-[35px] bg-gray-600 hover:bg-orange-400  "}
                            onClick={handleRegister}
                        >
                            Register
                        </button>
                    </div>


                </div>


            </div>

        </>

    )
}

export default Register