const Profile = () => {


    return (
        <>


                <div className={" bg-amber-100 flex flex-col justify-center text-center p-4  rounded-2xl  shadow-xl border-2 border-black mt-10 w-[200px] ml-[100px] md:h-15 md:w-[250px] md:ml-[520px] space-y-5"}>
                    <div>
                        NAME
                    </div>

                    <div>
                        $BALANCE AMOUNT

                    </div>
                    <div>
                        <lable>enter the amount </lable>
                        <input className="border-2 border-black"
                            type="text"

                        />
                    </div>
                    <div className={"flex flex-row justify-center"}>
                        <button className={"text-white bg-green-700 border-1 border-black h-10 w-[130px] rounded hover:rounded-lg hover:bg-green-900 ml-8"}>
                            withdraw
                        </button>

                        <button className={"text-white bg-green-700 border-1 border-black h-10 w-[130px] rounded hover:rounded-lg hover:bg-green-900 ml-8"}>
                            cancel
                        </button>
                    </div>
                </div>


        </>
    )
}

export default Profile