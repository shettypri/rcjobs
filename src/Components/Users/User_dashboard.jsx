import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {adsRewardREducers, fetchAdsReducers} from "../../App/Slice/userDashBoardSlice.js";
import ReactSwipe from "react-swipe"
import {addProductReducers} from "../../App/Slice/BuyProductSlice.js";
import ShareLink from "./ShareLink.jsx";
import {isLoginReducers} from "../../App/Slice/userSlice.js";
import Loader from "../Global/Loader.jsx";
import Google_Ads from "../Google_Ads/Google_Ads.jsx";

const User_dashboard = () => {

    let [reactSwipeEl, setReactSwipeEl] = useState("");
    const [adsNumber, setAdsNumber] = useState(1);
    const dispatch = useDispatch()
    const {fetchAds, Ads_Reward} = useSelector(state => state.userDashBoardReducers)
    const {isLoggedIn, data} = useSelector(state => state.userReducer)
    useEffect(() => {
        dispatch(fetchAdsReducers())
        dispatch(isLoginReducers(data.id))
    }, []);


    /**
     * The function `handleNext` is used to handle the next action in a React component, including
     * checking if the user is logged in, updating the ads limit and wallet, dispatching actions, and
     * moving to the next element in a React Swipe component.
     */
    const handleNext = () => {

        isLoggedIn &&
        (
            adsNumber !== fetchAds.data.length &&(
            data.limit > 0 && (   dispatch(adsRewardREducers({id: data.id, limit: data.limit - 1, wallet: data.wallet + 10}) )    )
            )
        )
        isLoggedIn &&(dispatch(isLoginReducers(data.id)))
        // adsNumber >0 && (setAdsNumber(adsNumber-1))
        adsNumber !== fetchAds.data.length && (setAdsNumber(adsNumber+1))
        // console.log("adsLength",adsNumber)
        // console.log("Total length",fetchAds.data.length )
        reactSwipeEl.next()
    }
    return (
        <>
            <div className="flex flex-row w-full">
                <div className="w-3/12 max-sm:w-full ">
                    <div className="max-sm:h-[30px]"><Google_Ads/></div>
                    <div className="max-sm:hidden"><Google_Ads/></div>
                    <div className="max-sm:hidden"><Google_Ads/></div>
                </div>
                <div className=" border border-orange-500 m-auto w-5/12 mt-2
          max-sm:w-full
            ">
                    <h1 className="w-full m-auto bg-gradient-to-r from-orange-300 to-orange-500 flex items-center justify-center text-white text-2xl font-bold ">
                        User Dashboard
                    </h1>
                    <div className="flex justify-end mb-4 mr-4 mt-4">
                        <ShareLink/>
                    </div>
                    <div>
                        <div className=" mx-4 w-3/4
                       max-sm:w-full
                    ">
                            {
                                fetchAds.loading && <Loader/>
                            }
                            {
                                fetchAds.Success && (

                                    <ReactSwipe
                                        className="carousel w-full h-[654px] bg-gray-100  pt-7 px-0
                                    mx-10

                                        max-sm:w-full max-sm:p-0 max-sm:m-0
                                    "
                                        // swipeOptions={{ disableSwipe: true }}
                                        swipeOptions={{continuous: false, disableSwipe: true}}
                                        ref={el => (reactSwipeEl = el)}

                                    >
                                        {
                                            fetchAds.data.map((ads, index) => {
                                                return (
                                                    <div className="w-full  mx-auto

                                                     max-2xl:w-3/4 max-xl:w-full
                                                    max-sm:bg-red-100 max-sm:w-full max-sm:m-0 px-0
                                                "
                                                         key={index}>
                                                        <div className=" block ">

                                                            <img src={ads.imageURL} alt="Error"
                                                                 height={15} width={20}
                                                                 className="w-[500px] h-[390px] border-4 border-orange-500 object-fill mx-auto
                                                        max-sm:w-[320px] max-sm:mx-auto max-sm:my-2 z-10 max-2xl:w-3/4
                                                         "
                                                            />

                                                            <div
                                                                className="text-xl flex justify-center my-2 font-extrabold capitalize border-dashed border border-black py-4 w-3/4 mx-auto ">
                                                                {ads.Ads_name}

                                                            </div>
                                                            <div className="flex flex-col ">
                                                                <div className="mx-2 font-bold text-2xl"> &#8377;
                                                                    {
                                                                        Number(ads.Ads_price) - (Number(ads.Ads_price) / 100) * (Number(ads.Ads_Offer))
                                                                    }
                                                                </div>
                                                                <div className="mx-2 font-bold text-lg flex flex-row ">
                                                                    <section
                                                                        className={`${Number(ads.Ads_Offer) !== 0 ? "text-gray-600" : ("text-gray-100")}  line-through mx-2 `}>
                                                                        &#8377;  {ads.Ads_price}
                                                                    </section>

                                                                    <section className="text-green-600">
                                                                        {
                                                                            Number(ads.Ads_Offer) !== 0 && (
                                                                                <>
                                                                                    {ads.Ads_Offer}% off
                                                                                </>
                                                                            )
                                                                        }

                                                                    </section>
                                                                </div>
                                                            </div>
                                                            <button
                                                                className="border-2 border-black
                                                            mx-40  px-24 mt-4 py-3 rounded
                                                             font-extrabold uppercase bg-red-700 text-white
                                                             max-sm:mx-20
                                                             max-2xl:mx-10
                                                            "
                                                                /* The above code is handling an onClick event
                                                                in a React component. When the event is
                                                                triggered, it creates an object called
                                                                `orderDetails` with various properties such
                                                                as `userName`, `address`, `cust_Phone`, etc.
                                                                The values for these properties are obtained
                                                                from the `data` and `ads` objects. */
                                                                onClick={
                                                                    () => {
                                                                        const orderDetails = {
                                                                            userName: data.name,
                                                                            address: data.Address,
                                                                            cust_Phone: data.phone,
                                                                            Pincode: data.PinCode,
                                                                            adsName: ads.Ads_name,
                                                                            clientName: ads.name,
                                                                            Phone: ads.Phone,
                                                                            isOrderPlaced: false
                                                                        }
                                                                        console.log(orderDetails)
                                                                        dispatch(addProductReducers(orderDetails))
                                                                        const alertMessage = `The order ` + ads.Ads_name + ` has been Placed`
                                                                        alert(alertMessage)
                                                                    }
                                                                }>
                                                                buy
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                    </ReactSwipe>
                                )
                            }</div>
                        <div className="my-4 flex flex-row justify-around bg-gray-400 py-4">
                            <button
                                className="uppercase bg-green-700  hover:bg-sky-700 py-4 px-14 rounded-full text-white  font-bold border-2 border-black mr-2
                            max-sm:px-10 max-sm:py-2"
                                onClick={() => {
                                    reactSwipeEl.prev()
                                    adsNumber >0 && (setAdsNumber(adsNumber-1))
                                }
                                }
                            >
                                Previous
                            </button>
                            {
                                (!(Ads_Reward.loading && data.loading)) ? (
                                    <button
                                        className="uppercase bg-green-700 py-4 px-14 rounded-full text-white  font-bold border-2 border-black ml-2
                                    max-sm:px-10 max-sm:py-2"

                                        onClick={()=>
                                            handleNext()}
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <><Loader/></>
                                )

                            }
                        </div>

                    </div>
                </div>
                <div className="my-10 w-1/5 mx-10 flex flex-col">
                <Google_Ads />
                <Google_Ads />
                <Google_Ads />
            </div>

            </div>
        </>
    )
}

export default User_dashboard