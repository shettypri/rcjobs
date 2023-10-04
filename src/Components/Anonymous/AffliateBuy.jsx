import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductReducers } from "../../App/Slice/BuyProductSlice";
import uploadPayment from "../../Services/anonymous/uploadPayment";
import Loader2 from "../Global/Loader2";
import ErrorText from "../Global/Affliate/ErrorText";
import SuccessText from "../Global/Affliate/SucessText";


const AffliateBuy = ({ userData, isAnonymous, paymentFile }) => {
  const [buyBtnClick, setBuyBtnClick] = useState(false)

  const { getAdsState } = useSelector(state => state.AnonymousReducer)
  const adsData = getAdsState.data

  const dispatch = useDispatch()

  const referLinkRewardID = sessionStorage.getItem("affiliateLinkReward")

  const { addProduct } = useSelector(state => state.ProductReducer)
  const { loading, Error, Success } = addProduct
  console.log(addProduct);


  const placeOrderBtn = async () => {
    if (paymentFile === null) {
      alert("Please upload the payment proof")
      return
    } else {
      setBuyBtnClick(true)
      const buyData = {
        userName: userData.name,
        address: userData.address,
        cust_Phone: userData.cust_Phone,
        Pincode: userData.Pincode,
        isAnonymous: isAnonymous,

        adsName: adsData.Ads_name,
        clientName: adsData.name,
        Phone: adsData.Phone,
        actual_price: adsData.Ads_price,
        paid_price: Number(adsData.Ads_price) - (Number(adsData.Ads_price) / 100) * (Number(adsData.Ads_Offer)),
        offer: adsData.Ads_Offer,
        ProductUrl: adsData.imageURL,
        paidUrl: "",

        order_date: new Date().toUTCString().slice(5, 16),
        order_Month: new Date().getMonth(),
        order_TimeStamp: new Date(),
        order_year: new Date().getFullYear(),

        affiliatePercentage: adsData.affiliatePercentage,

        isOrderPlaced: false,

        isAffiliated: true,
        suggestLinkUserId: referLinkRewardID
      }
      const imageUrl = await uploadPayment(paymentFile)
      buyData.paidUrl = imageUrl
      await dispatch(addProductReducers(buyData))
      console.log(buyData);
      setTimeout(() => {
        setBuyBtnClick(false)
      }, 4000)
    }
  }
  return (
    <>
      {
        buyBtnClick && (
          <>
            {loading && <Loader2 />}
            {Error && <ErrorText text={"Order not Placed"} />}
            {Success && <SuccessText text="Order Placed" />}
          </>

        )
      }



      <button className="bg-orange-600 px-16 py-2 mb-10 mx-auto flex rounded-lg"
        onClick={placeOrderBtn}
        disabled={loading}
      >
        <section className="text-white font-bold">
          Buy
        </section>
      </button>
    </>
  )
}

export default AffliateBuy