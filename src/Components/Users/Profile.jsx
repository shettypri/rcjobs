import wallet from "../../../src/assets/Images/wallet.png"
 import profile from "../../../src/assets/Images/profile.png"
const Profile = () => {


    return (
        <>


                <div className={" bg-gradient-to-r from-amber-600 to-rose-500 flex flex-col justify-center text-center p-4  rounded-2xl  shadow-xl border-3 border-white mt-10 w-[200px] ml-[100px] md:h-15 md:w-[250px] md:ml-[520px] space-y-11"}>
                    <div className={" space-y-3"}>
                        <div className={"flex flex-row justify-evenly space-x-3 "}>
                            <div className={"border-white border w-9/12 text-center "}>
                                <img src={profile} height={"90px"} width={"70px"}
                                     className={""}
                                />
                                Name
                            </div>
                            <div className={"border-white border w-9/12 "}>
                                <img src={wallet} height={"90px"} width={"70px"}
                                     className={"flex flex-col align-middle"}
                                />

                                balance amount
                            </div>
                        </div>
                            <div className={"flex flex-col justify-center"}>
                                <label>enter the amount</label>
                                <input type={"text"}
                                className={"md:w-[220px]   bg-gradient-to-r from-yellow-200 to-rose-700 rounded"}/>
                            </div>


                        <div className={"flex flex-row p-4 justify-evenly   space-x-3"}>
                             <button className={"bg-yellow-100 hover:bg-yellow-500 md:h-9  w-[150px] rounded-2xl md:w-[155px] h-9 "}>Withdraw</button>
                            <button className={"bg-yellow-100 hover:bg-red-600 md:h-9 rounded-2xl md:w-[155px] w-[100px]"}>cancel</button>

                        </div>
                    </div>






                </div>


        </>
    )
}

export default Profile