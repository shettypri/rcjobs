// import wallet from "../../../src/assets/Images/wallet.png"
import profile from "../../../src/assets/Images/profile.png"
// import reference from "../../../src/assets/Images/reference.png"
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";


const Profile = () => {


    const [showInput, setShowInput] = useState(false);


    const {error, data} = useSelector(state => state.userReducer)
    const [newIfsc, setNewIfsc] = useState(data.ifsc_code);
    const handleSubmit = () => {

    }

    console.log("data =====>", data)
    return (
        <>
            <div
                className={"flex md:flex-col  justify-center text-center p-4  border-1 rounded-2xl shadow-2xl  0 mt-14 w-[360px] ml-[30px] md:h-15 md:w-[850px] md:ml-[240px] space-y-4 space-x-7 px-4 py-4 border-2 border-gray-600 bg-gradient-to-r from-amber-300 to-white "}>
                <div className={"flex  md:flex-row  flex-col p-2 space-x-6 "}>
                    {/*{left}*/}

                    <div
                        className=" flex md:flex-col  flex-col   md:space-x-3 space-x-9 bg-gradient-to-r from-yellow-50 shadow-xl shadow-orange-200">
                        <div
                            className={"flex md:flex-col  flex-row justify-center  md:-space-x-3.5  px-9 py-4 w-[300px]"}>

                            <label className="border-b border-b-black font-bold uppercase mt-2">
                                {data.name}
                            </label>
                        </div>

                        <div className="flex justify-around  flex-col p-4 py-7">
                            <div className="mx-auto my-2 font-bold">
                                <label>
                                    {data.phone}
                                </label>
                            </div>
                            <div className="mx-auto my-2 font-bold">
                                <label>
                                    {data.Address}
                                </label>
                            </div>

                        </div>


                    </div>


                    {/*{right}*/}

                    <div className={"flex flex-col space-y-7 drop-shadow-md justify-items-start p-3 w-full  "}>
                        <table>
                            <tbody>
                            <tr>
                                <th>Account Name</th>
                                <td>:</td>
                                <td>
                                    <label>
                                        {data.name}

                                    </label>

                                </td>
                            </tr>
                            <tr>
                                <th>Account Number</th>
                                <td>:</td>
                                <td>
                                    <label>
                                        {data.Account_no}


                                    </label>

                                </td>
                            </tr>
                            <tr>
                                <th> Bank Name</th>
                                <td>:</td>
                                <td>
                                    {data.Bank_name}
                                </td>
                            </tr>
                            <tr>
                                <th> Branch</th>
                                <td>:</td>
                                <td>
                                    <label>
                                        {data.Branch}

                                    </label>

                                </td>
                            </tr>
                            <tr>
                                <th>
                                    IFSC Code
                                </th>
                                <th>:</th>
                                <td>
                                    {data.ifsc_code}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        {!showInput ? (
                            <>
                                <p className=" text-blue-950 font-bold underline py-2  cursor-pointer" onClick={() => {
                                    setShowInput(true)
                                }}>
                                    do you want change ifsc code ?
                                </p>

                            </>
                            ):(
                        <div className={"flex flex-col space-x-3"}>
                            <input type={"text"} value={newIfsc}
                                   className="w-1/2 h-10 border border-black px-4 mx-auto"
                                   onChange={(event) => setNewIfsc(event.target.value)}
                            />
                            {newIfsc===data.ifsc_code
                                &&(<label className={"font-bold italic text-red-800 underline mt-1 "}> ifsc code can't be same as old </label>)


                            }
                            <div className="flex justify-around mt-4 space-x-3 ">
                                <button
                                    className={"bg-green-700 hover:bg-green-900 flex   justify-center p-1 border-1 border-black rounded-2xl w-6/12 md:w-44 md:h-10 md:py-2 text-white h-9 capitalize font-bold"}
                                    onClick={handleSubmit}>submit
                                </button>
                                <button
                                    className={"bg-red-600 hover:bg-red-900  justify-center  p-1 border-1 border-black rounded-2xl w-6/12 md:w-44 md:h-10 md:py-2 text-white h-9 font-bold capitalize "}
                                    onClick={() => {
                                        setShowInput(false)
                                    }}>cancel
                                </button>
                            </div>
                        </div>
                            )
                        }
                    </div>

                </div>

            </div>

        </>
    )
}

export default Profile
