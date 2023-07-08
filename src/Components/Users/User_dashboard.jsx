import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {adsRewardREducers, fetchAdsReducers} from "../../App/Slice/userDashBoardSlice.js";
import ReactSwipe from "react-swipe"
import {addProductReducers} from "../../App/Slice/BuyProductSlice.js";
import ShareLink from "./ShareLink.jsx";

const User_dashboard = () => {

    let [reactSwipeEl, setReactSwipeEl] = useState("");
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAdsReducers())
    }, []);
    const {fetchAds, Ads_Reward} = useSelector(state => state.userDashBoardReducers)
    const {isLoggedIn, data} = useSelector(state => state.userReducer)

    const handleNext = () => {
        isLoggedIn
        && (dispatch(adsRewardREducers(
                {
                    id: data.id,
                    limit: data.limit - 1,
                    wallet: data.wallet + 10
                })
            )
        )
        reactSwipeEl.next()
    }
    return (
        <>
            <div className=" border border-orange-500 m-auto w-1/2
          max-sm:w-full
            ">
                <h1 className="w-full m-auto bg-gradient-to-r from-orange-300 to-orange-500 flex items-center justify-center text-white text-2xl font-bold

                ">
                    User Dashboard
                </h1>
                <div className="flex justify-end mb-4 mr-4 mt-4">
                    <ShareLink />
                </div>
                <div>
                    <div className="bg-green-500 m-auto w-1/2
                       max-sm:w-full
                    ">
                        {
                            fetchAds.loading && <h1> loading</h1>
                        }
                        {
                            fetchAds.Success && (

                                <ReactSwipe
                                    className="carousel w-[410px] h-[500px] bg-red-100 pl-10 pt-4

                                    "
                                    swipeOptions={{continuous: false}}
                                    ref={el => (reactSwipeEl = el)}

                                >
                                    {
                                        fetchAds.data.map((ads, index) => {
                                            return (
                                                    <div className="w-full  m-auto
                                                    max-sm:bg-red-900 max-sm:w-full
                                                "
                                                         key={index}>
                                                        <img src={ads.imageURL} alt="Error"
                                                             height={15} width={10}
                                                             className="w-[350px] h-[390px] border-4 border-orange-500 object-cover
                                                        max-sm:
                                                         "
                                                        />
                                                        <button
                                                            className="border-2 border-black
                                                            mx-10  px-24 mt-4 py-3 rounded-full
                                                             font-extrabold uppercase bg-red-600 text-white
                                                            "
                                                        onClick={
                                                            ()=>{
                                                                dispatch(addProductReducers({
                                                                    userName: data.name,
                                                                    adsName: ads.adsName,
                                                                    clientName: ads.name,
                                                                    Phone: ads.Phone,
                                                                    isOrderPlaced:false
                                                                }))
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
                            className="uppercase bg-green-700 py-4 px-14 rounded-full text-white  font-bold border-2 border-black mr-2
                            max-sm:px-10 max-sm:py-2"
                            onClick={() => reactSwipeEl.prev()}
                        >
                            Previous
                        </button>
                        {
                            (!Ads_Reward.loading) && (
                                <button
                                    className="uppercase bg-green-700 py-4 px-14 rounded-full text-white  font-bold border-2 border-black ml-2
                                    max-sm:px-10 max-sm:py-2"

                                    onClick={handleNext}>
                                    Next
                                </button>
                            )

                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default User_dashboard