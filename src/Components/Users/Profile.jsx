// import wallet from "../../../src/assets/Images/wallet.png"
import profile from "../../../src/assets/Images/profile.png"
// import reference from "../../../src/assets/Images/reference.png"
import {useState} from "react";
import {useSelector} from "react-redux";

const Profile = () => {
    const [withdraw, setWithdraw] = useState(true);
    // const handleChange = (e) => {
    //     if (e.target.value >= 250) {
    //         {
    //             setWithdraw(false)
    //         }
    //     } else {
    //         {
    //             setWithdraw(true)
    //         }
    //     }
    // }
    const [edit, setEdit] = useState();
    const handleChange=(name)=>{
        setEdit(name)


    }

    const {error, data} = useSelector(state => state.userReducer)
    console.log("data =====>", data)
    return (
        <>
            <div
                className={"flex md:flex-col  justify-center text-center p-4 border-gray-800 border-1 rounded-2xl shadow-2xl  0 mt-14 w-[360px] ml-[30px] md:h-15 md:w-[850px] md:ml-[240px] space-y-4 space-x-7 px-4 py-4 border-2 border-black"}>
                <div className={"flex  md:flex-row  flex-col p-2 space-x-6 "}>
                    {/*{left}*/}

                    <div
                        className=" flex md:flex-col  flex-col   md:space-x-3 space-x-9 bg-gradient-to-r from-yellow-50 shadow-xl shadow-orange-200">
                        <div className={"flex md:flex-col  flex-row justify-center  md:-space-x-3.5  px-9 py-4 w-[300px]"}>

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
                                <th> Branch </th>
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
                                    {data.name === edit ?
                                            <td>
                                                <input type={"text"}/>
                                            </td>

                                        :
                                        <td><label>
                                            {data.ifsc_code}
                                        </label>
                                        </td>}


                                </tr>


                            </tbody>
                        </table>
                        {/*<p onClick={()=>handleChange()} className={"cursor-pointer underline"}>do you want to change IFSC code</p>*/}
                        <button onClick={()=>{handleChange(data.name)}}>change ifsc code</button>

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