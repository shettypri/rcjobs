import Google_Ads from "../Google_Ads/Google_Ads.jsx";

const Waiting = () => {
    return (
        <>
            <div className="flex flex-row w-full">
                <div className="w-2/12 h-2/6 flex flex-row">
                    <div className="flex flex-row ">
                       <div className="block w-full">
                           <Google_Ads />
                           <Google_Ads />
                       </div>
                        
                    </div>
                    <div className="flex flex-row">
                        <div className="block w-full"><Google_Ads/>
                            <Google_Ads/></div>
                    </div>


                </div>

                <div className=" flex justify-center text-center p-4  rounded-2xl  shadow-xl border-1 border-black mt-10 h-2/6 w-6/12  md:mt-[150px] md:ml-[350px] md:w-[450px] bg-orange-300">
                    <p className="md:text-2xl text-sm font-bold uppercase animate-pulse">
                        please wait till registration process is completed
                    </p>
                </div>

                <div className="w-2/12 flex flex-col">
                    <div className="flex flex-row h-2/6">
                        <Google_Ads/>
                        <Google_Ads/>
                    </div>
                    <div className="flex flex-row">
                        <Google_Ads/>
                        <Google_Ads/>
                    </div>


                </div>

            </div>



        </>
    )
}

export default Waiting