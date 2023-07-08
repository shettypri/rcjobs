// import wallet from "../../../src/assets/Images/wallet.png"
import profile from "../../../src/assets/Images/profile.png"
// import reference from "../../../src/assets/Images/reference.png"
import {useState} from "react";
import {useSelector} from "react-redux";

const Profile = () => {
    const [withdraw, setWithdraw] = useState(true);
    const handleChange = (e) => {
        if (e.target.value >= 250) {
            {
                setWithdraw(false)
            }
        } else {
            {
                setWithdraw(true)
            }
        }
    }

    const {error, data} = useSelector(state => state.userReducer)
    console.log("data =====>", data)
    return (
        <>
            <div
                className={"flex md:flex-col  justify-center text-center p-4 border-gray-800 border-1 rounded-2xl shadow-2xl  0 mt-14 w-[360px] ml-[30px] md:h-15 md:w-[850px] md:ml-[400px] space-y-4 space-x-7 px-4 py-4"}>
                <div className={"flex  md:flex-row  flex-col p-2 space-x-6"}>
                    {/*{left}*/}

                    <div className=" flex md:flex-col  flex-col   md:space-x-3 space-x-9
                   bg-gradient-to-r from-yellow-50 shadow-xl shadow-blue-200
                   ">
                        <div className={"flex md:flex-col  flex-row  md:-space-x-3.5  px-9 py-4 w-[300px]"}>
                            <img src={profile}
                                 className="w-[100px] mb-4 border-2 border-black rounded-full p-2 shadow shadow-red-800 mx-auto"
                                 alt={"error"}/>
                            <label className="border-b border-b-black font-bold uppercase mt-2">
                                {data.name}
                            </label>
                        </div>

                        <div className="flex justify-around  flex-col">
                            <div className="flex flex-row border-b border-b-black my-2 py-1 justify-around mx-2">
                                <label className="uppercase  font-bold py-2">
                                    Wallet
                                </label>
                                <label > :</label>
                                <label>
                                    {data.wallet}

                                </label>
                            </div>
                            <div className="flex flex-row border-b border-b-black my-2 py-1 justify-around mx-2">
                                <label className="uppercase font-bold py-2">
                                    Referral
                                </label>
                                <label > :</label>
                                <lable>
                                    {data.referred}
                                </lable>
                            </div>

                        </div>


                    </div>


                    {/*{right}*/}

                    <div className={"flex flex-col space-y-7 drop-shadow-md justify-items-start p-3 "}>
                        <table>
                            <tbody>
                            <tr className={""}>
                                <th>Name</th>
                                <th>:</th>
                                <th><input
                                    type={"text"}
                                    className={"border"}
                                /></th>
                            </tr>
                            <tr>
                                <th>phone</th>
                                <th>:</th>
                                <th><input
                                    type={"text"}
                                    className={"border"}
                                /></th>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <th>:</th>
                                <th><input
                                    type={"text"}
                                    className={"border"}
                                /></th>
                            </tr>
                            <tr>
                                <th>amount</th>
                                <th>:</th>
                                <th><input
                                    type={"text"}
                                    className={"border"}
                                    onChange={handleChange}
                                /></th>
                            </tr>
                            </tbody>
                        </table>

                        <div className={"flex flex-row space-x-3 p-4"}>
                            <button
                                className={"disabled:bg-white enabled:bg-orange-600  enabled:text-white md:h-9  w-[150px] rounded-2xl md:w-[155px] h-9 "}
                                disabled={withdraw}> Withdraw
                            </button>
                            <button
                                className={"bg-white hover:bg-red-700 md:h-9 rounded-2xl md:w-[155px] w-[100px]"}>Cancel
                            </button>

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Profile