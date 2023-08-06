import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {adsRewardREducers, fetchAdsReducers} from "../../App/Slice/userDashBoardSlice.js";
import ReactSwipe from "react-swipe"
import {addProductReducers} from "../../App/Slice/BuyProductSlice.js";
import ShareLink from "./ShareLink.jsx";
import {isLoginReducers} from "../../App/Slice/userSlice.js";
import Loader from "../Global/Loader.jsx";

const User_dashboard = () => {

    let [reactSwipeEl, setReactSwipeEl] = useState("");
    const dispatch = useDispatch()
    const {fetchAds, Ads_Reward} = useSelector(state => state.userDashBoardReducers)
    const {isLoggedIn, data} = useSelector(state => state.userReducer)
    useEffect(() => {
        dispatch(fetchAdsReducers())
        dispatch(isLoginReducers(data.id))
    }, []);


    const handleNext = () => {
        isLoggedIn
        && (data.limit > 0 && (
                dispatch(adsRewardREducers({id: data.id, limit: data.limit - 1, wallet: data.wallet + 10})
                )
            )
        )
        reactSwipeEl.next()
    }
    return (
        <>
            <div className=" border border-orange-500 m-auto w-1/2
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
                                                <div className="w-full  m-auto mx-5
                                                     max-2xl:w-3/4 max-xl:w-full
                                                    max-sm:bg-red-100 max-sm:w-full max-sm:m-0 px-0
                                                "
                                                     key={index}>
                                                    <img src={ads.imageURL} alt="Error"
                                                         height={15} width={20}
                                                         className="w-[500px] h-[390px] border-4 border-orange-500 object-fill mx-0
                                                        max-sm:w-[320px] max-sm:mx-auto max-sm:my-2 z-10 max-2xl:w-3/4
                                                         "
                                                    />

                                                    <div className="text-xl flex justify-center my-2 font-extrabold capitalize border-dashed border border-black py-4 w-3/4 mx-auto">
                                                        {ads.Ads_name}

                                                    </div>
                                                    <div className="flex flex-col ">
                                                        <div className="mx-2 font-bold text-2xl"> &#8377;
                                                            {
                                                                 Number(ads.Ads_price)-(Number(ads.Ads_price)/100)* (Number(ads.Ads_Offer))
                                                            }
                                                        </div>
                                                        <div className="mx-2 font-bold text-lg flex flex-row ">
                                                            <section className="text-gray-600 line-through mx-2 ">
                                                                &#8377;  {ads.Ads_price}
                                                            </section>

                                                            <section className="text-green-600">
                                                                {
                                                                    Number(ads.Ads_Offer) === 0 &&(
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
                                                        onClick={
                                                            () => {
                                                                const orderDetails ={
                                                                    userName: data.name,
                                                                    address:data.Address,
                                                                    cust_Phone:data.phone,
                                                                    Pincode:data.PinCode,
                                                                    adsName: ads.Ads_name,
                                                                    clientName: ads.name,
                                                                    Phone: ads.Phone,
                                                                    isOrderPlaced: false
                                                                }
                                                                console.log(orderDetails)
                                                                dispatch(addProductReducers(orderDetails))
                                                                const alertMessage = `The order `+ ads.Ads_name +` has been Placed`
                                                                alert(alertMessage)
                                                            }
                                                        }>
                                                        buy
                                                    </button>
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
                            onClick={() => reactSwipeEl.prev()}
                        >
                            Previous
                        </button>
                        {
                            (!Ads_Reward.loading) ? (
                                <button
                                    className="uppercase bg-green-700 py-4 px-14 rounded-full text-white  font-bold border-2 border-black ml-2
                                    max-sm:px-10 max-sm:py-2"

                                    onClick={handleNext}>
                                    Next
                                </button>
                            ) : (
                                <><Loader/></>
                            )

                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default User_dashboard