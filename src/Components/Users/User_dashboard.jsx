import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adsRewardREducers, fetchAdsReducers } from "../../App/Slice/userDashBoardSlice.js";
import ReactSwipe from "react-swipe"
import { addProductReducers } from "../../App/Slice/BuyProductSlice.js";
import ShareLink from "./ShareLink.jsx";
import { isLoginReducers } from "../../App/Slice/userSlice.js";
import Loader from "../Global/Loader.jsx";
import Google_Ads from "../Google_Ads/Google_Ads.jsx";
import Payment_Info from "../Company_Bank_Details/Payment_Info.jsx";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../config/firebase.config.js";
import uploadProductToUser from "../../Services/user_service/uploadProductToUser.js";
import SwipeLoader from "../Global/SwipeLoader.jsx";
import AffiliateButton from "./AffliateButton.jsx";

const User_dashboard = () => {
    let [reactSwipeEl, setReactSwipeEl] = useState("");
    const [adsNumber, setAdsNumber] = useState(1);
    const [showAdsOnSwipe, setShowAdsOnSwipe] = useState(false)
    const [buyDetails, setBuyDetails] = useState(false);
    const [uploadImage, setUploadImage] = useState(null)
    const [imageEror, setImageEror] = useState(false)
    const [loader, setLoader] = useState(false);
    const [productDetails, setProductDetails] = useState("");

    const dispatch = useDispatch()
    const { fetchAds, Ads_Reward } = useSelector(state => state.userDashBoardReducers)
    const { isLoggedIn, data } = useSelector(state => state.userReducer)
    useEffect(() => {
        dispatch(fetchAdsReducers())
        dispatch(isLoginReducers(data.id))
    }, []);


    const BuyProductBtn = async (ProductDetails) => {
        if (uploadImage <= 0) {
            setImageEror(true)
        } else {
            setLoader(true)
            const imageFile = uploadImage.name
            const imageFolder = "PRODCUT_PAYMENT"
            const textV4 = v4()
            //     image uploade code to firebase:
            const fileFolderRef = ref(storage, `${imageFolder}/${imageFile + textV4}`)
            try {
                await uploadBytes(fileFolderRef, uploadImage)
                const imageUrl = await getDownloadURL(ref(storage, `${imageFolder}/${imageFile + textV4}`))

                //     to store in databse we calling the dispacth

                const orderDetails = {
                    userName: data.name,
                    address: data.Address,
                    cust_Phone: data.phone,
                    Pincode: data.PinCode,
                    adsName: ProductDetails.Ads_name,
                    clientName: ProductDetails.name,
                    Phone: ProductDetails.Phone,
                    actual_price: ProductDetails.Ads_price,
                    paid_price: Number(ProductDetails.Ads_price) - (Number(ProductDetails.Ads_price) / 100) * (Number(ProductDetails.Ads_Offer)),
                    offer: ProductDetails.Ads_Offer,
                    ProductUrl: ProductDetails.imageURL,
                    paidUrl: imageUrl,
                    order_date: new Date().toUTCString().slice(5, 16),
                    order_Month: new Date().getMonth(),
                    order_TimeStamp: new Date(),
                    order_year: new Date().getFullYear(),
                    isOrderPlaced: false,

                    isAffiliated: false,
                }
                console.log(orderDetails)
                dispatch(addProductReducers(orderDetails))
                const alertMessage = `The order ` + ProductDetails.Ads_name + ` has been Placed`
                const productData = {
                    adsName: ProductDetails.Ads_name,
                    clientName: ProductDetails.name,
                    Phone: ProductDetails.Phone,
                    actual_price: ProductDetails.Ads_price,
                    paid_price: Number(ProductDetails.Ads_price) - (Number(ProductDetails.Ads_price) / 100) * (Number(ProductDetails.Ads_Offer)),
                    offer: ProductDetails.Ads_Offer,
                    ProductUrl: ProductDetails.imageURL,
                    paidUrl: imageUrl,
                }

                // const allTheOrders = data.buyProduct
                // allTheOrders.push(productData)  //pushing the data into the array
                // await uploadProductToUser(data.id, allTheOrders) //uploading the data into the database

                setLoader(false)
                alert(alertMessage)
                setBuyDetails(false)
            } catch (error) {
                console.error(error);
            }
        }
    }

    /**
     * The function `handleNext` is used to handle the next action in a React component, including
     * checking if the user is logged in, updating the ads limit and wallet, dispatching actions, and
     * moving to the next element in a React Swipe component.
     */
    const handleNext = () => {
        setShowAdsOnSwipe(true)
        isLoggedIn &&
            (
                adsNumber !== fetchAds.data.length && (
                    data.limit > 0 && (dispatch(adsRewardREducers({
                        id: data.id,
                        limit: data.limit - 1,
                        wallet: data.wallet + 10
                    })))
                )
            )
        isLoggedIn && (dispatch(isLoginReducers(data.id)))
        // adsNumber >0 && (setAdsNumber(adsNumber-1))
        adsNumber !== fetchAds.data.length && (setAdsNumber(adsNumber + 1))
        // console.log("adsLength",adsNumber)
        // console.log("Total length",fetchAds.data.length )
        setTimeout(() => {
            setShowAdsOnSwipe(false)
        }, 6000)
        reactSwipeEl.next()

    }
    // console.log(fetchAds.data)
    return (
        <>
            {
                buyDetails ? (
                    <div className="w-full pb-44 10 ">
                        <div className="w-full flex flex-row justify-around max-sm:flex-col ">
                            <div className="w-1/2 max-sm:my-2 max-sm:w-full">
                                <div className="h-4/6">
                                    <img src={productDetails.imageURL} width={400} height={20}
                                        className="mx-auto w-2/4 h-5/6" />
                                </div>

                                <div className="mx-auto  w-1/2 flex">
                                    <section
                                        className="font-bold capitalize  border-2 border-black mx-auto px-10 py-2 rounded-full max-sm:px-20">
                                        {productDetails.Ads_name}
                                    </section>

                                </div>

                                <div className="mx-auto  w-1/2 flex flex-row justify-between mt-4">
                                    <section className="font-bold">Price</section>
                                    <section className="font-bold">:</section>
                                    <section className={productDetails.Ads_Offer !== 0 ? "font-bold capitalize  line-through" : " font-bold capitalize "}>
                                        {productDetails.Ads_price}
                                    </section>

                                </div>
                                <div className={productDetails.Ads_Offer !== 0 ? "mx-auto  w-1/2 flex flex-row justify-between mt-4" : "hidden"}>
                                    <section className="font-bold">Offer Price</section>
                                    <section className="font-bold">:</section>
                                    <section className="font-bold capitalize  ">
                                        {/* {productDetails.Ads_price} */}
                                        {Number(productDetails.Ads_price) - (Number(productDetails.Ads_price) / 100) * (Number(productDetails.Ads_Offer))}
                                    </section>

                                </div>

                                <div className="">
                                    <input
                                        type="file"
                                        name="name"
                                        accept="image/*"
                                        className=" mt-1 flex justify-center p-3 space-y-3 "
                                        onChange={(event) => {
                                            setUploadImage(event.target.files[0])
                                        }}
                                    />
                                    {
                                        imageEror &&
                                        <section className="text-red-600 font-bold">

                                            Please upload the receipt of the product payment
                                        </section>
                                    }

                                </div>

                                {
                                    loader && <Loader />
                                }
                                <div className="mx-auto  w-1/2 flex flex-row justify-around mt-4 max-sm:flex-col-reverse">
                                    <button
                                        className="text-white capitalize bg-red-600   px-10 py-1 rounded-lg hover:font-bold max-sm:my-2"
                                        onClick={() => setBuyDetails(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="text-white capitalize bg-green-600  rounded-lg px-12 py-1 border-2 border-green-800 hover:font-bold "
                                        onClick={() => BuyProductBtn(productDetails)}
                                        disabled={loader}
                                    >
                                        Buy

                                    </button>

                                </div>


                            </div>

                            <div>
                                <div>
                                    <Payment_Info />
                                </div>
                            </div>

                        </div>

                    </div>
                ) : (
                    <div className="flex flex-row w-full  max-sm:flex-col max-sm:h-full">
                        <div className="w-3/12 max-sm:w-full ">
                            <div className="max-sm:h-[30px]"><Google_Ads /></div>
                            <div className="max-sm:hidden"><Google_Ads /></div>
                            <div className="max-sm:hidden"><Google_Ads /></div>
                        </div>
                        <div className=" border border-orange-500 m-auto w-5/12 mt-2
          max-sm:w-full
            ">
                            <h1 className="w-full m-auto bg-gradient-to-r from-orange-300 to-orange-500 flex items-center justify-center text-white text-2xl font-bold ">
                                User Dashboard
                            </h1>
                            <div className="flex justify-end mb-4 mr-4 mt-4">
                                <ShareLink />
                            </div>
                            <div>
                                <div className=" mx-0 w-11/12
                       max-sm:w-full max-sm:mx-0
                    ">
                                    {
                                        fetchAds.loading && <Loader />
                                    }
                                    {
                                        fetchAds.Success && (
                                            <>

                                                <ReactSwipe
                                                    className={"carousel w-full h-[664px] bg-gray-50  pt-7 px-0 mx-4 max-sm:w-full max-sm:p-0 max-sm:m-0"}
                                                    // swipeOptions={{ disableSwipe: true }}
                                                    swipeOptions={{ continuous: false, disableSwipe: true }}
                                                    ref={el => (reactSwipeEl = el)}

                                                >
                                                    {
                                                        fetchAds.data.map((ads, index) => {
                                                            // console.log(ads.id)
                                                            return (
                                                                <div className="w-[600px] pb-0  mx-auto
                                                     max-2xl:w-3/4 max-xl:w-full
                                                    max-sm:bg-red-100 max-sm:w-full max-sm:m-0 px-0
                                                "
                                                                    key={index}>

                                                                    <div className={
                                                                        showAdsOnSwipe ? "block " : "hidden"
                                                                    }>
                                                                        <section className="max-sm:w-full w-full flex flex-col ">
                                                                            {/* <Google_Ads />
                                                                            <Google_Ads /> */}
                                                                            <SwipeLoader />
                                                                        </section >
                                                                    </div>

                                                                    <div className={showAdsOnSwipe ? "hidden" : "block w-full"}>

                                                                        <img src={ads.imageURL} alt="Error"
                                                                            height={15} width={22}
                                                                            className="w-[550px] h-[390px] border-4 border-orange-500 object-fill mx-auto
                                                        max-sm:w-[320px] max-sm:mx-auto max-sm:my-2 z-10 max-2xl:w-3/4
                                                         "
                                                                        />

                                                                        <div
                                                                            className="text-xl flex justify-center my-2 font-extrabold capitalize border-dashed border border-black py-4 w-3/4 mx-auto ">
                                                                            {ads.Ads_name}

                                                                        </div>
                                                                        <div className="flex flex-col ">
                                                                            <div
                                                                                className="mx-2 font-bold text-2xl"> &#8377;
                                                                                {
                                                                                    Number(ads.Ads_price) - (Number(ads.Ads_price) / 100) * (Number(ads.Ads_Offer))
                                                                                }
                                                                            </div>
                                                                            <div
                                                                                className="mx-2 font-bold text-lg flex flex-row ">
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
                                                                        <div className="flex justify-between pb-4 mr-2 mb-2 ">

                                                                            <AffiliateButton isUSerID={data.id} isAdsDetails={ads} />
                                                                            <button
                                                                                className="
                                                                  px-16 mt-0 py-3 rounded-xl 
                                                                 font-extrabold uppercase bg-red-700 text-white
                                                                 max-sm:mx-4 max-sm:px-12 max-sm:py-1 max-sm:rounded-lg
                                                                 max-2xl:mx-10
                                                                "
                                                                                /* The above code is handling an onClick event
                                                                                in a React component. When the event is
                                                                                triggered, it creates an object called
                                                                                `orderDetails` with various properties such
                                                                                as `userName`, `address`, `cust_Phone`, etc.
                                                                                The values for these properties are obtained
                                                                                from the `data` and `ads` objects. */

                                                                                onClick={() => {
                                                                                    setProductDetails(ads)
                                                                                    setBuyDetails(true)
                                                                                }}

                                                                            >
                                                                                buy
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                </ReactSwipe>
                                                {/*    )*/}
                                                {/*}*/}

                                            </>
                                        )
                                    }</div>
                                <div className="my-4 flex flex-row justify-around bg-gray-200 py-4">
                                    <button
                                        className="uppercase bg-white  hover:bg-sky-700 py-3 px-14 rounded-lg text-black  font-bold border-2 border-gray-500 mr-2
                            max-sm:px-10 max-sm:py-2"
                                        disabled={showAdsOnSwipe}
                                        onClick={() => {
                                            reactSwipeEl.prev()
                                            adsNumber > 0 && (setAdsNumber(adsNumber - 1))
                                        }
                                        }
                                    >
                                        Previous
                                    </button>
                                    {
                                        !showAdsOnSwipe &&
                                            (!(Ads_Reward.loading && data.loading)) ? (
                                            <button
                                                className="uppercase bg-black py-3 px-14 rounded-lg text-white  font-bold border-2 border-gray-500 ml-2
                                    max-sm:px-10 max-sm:py-2"

                                                onClick={() =>
                                                    handleNext()}
                                            >
                                                Next
                                            </button>
                                        ) : (
                                            <><Loader /></>
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
                )
            }

        </>
    )
}
export default User_dashboard