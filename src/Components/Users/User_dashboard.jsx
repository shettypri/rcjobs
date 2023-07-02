import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {adsRewardREducers, fetchAdsReducers} from "../../App/Slice/userDashBoardSlice.js";
import ReactSwipe from "react-swipe"

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
            <div className="flex flex-col border border-orange-500 m-auto w-1/2 ">
                <h1 className=" w-full m-auto bg-gradient-to-r from-orange-300 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                    User Dashboard
                </h1>
                <div>
                    <div className="bg-green-500 m-auto w-1/2 ">
                        {
                            fetchAds.loading && <h1> loading</h1>

                        }
                        {
                            fetchAds.Success && (

                                <ReactSwipe
                                    className="carousel w-full h-[400px] bg-red-100 pl-10 pt-4 "
                                    swipeOptions={{continuous: false}}
                                    ref={el => (reactSwipeEl = el)}

                                >
                                    {
                                        fetchAds.data.map((ads, index) => {
                                            return (
                                                <div className="w-1/2  m-auto"
                                                     key={index}>
                                                    <img src={ads.imageURL} alt="Error"
                                                         height={15} width={10}
                                                         className="w-[300px] h-[370px] border-4 border-orange-500 object-cover "
                                                    />
                                                </div>
                                            )
                                        })}
                                </ReactSwipe>
                            )
                        }</div>
                    <div className="my-4 flex flex-row justify-around bg-gray-400 py-4">
                        <button
                            className="uppercase bg-green-700 py-4 px-14 rounded-full text-white  font-bold border-2 border-black mr-2"
                            onClick={() => reactSwipeEl.prev()}
                        >
                            Previous
                        </button>
                        {
                            (!Ads_Reward.loading) && (
                                <button
                                    className="uppercase bg-green-700 py-4 px-14 rounded-full text-white  font-bold border-2 border-black ml-2"

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