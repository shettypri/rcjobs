import Google_Ads from "../Google_Ads/Google_Ads.jsx";

const Waiting = () => {
    return (
        <>
            <div className="flex flex-row w-full">

                <div className="w-3/12 block">
                    <Google_Ads/>
                    <Google_Ads/>
                    <Google_Ads/>
                </div>
                <div className="w-6/12 h-2/6 flex flex-col">


                    <div className=" flex justify-center text-center p-4  rounded-2xl  shadow-xl border-1 border-black mt-10    md:mt-[30px] md:ml-[30px] md:w-[650px] bg-orange-300 mb-5">
                        <p className="md:text-2xl text-sm font-bold uppercase animate-pulse ">
                            please wait till registration process is completed
                        </p>
                    </div>

                    <div className="w-full h-2 flex flex-row">
                        <div className="block w-full">
                            <Google_Ads/>
                        </div>
                        <div className="block w-full">
                            <Google_Ads/>
                        </div>
                    </div>
                    <div className="w-full h-2 flex flex-row">
                        <div className="block w-full">
                            <Google_Ads/>
                        </div>
                        <div className="block w-full">
                            <Google_Ads/>
                        </div>
                    </div>
                </div >


                <div className="w-3/12 block">
                    <Google_Ads/>
                    <Google_Ads/>
                    <Google_Ads/>
                </div>



            </div>



        </>
    )
}

export default Waiting